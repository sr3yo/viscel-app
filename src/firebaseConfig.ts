//connecting to firebase
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCtVpx8XRnxZnQfpZyTQW4YxhKXmUKEe3Q',
  authDomain: "viscel-5e583.firebaseapp.com",
  projectId: "viscel-5e583",

};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export {app, provider};
