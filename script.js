document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelectorAll(".filtro");
  const eventos = document.querySelectorAll(".evento");

  // Filtrar eventos por categoría
  filtros.forEach(boton => {
    boton.addEventListener("click", () => {
      filtros.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const categoria = boton.dataset.filtro;
      eventos.forEach(evento => {
        const coincide = categoria === "todos" || evento.dataset.categoria === categoria;
        evento.classList.toggle("oculto", !coincide);
      });
    });
  });

  // Mostrar / ocultar detalles de cada evento
  document.querySelectorAll(".btn-detalle").forEach(boton => {
    boton.addEventListener("click", () => {
      const detalle = boton.previousElementSibling;
      const abierto = !detalle.hidden;
      detalle.hidden = abierto;
      boton.textContent = abierto ? "Ver más" : "Ver menos";
      boton.setAttribute("aria-expanded", String(!abierto));
    });
  });
});
