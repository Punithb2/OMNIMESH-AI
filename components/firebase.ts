import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace this with your own config object from the Firebase console
const firebaseConfig = {
  // YOUR FIREBASE CONFIG DETAILS
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth service
export const auth = getAuth(app);
