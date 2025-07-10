// mine-bestillinger.js
import { initAuthUI, sendBooking, fetchBookings } from './script.js';

document.addEventListener("DOMContentLoaded", () => {
  initAuthUI();

  const form = document.getElementById("bookingForm");
  const status = document.getElementById("formStatus");
  const liste = document.getElementById("bestillingsliste");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await sendBooking(form, status);
      fetchBookings(liste);
    });
  }

  fetchBookings(liste);
});