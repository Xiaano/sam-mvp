document.addEventListener("DOMContentLoaded", () => {
  const marker = document.getElementById("loaded-marker");
  const timestamp = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  document.body.classList.add("loaded");

  if (marker) {
    marker.textContent = `Static shell loaded ${timestamp}`;
  }
});
