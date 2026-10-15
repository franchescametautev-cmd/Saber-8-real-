document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const form = document.getElementById("perfil-form");
  const btnLogout = document.getElementById("btn-logout");
  const btnDelete = document.getElementById("btn-delete");

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

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const datos = Object.fromEntries(new FormData(form));
      console.log("Datos a guardar:", datos);
      alert("Cambios guardados");
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      if (confirm("¿Quieres cerrar sesión?")) {
        console.log("Sesión cerrada");
      }
    });
  }

  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (confirm("¿Seguro que quieres borrar tu cuenta? Esta acción no se puede deshacer.")) {
        console.log("Cuenta borrada");
      }
    });
  }
});