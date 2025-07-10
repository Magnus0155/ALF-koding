// bestilling.js
import { auth, db } from "./firebase.js";
import { collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
      bruker: user.uid,
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
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.navn} → ${data.destinasjon} (${data.dato})`;
    ulElement.appendChild(li);
  });
}
