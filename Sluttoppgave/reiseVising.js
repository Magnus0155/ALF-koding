// reiseVisning.js
document.addEventListener("DOMContentLoaded", () => {
  const config = [
    { id: "tilbud-container", filter: (r) => r.type === "tilbud", limit: 4, className: "tilbud-card" },
    { id: "popularTravel-container", filter: (r) => r.populært === "ja", limit: 8, className: "populaer-card" },
    { id: "våreAnbefalinger-container", filter: (r) => r.anbefalt === "ja", limit: 4, className: "anbefaling-card" }
  ];

  fetch("reiser.json")
    .then((res) => res.json())
    .then((reiser) => {
      config.forEach(({ id, filter, limit, className }) => {
        const container = document.getElementById(id);
        if (!container) return;

        const utvalg = reiser.filter(filter).slice(0, limit);
        if (!utvalg.length) {
          container.innerHTML = "<p>Ingen reiser funnet.</p>";
          return;
        }

        utvalg.forEach((reise) => {
          const kort = document.createElement("div");
          kort.className = className;

          kort.innerHTML = `
            <a href="reiseDetaljer.html?id=${reise.id}" class="kort-link">
              <img src="${reise.bilde}" alt="${reise.tittel}" />
              <h3>${reise.tittel}</h3>
              <p>${reise.beskrivelse}</p>
              <strong>${reise.pris} kr</strong>
            </a>
          `;
          
          container.appendChild(kort);
        });

      });
    })
    .catch((err) => console.error("Feil ved lasting av reiser:", err));
});
