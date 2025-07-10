// === Firebase setup ===
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// === Firebase config ===
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

// === UI-autentisering ===
export function initAuthUI() {
  const userInfo = document.getElementById("userInfo");
  const logoutBtn = document.getElementById("logoutBtn");
  const notLoggedInMessage = document.getElementById("notLoggedInMessage");
  const bookingsList = document.getElementById("bestillingsliste");
  const bookingForm = document.getElementById("bookingForm");

  if (!userInfo || !logoutBtn || !notLoggedInMessage || !bookingsList || !bookingForm) {
    // Elementene finnes ikke på siden - hopp over initiering
    return;
  }

  const goHomeBtn = document.getElementById("goHomeBtn");
  if (goHomeBtn) {
    goHomeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo.textContent = `Innlogget som: ${user.email}`;
      logoutBtn.style.display = "inline-block";
      notLoggedInMessage.style.display = "none";
      bookingsList.style.display = "block";
      bookingForm.style.display = "block";
    } else {
      userInfo.textContent = "Ikke logget inn";
      logoutBtn.style.display = "none";
      notLoggedInMessage.style.display = "block";
      bookingsList.style.display = "none";
      bookingForm.style.display = "none";
    }
  });

  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "index.html";
    });
  });
}

// === Bestilling ===
export async function sendBooking(form, statusEl) {
  const user = auth.currentUser;
  if (!user) {
    statusEl.textContent = "Du må være logget inn for å sende bestilling.";
    return;
  }

  try {
    const booking = {
      navn: form.navn.value,
      destinasjon: form.destinasjon.value,
      dato: form.dato.value,
      bruker: user.uid
    };

    await addDoc(collection(db, "bestillinger"), booking);
    statusEl.textContent = "Bestilling sendt!";
    form.reset();
  } catch (err) {
    statusEl.textContent = `Feil: ${err.message}`;
  }
}

export async function fetchBookings(ulElement) {
  const user = auth.currentUser;
  if (!user) {
    ulElement.innerHTML = "<li>Du må være logget inn.</li>";
    return;
  }

  const q = query(collection(db, "bestillinger"), where("bruker", "==", user.uid));
  const snapshot = await getDocs(q);
  ulElement.innerHTML = "";

  if (snapshot.empty) {
    ulElement.innerHTML = "<li>Ingen bestillinger funnet.</li>";
  }

  snapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.navn} → ${data.destinasjon} (${data.dato})`;
    ulElement.appendChild(li);
  });
}

// === Event-listeners som ikke handler om filtrering ===
document.addEventListener("DOMContentLoaded", () => {
  // Init auth UI - bare hvis elementer finnes
  initAuthUI();

  // Registrering og Google login
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const regBtn = document.getElementById("registerBtn");
  const googleBtn = document.getElementById("googleBtn");
  const status = document.getElementById("status");

  if (regBtn && googleBtn) {
    regBtn.addEventListener("click", () =>
      handleRegistration(email.value, pass.value, status)
    );

    googleBtn.addEventListener("click", () =>
      loginWithGoogle(status)
    );
  }

  // Bestillingsskjema
  const form = document.getElementById("bookingForm");
  const formStatus = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendBooking(form, formStatus);
    });
  }
});

// === Funksjoner for registrering og Google login ===
function handleRegistration(email, pass, statusEl) {
  if (!email || !pass) {
    statusEl.textContent = "Skriv inn e-post og passord.";
    return;
  }
  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      statusEl.textContent = "Registrering vellykket!";
    })
    .catch((error) => {
      statusEl.textContent = `Feil: ${error.message}`;
    });
}

function loginWithGoogle(statusEl) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      statusEl.textContent = "Innlogging vellykket!";
    })
    .catch((error) => {
      statusEl.textContent = `Feil: ${error.message}`;
    });
}
