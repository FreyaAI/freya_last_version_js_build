# freya_last_version_js_build

# SETUP

This guide will help you integrate Flutter into your web project. Follow these steps carefully to ensure everything is set up correctly.

## Step 1: Update the `<head>` Section

Paste the following lines into the `<head>` section of your project's main `index.html` file:

```html
<script src="./flutter/flutter.js"></script>
<script src="flutter/js/js-interop.js" type='module' defer></script>
```

## Step 2: Add to the Beginning of the `<body>` Section

Paste this code at the very beginning of the `<body>` section:

```html
<div id="flutter_target" style="position: fixed; bottom: 0; right: 0; z-index: 1000; transition: all 150ms ease-in;"></div>
```

## Step 3: Add to the End of the `<body>` Section

Insert the following code snippet at the end of the `<body>` section, but make sure it's still inside the `<body>`:

```html
<!-- Initialize Flutter widget -->
<script src="content.js"></script>
<script>
    window.addEventListener("load", function(ev) {
        console.log("Flutter is ready");

        let target = document.querySelector("#flutter_target");
        _flutter.loader.loadEntrypoint({
            entrypointUrl: "/flutter/main.dart.js",
            onEntrypointLoaded: async function(engineInitializer) {
                let appRunner = await engineInitializer.initializeEngine({
                    assetBase: "/flutter/",
                    hostElement: target,
                });
                await appRunner.runApp();
            },
        });
    });
</script>
```

## Step 4: Prepare the Flutter Directory

Create a folder named `flutter` in the main directory of your project and copy the build files provided by the Flutter team into this folder.

## Step 5: Define Integration Variables

In the `integration.js` file located within the `js` folder of your Flutter directory, define the variables you wish to use for communication with Flutter, following the provided example.

## Step 6: Notify the Flutter Team for New Builds

If you have defined a new variable or function, make sure to inform the Flutter team. They will provide you with the updated build files necessary for your integration.

