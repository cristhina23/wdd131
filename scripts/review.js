let count = Number(localStorage.getItem("reviewCount")) || 0;


  count++;

  // Guardarlo de nuevo en localStorage
  localStorage.setItem("reviewCount", count);

  // Mostrar en pantalla
  document.addEventListener("DOMContentLoaded", () => {
    const display = document.createElement("p");
    display.textContent = `You have submitted ${count} review(s).`;
    document.body.appendChild(display);
  });