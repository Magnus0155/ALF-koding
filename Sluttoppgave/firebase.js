// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_DOMENE.firebaseapp.com",
  projectId: "DITT_PROJECT_ID",
  storageBucket: "DITT_BUCKET",
  messagingSenderId: "DIN_ID",
  appId: "DIN_APP_ID"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
