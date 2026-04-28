const DNI = prompt("Ingrese su dni");
if (DNI.length < 8 && DNI.length > 7) {
  alert("mal");
} else {
  const nombre = prompt("Ingrese su nombre");
}

const apellido = prompt("Ingrese su apellido");

const email = prompt("Ingrese su email");
const edad = prompt("Ingrese su edad");

if (edad > 18 && edad < 120) {
  alert("podes entrar");
} else if (edad < 18) {
  alert("no podes entrar");
} else {
  alert("no podes entrar");
}
