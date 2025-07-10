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
window.auth = auth;
window.db = db;

// === Autentisering UI-status ===
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

// === Registrering ===
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

// === Google login ===
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

// === Innlogging med e-post ===
export async function handleLogin(email, password, statusEl) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "mine-bestillinger.html";
  } catch (error) {
    statusEl.textContent = `❌ Feil: ${error.message}`;
  }
}

// === Send booking ===
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

// === Hent bestillinger ===
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

// === Tilbud: Hent og vis ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tilbud-container");
  if (!container) return;

  fetch("reiser.json")
    .then((response) => response.json())
    .then((reiser) => {
      const tilbud = reiser.filter((r) => r.type === "tilbud").slice(0, 4);

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
      container.innerHTML = "<p>Kunne ikke laste tilbud akkurat nå.</p>";
      console.error("Klarte ikke å laste reiser:", error);
    });
});

// === Populære reiser ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("popularTravel-container");
  if (!container) return;

  fetch("reiser.json")
    .then((response) => response.json())
    .then((reiser) => {
      const tilbud = reiser.filter((r) => r.populært === "ja").slice(0, 8);

      if (!tilbud.length) {
        container.innerHTML = "<p>Ingen populære reiser funnet.</p>";
        return;
      }

      tilbud.forEach((reise) => {
        const kort = document.createElement("div");
        kort.className = "populaer-card";
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
      container.innerHTML = "<p>Kunne ikke laste tilbud akkurat nå.</p>";
      console.error("Klarte ikke å laste reiser:", error);
    });
});

// === Våre anbefalinger ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("våreAnbefalinger-container");
  if (!container) return;

  fetch("reiser.json")
    .then((response) => response.json())
    .then((reiser) => {
      const anbefalinger = reiser.filter((r) => r.anbefalt === "ja").slice(0, 4);

      if (!anbefalinger.length) {
        container.innerHTML = "<p>Ingen anbefalinger funnet.</p>";
        return;
      }

      anbefalinger.forEach((reise) => {
        const kort = document.createElement("div");
        kort.className = "anbefaling-card";
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
      container.innerHTML = "<p>Kunne ikke laste tilbud akkurat nå.</p>";
      console.error("Klarte ikke å laste reiser:", error);
    });
});

// === Registrer side: Håndter registrering ===
document.addEventListener("DOMContentLoaded", () => {
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
});

// === Mine bestillinger: Håndter skjema ===
document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();

  const form = document.getElementById("bookingForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendBooking(form, status);
    });
  }
});

// === Filtrering av valg html ===

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reise-container");
  let reiser = [];

  fetch("reiser.json")
    .then(res => res.json())
    .then(data => {
      reiser = data;
      visReiser(reiser);
    })
    .catch(() => {
      container.innerHTML = "<p>Kunne ikke hente reiser.</p>";
    });

  const checkboxes = document.querySelectorAll(".sidebar input[type=checkbox]");
  checkboxes.forEach(box => {
    box.addEventListener("change", filtrerReiser);
  });

  function filtrerReiser() {
    const valgteKategorier = Array.from(document.querySelectorAll('input[name="kategori"]:checked')).map(el => el.value);
    const valgteBudsjett = Array.from(document.querySelectorAll('input[name="budsjett"]:checked')).map(el => el.value);

    let filtrerte = reiser;

    if (valgteKategorier.length > 0) {
      filtrerte = filtrerte.filter(r => valgteKategorier.includes(r.kategori.toLowerCase()));
    }

    if (valgteBudsjett.length > 0) {
      filtrerte = filtrerte.filter(r => {
        return valgteBudsjett.some(bud => {
          const maxPris = parseInt(bud.replace("under", ""));
          return r.pris <= maxPris;
        });
      });
    }

    visReiser(filtrerte);
  }

  function visReiser(liste) {
    container.innerHTML = "";
    if (liste.length === 0) {
      container.innerHTML = "<p>Ingen reiser funnet med valgt filter.</p>";
      return;
    }
    liste.forEach(reise => {
      const kort = document.createElement("div");
      kort.className = "reise-card";
      kort.innerHTML = `
        <img src="${reise.bilde}" alt="${reise.tittel}">
        <h3>${reise.tittel}</h3>
        <p>Pris: ${reise.pris} kr</p>
        <p>Varighet: ${reise.dager} dager</p>
        <p>Kategori: ${reise.kategori}</p>
      `;
      container.appendChild(kort);
    });
  }
});
