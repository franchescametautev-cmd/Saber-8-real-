const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', (evento) => {
  evento.stopPropagation(); 
  sidebar.classList.toggle('abierto');
});

document.addEventListener('click', (evento) => {
  const clicDentroDelSidebar = sidebar.contains(evento.target);
  if (!clicDentroDelSidebar && sidebar.classList.contains('abierto')) {
    sidebar.classList.remove('abierto');
  }
});