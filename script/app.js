// 1. Seleccionar el botón del DOM
const btnTema = document.getElementById("btn-tema");

// 2. Comprobar si el usuario ya tenía guardada una preferencia en LocalStorage
const temaGuardado = localStorage.getItem("temaPortafolio");

// 3. Si la preferencia era "oscuro", aplicamos la clase y cambiamos el ícono inmediatamente
if (temaGuardado === "oscuro") {
  document.body.classList.add("dark-mode");
  btnTema.textContent = "☀️"; // Cambia a sol porque ya está en modo oscuro
}

// 4. Agregar el evento de clic al botón
btnTema.addEventListener("click", function () {
  // Alternar la clase 'dark-mode' en el elemento <body>
  document.body.classList.toggle("dark-mode");

  // Verificar si la clase 'dark-mode' está activa después del clic
  if (document.body.classList.contains("dark-mode")) {
    // Guardar la preferencia y cambiar el ícono
    localStorage.setItem("temaPortafolio", "oscuro");
    btnTema.textContent = "☀️";
  } else {
    // Guardar la preferencia de modo claro y restaurar el ícono
    localStorage.setItem("temaPortafolio", "claro");
    btnTema.textContent = "🌙";
  }
});

// 5. Establecer el año actual automáticamente en el footer
document.getElementById("year").textContent = new Date().getFullYear();
