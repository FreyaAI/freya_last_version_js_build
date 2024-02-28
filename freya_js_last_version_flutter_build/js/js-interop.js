import { getAuthToken } from "./integration.js";

(function () {
  "use strict";

  window._stateSet = (function () {
    let initialized = false;

    return async function () {
      // Mark the function as async to use await inside
      if (initialized) {
        console.log("State set has already been called.");
        return;
      }
      initialized = true;

      let appState = window._appState;
      console.log("appState:", appState);

      window.monitorWidth = window.screen.width;
      window.monitorHeight = window.screen.height;

      let calculatedWidthChatBox = window.monitorWidth * 0.36;
      let calculatedHeightChatBox = window.monitorHeight * 0.73;

      let calculatedWidthClosedChatBox = window.monitorWidth * 0.2;
      let calculatedHeightClosedChatBox = window.monitorHeight * 0.1;
      let isClosedChatBox = false;

      // Use await to get the token asynchronously
      let currentAuthToken = await getAuthToken();
      console.log("Current Auth Token:", currentAuthToken);

      // Assuming you might refresh or update the token later
      let updatedAuthToken = await getAuthToken();
      console.log("Updated Auth Token:", updatedAuthToken);

      window.getMonitorDimensions = function () {
        if (!isClosedChatBox) {
          return {
            width: calculatedWidthChatBox,
            height: calculatedHeightChatBox,
          };
        }
        return {
          width: calculatedWidthClosedChatBox,
          height: calculatedHeightClosedChatBox,
        };
      };

      let updateStateChatBox = async function () {
        // Mark as async if getAuthToken inside is async
        await appState.getChatBoxWidth(calculatedWidthChatBox);
        await appState.getChatBoxHeight(calculatedHeightChatBox);
        let authToken = await getAuthToken(); // Await the async call
        await appState.getAuthToken(authToken);
      };

      let updateIsClosedChatBox = async function () {
        // Async if it needs to wait for async actions
        isClosedChatBox = appState.isClosedChatBox;
        var chatBoxStatusElement = document.getElementById("chatBoxStatus");
        if (chatBoxStatusElement) {
          chatBoxStatusElement.textContent =
            "Chat Box: " + (isClosedChatBox ? "Closed" : "Open");
        }

        let dimensions = window.getMonitorDimensions();

        let flutterTarget = document.getElementById("flutter_target");
        if (flutterTarget) {
          flutterTarget.style.width = dimensions.width + "px";
          flutterTarget.style.height = dimensions.height + "px";
        } else {
          console.error("Element with ID 'flutter_target' was not found.");
        }
      };

      if (
        appState &&
        appState.addHandler &&
        typeof appState.addHandler === "function"
      ) {
        appState.addHandler(await updateIsClosedChatBox); // UI update for chat box state
      } else {
        console.log("appState or appState.addHandler is not properly defined.");
      }

      // Call the async functions properly
      await updateStateChatBox();
      await updateIsClosedChatBox();
    };
  })();
})();
