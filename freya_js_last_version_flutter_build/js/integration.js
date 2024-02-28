// integration.js
let authToken = "initialToken"; // Example variable

export const getAuthToken = async () => {
  return authToken;
};

export const setAuthToken = (newToken) => {
  authToken = newToken;
};
