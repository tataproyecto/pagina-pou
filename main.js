let botonApretar = document.getElementById("boton-apretar");
const mensaje = document.getElementById("mensaje");

let estadoMensaje = false;

botonApretar.addEventListener("click", () => {
  if (estadoMensaje == false) {
    mensaje.textContent = "Holaaax";
    estadoMensaje = true;
  } else {
    mensaje.textContent = "";
    estadoMensaje = false;
  }
});
