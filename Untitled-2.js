const form = document.getElementById("formulario");
const msg = document.getElementById("mensaje");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(form);

  fetch("TU_URL_DE_GOOGLE_SCRIPT", {
    method: "POST",
    body: data
  })
  .then(() => {
    msg.innerHTML = "Enviado correctamente ✅";
    form.reset();
  })
  .catch(() => {
    msg.innerHTML = "Error ❌";
  });
});