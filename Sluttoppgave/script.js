// app.js
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

// 🔧 Firebase config
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

// 📍 Funksjoner for alle sider
window.auth = auth;
window.db = db;

// Brukerstatus (vis e-post og logg ut)
export function initAuthUI() {
  const userInfo = document.getElementById("userInfo");
  const logoutBtn = document.getElementById("logoutBtn");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userInfo && (userInfo.textContent = `✅ Innlogget som: ${user.email}`);
      logoutBtn && (logoutBtn.style.display = "inline-block");
    } else {
      userInfo && (userInfo.textContent = `❌ Ikke logget inn`);
      logoutBtn && (logoutBtn.style.display = "none");
    }
  });

  logoutBtn?.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "index.html";
    });
  });
}

// 📩 Registrer ny bruker
export async function handleRegistration(email, password, statusEl) {
  if (!email.includes("@")) {
    statusEl.textContent = "❌ Ugyldig e-postadresse.";
    return;
  }
  if (password.length < 6) {
    statusEl.textContent = "❌ Passord må være minst 6 tegn.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    statusEl.textContent = "✅ Bruker registrert!";
    window.location.href = "index.html";
  } catch (error) {
    statusEl.textContent = `❌ Feil: ${error.message}`;
  }
}

// 🔐 Google login
export async function loginWithGoogle(statusEl) {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    statusEl.textContent = `✅ Logget inn: ${result.user.email}`;
    window.location.href = "index.html";
  } catch (error) {
    statusEl.textContent = `❌ Google-innlogging feilet: ${error.message}`;
  }
}

// 🔑 Logg inn med e-post/passord
export async function handleLogin(email, password, statusEl) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "mine-bestillinger.html";
  } catch (error) {
    statusEl.textContent = `❌ Feil: ${error.message}`;
  }
}

// 📦 Send booking
export async function sendBooking(form, statusEl) {
  const user = auth.currentUser;
  if (!user) {
    statusEl.textContent = "❌ Du må være logget inn for å sende bestilling.";
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
    statusEl.textContent = "✅ Bestilling sendt!";
    form.reset();
  } catch (err) {
    statusEl.textContent = `❌ Feil: ${err.message}`;
  }
}

// 📋 Hent bestillinger for innlogget bruker
export async function fetchBookings(ulElement) {
  const user = auth.currentUser;
  if (!user) {
    ulElement.innerHTML = "<li>Du må være logget inn.</li>";
    return;
  }

  const q = query(
    collection(db, "bestillinger"),
    where("bruker", "==", user.uid)
  );
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