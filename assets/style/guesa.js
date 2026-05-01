const hamb = document.getElementById("menu-hamb");

const menuNavegacion = document.getElementById("menu-navegacion");

hamb.addEventListener("mouseenter", () => {
  menuNavegacion.classList.add("w-40");
});

hamb.addEventListener("mouseout", () => {
  menuNavegacion.classList.remove("w-40");
});
