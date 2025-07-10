// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export function initAuthUI() {
  const userInfo = document.getElementById("userInfo");
  const logoutBtn = document.getElementById("logoutBtn");
  const notLoggedInMessage = document.getElementById("notLoggedInMessage");
  const bookingsList = document.getElementById("bestillingsliste");
  const bookingForm = document.getElementById("bookingForm");

  if (!userInfo || !logoutBtn || !notLoggedInMessage) return;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.textContent = `Innlogget som: ${user.email}`;
      logoutBtn.style.display = "inline-block";
      notLoggedInMessage.style.display = "none";
      if (bookingsList) bookingsList.style.display = "block";
      if (bookingForm) bookingForm.style.display = "block";
    } else {
      userInfo.textContent = "Ikke logget inn";
      logoutBtn.style.display = "none";
      notLoggedInMessage.style.display = "block";
      if (bookingsList) bookingsList.style.display = "none";
      if (bookingForm) bookingForm.style.display = "none";
    }
  });

  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => window.location.href = "index.html");
  });
}

export function handleRegistration(email, password, statusEl) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => statusEl.textContent = "Registrert!")
    .catch((err) => statusEl.textContent = `Feil: ${err.message}`);
}

export function loginWithGoogle(statusEl) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => (statusEl.textContent = "Logget inn med Google!"))
    .catch((err) => (statusEl.textContent = `Feil: ${err.message}`));
}
