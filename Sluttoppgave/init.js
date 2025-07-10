// init.js
import { initAuthUI, handleRegistration, loginWithGoogle } from "./auth.js";
import { sendBooking, fetchBookings } from "./booking.js";

document.addEventListener("DOMContentLoaded", () => {
  const pathname = window.location.pathname;

  if (pathname.includes("mine-bestillinger.html")) {
    initAuthUI();
    const form = document.getElementById("bookingForm");
    const status = document.getElementById("formStatus");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendBooking(form, status);
      });
    }
  }

  if (pathname.includes("Lag en konto.html")) {
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
  }
});
