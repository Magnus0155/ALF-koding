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

//  Firebase config
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

//  Funksjoner for alle sider
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

//  Registrer ny bruker
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

//  Google login
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

//  Logg inn med e-post/passord
export async function handleLogin(email, password, statusEl) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "mine-bestillinger.html";
  } catch (error) {
    statusEl.textContent = `❌ Feil: ${error.message}`;
  }
}

//  Send booking
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

//  Hent bestillinger for innlogget bruker
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

/*spesielle tilbud*/
fetch("reiser.json")
  .then((response) => response.json())
  .then((reiser) => {
    const container = document.getElementById("tilbud-container");
    const tilbud = reiser.filter((r) => r.type === "tilbud").slice(0, 4); 
    //  Begrens til 4 med slice

    tilbud.forEach((reise) => {
      const kort = document.createElement("div");
      kort.className = "tilbud-card card";

      kort.innerHTML = `
        <img src="${reise.bilde}" alt="${reise.tittel || 'Reisebilde'}" />
        <h3>${reise.tittel}</h3>
        <p>${reise.beskrivelse}</p>
        <strong>${reise.pris} kr</strong>
      `;

      container.appendChild(kort);
    });
  })
  .catch((error) => {
    document.getElementById("tilbud-container").innerHTML =
      "<p>Kunne ikke laste tilbud akkurat nå.</p>";
    console.error("Klarte ikke å laste reiser:", error);
  });

/*Kategorier*/ 

fetch("reiser.json")
  .then((res) => reiser.json())
  .then((kategorier) => {
    const container = document.getElementById("kategorier");

    kategorier.forEach((kategori) => {
      const knapp = document.createElement("a");
      knapp.className = "kategori-knapp";
      knapp.href = kategori.lenke;

      knapp.innerHTML = `
        <img src="${kategori.bilde}" alt="${kategori.navn}" />
        <h3>${kategori.navn}</h3>
      `;

      container.appendChild(knapp);
    });
  })
  .catch((err) => console.error("Feil ved lasting av kategorier:", err));



// registrer

    import { handleRegistration, loginWithGoogle } from "./app.js";

    document.addEventListener("DOMContentLoaded", () => {
      const email = document.getElementById("email");
      const pass = document.getElementById("password");
      const regBtn = document.getElementById("registerBtn");
      const googleBtn = document.getElementById("googleBtn");
      const status = document.getElementById("status");

      regBtn.addEventListener("click", () =>
        handleRegistration(email.value, pass.value, status)
      );

      googleBtn.addEventListener("click", () =>
        loginWithGoogle(status)
      );
    });

    // Mine bestillinger

        import { initAuthUI, sendBooking } from "./app.js";

    document.addEventListener("DOMContentLoaded", () => {
      initAuthUI();

      const form = document.getElementById("bookingForm");
      const status = document.getElementById("formStatus");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendBooking(form, status);
      });
    });
