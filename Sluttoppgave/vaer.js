//Vær api
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = ; //fjern og legg til api når jeg trenger
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=no`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data || !data.main) {
        document.getElementById("vaer-info").textContent = "Kunne ikke hente værinformasjon.";
        return;
      }

      const temp = data.main.temp.toFixed(1);
      const beskrivelse = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      document.getElementById("vaer-info").innerHTML = `
        <img src="${iconUrl}" alt="${beskrivelse}" />
        <span>${temp}°C – ${beskrivelse}</span>
      `;
    })
    .catch((err) => {
      console.error("Feil ved henting av værdata:", err);
      document.getElementById("vaer-info").textContent = "Klarte ikke å hente værdata.";
    });
});
