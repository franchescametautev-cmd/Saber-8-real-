const estadisticas = [
  { icono: "📚", titulo: "Total temas vistos", valor: "5" },
  { icono: "🏆", titulo: "Promedio general",   valor: "20%" },
  { icono: "🔥", titulo: "Tu nivel",           valor: "Principiante", esTexto: true }
];

const materias = [
  {
    nombre: "Matemáticas",
    clase: "matematicas",
    temas: ["Álgebra - Taller", "Ecuaciones lineales - Repaso"]
  },
  {
    nombre: "Español",
    clase: "espanol",
    temas: ["Figuras literarias - Ejercicios", "Análisis de obras literarias", "Comprensión lectora"]
  }
];

function renderEstadisticas() {
  const contenedor = document.getElementById("estadisticas");
  contenedor.innerHTML = estadisticas.map(e => `
    <article class="tarjeta">
      <div class="tarjeta__cabecera">
        <span class="tarjeta__icono">${e.icono}</span>
        <span class="tarjeta__titulo">${e.titulo}</span>
      </div>
      <p class="tarjeta__valor ${e.esTexto ? "tarjeta__valor--texto" : ""}">${e.valor}</p>
    </article>
  `).join("");
}

function renderMaterias() {
  const contenedor = document.getElementById("materias");
  contenedor.innerHTML = materias.map(m => `
    <article class="materia materia--${m.clase}">
      <h3 class="materia__titulo">${m.nombre}</h3>
      <ul class="materia__lista">
        ${m.temas.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

renderEstadisticas();
renderMaterias();

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation(); 
      sidebar.classList.toggle('abierto');
    });

    document.addEventListener('click', (evento) => {
      const clicDentroDelSidebar = sidebar.contains(evento.target);
      if (!clicDentroDelSidebar && sidebar.classList.contains('abierto')) {
        sidebar.classList.remove('abierto');
      }
    });
  }
});