document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const reiseId = urlParams.get("id");

  fetch("reiser.json")
    .then(res => res.json())
    .then(data => {
      const reise = data.find(r => r.id === reiseId);

      const container = document.getElementById("reise-detaljer-container");
      if (!container) {
        console.error("Manglende container for reisedetaljer");
        return;
      }

      if (!reise) {
        container.innerHTML = "<p>Reise ikke funnet.</p>";
        return;
      }

      container.innerHTML = `
        <h1>${reise.tittel}</h1>
        <img src="${reise.bilde}" alt="${reise.tittel}" />
        <p>${reise.beskrivelse}</p>
        <p><strong>Pris:</strong> ${reise.pris} kr</p>
        <p><strong>Dager:</strong> ${reise.dager}</p>
        <p><strong>Kategori:</strong> ${reise.kategori}</p>
        <button id="tilbake-btn">Tilbake til oversikt</button>
      `;

      // Legg til funksjon på tilbakeknappen
      const tilbakeBtn = document.getElementById("tilbake-btn");
      tilbakeBtn.addEventListener("click", () => {
        window.history.back(); // eller window.location.href = "filtrering.html";
      });
    })
    .catch(err => {
      console.error("Feil ved lasting av reise:", err);
      const container = document.getElementById("reise-detaljer-container");
      if (container) container.innerHTML = "<p>Kunne ikke laste reisedetaljer.</p>";
    });
});
