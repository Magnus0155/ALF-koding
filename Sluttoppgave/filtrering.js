//filtrering.js

let reiser = [];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reise-container");
  if (!container) return;

  fetch("reiser.json")
    .then((response) => response.json())
    .then((data) => {
      reiser = data;

      const urlParams = new URLSearchParams(window.location.search);
      const kategorierFraUrl = urlParams.getAll("kategori");
      const budsjetterFraUrl = urlParams.getAll("budsjett");

      // Sett checkbox basert på URL-parametre
      document.querySelectorAll('input[name="kategori"]').forEach(input => {
        if (kategorierFraUrl.includes(input.value)) input.checked = true;
      });

      document.querySelectorAll('input[name="budsjett"]').forEach(input => {
        if (budsjetterFraUrl.includes(input.value)) input.checked = true;
      });

      if (kategorierFraUrl.length > 0 || budsjetterFraUrl.length > 0) {
        filtrerReiser();
      } else {
        visReiser(reiser);
      }
    })
    .catch((error) => {
      container.innerHTML = "<p>Kunne ikke hente reiser.</p>";
      console.error("Feil:", error);
    });

  // Lytt på endringer i filter inputs
  document.querySelectorAll('input[name="kategori"], input[name="budsjett"]').forEach(input => {
    input.addEventListener("change", filtrerReiser);
  });

  // Lytt på søkefelt
  const sokefelt = document.getElementById("sokeskjema");
  if (sokefelt) {
    sokefelt.addEventListener("input", filtrerReiser);
  }
});

function filtrerReiser() {
  const valgteKategorier = Array.from(document.querySelectorAll('input[name="kategori"]:checked')).map(input => input.value.toLowerCase());
  const valgtBudsjett = document.querySelector('input[name="budsjett"]:checked')?.value;
  const sokefelt = document.getElementById("sokeskjema");
  const soketekst = sokefelt ? sokefelt.value.toLowerCase() : "";

  const filtrerte = reiser.filter((reise) => {
    const tittelTekst = (reise.tittel ?? "").toLowerCase();
    const beskrivelseTekst = (reise.beskrivelse ?? "").toLowerCase();
    const kategoriTekst = (reise.kategori ?? "").toLowerCase();

    const matcherKategori = valgteKategorier.length === 0 || valgteKategorier.includes(kategoriTekst);
    const matcherSok = tittelTekst.includes(soketekst) || beskrivelseTekst.includes(soketekst) || kategoriTekst.includes(soketekst);

    let matcherBudsjett = true;
    if (valgtBudsjett) {
      const pris = reise.pris;
      if (valgtBudsjett === "under10000") matcherBudsjett = pris < 10000;
      else if (valgtBudsjett === "10000-15000") matcherBudsjett = pris >= 10000 && pris <= 15000;
      else if (valgtBudsjett === "over15000") matcherBudsjett = pris > 15000;
    }

    return matcherKategori && matcherBudsjett && matcherSok;
  });

  visReiser(filtrerte);
}

function visReiser(liste) {
  const container = document.getElementById("reise-container");
  container.innerHTML = "";

  if (liste.length === 0) {
    container.innerHTML = "<p>Ingen reiser matcher dine filtre.</p>";
    return;
  }

  liste.forEach((reise) => {
    const kort = document.createElement("div");
    kort.classList.add("reisekort");
    kort.innerHTML = `
      <img src="${reise.bilde}" alt="${reise.tittel}" />
      <h3>${reise.tittel}</h3>
      <p>${reise.beskrivelse}</p>
      <p><strong>Pris:</strong> ${reise.pris.toLocaleString()} NOK</p>
      <p><strong>Type:</strong> ${reise.kategori}</p>
    `;
    container.appendChild(kort);
  });
}
