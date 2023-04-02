import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvZ6jY1ZjI-TlJ-FwM1-OxokxRBPBnAlw",
  authDomain: "hepukaflix.firebaseapp.com",
  projectId: "hepukaflix",
  storageBucket: "hepukaflix.appspot.com",
  messagingSenderId: "848553969201",
  appId: "1:848553969201:web:b94394b82583cf2e3ff710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
