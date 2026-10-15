const items = [
  { id: 1, titulo: 'Ejercicio 1' },
  { id: 2, titulo: 'Ejercicio 2' },
  { id: 3, titulo: 'Repaso 3' },
  { id: 4, titulo: 'Repaso 4' },
  { id: 5, titulo: 'Repaso 5' },
  { id: 6, titulo: 'Repaso 6' }
];

const lista = document.getElementById('lista');
const buscador = document.getElementById('buscador');

function mostrar(datos) {
  lista.innerHTML = '';

  if (datos.length === 0) {
    lista.innerHTML = '<p class="vacio">No se encontraron resultados.</p>';
    return;
  }

  datos.forEach(({ id, titulo }) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h2>${titulo}</h2>
      <button class="comenzar" data-id="${id}">Comenzar</button>
    `;
    lista.appendChild(card);
  });
}

buscador.addEventListener('input', () => {
  const texto = buscador.value.trim().toLowerCase();
  mostrar(items.filter(i => i.titulo.toLowerCase().includes(texto)));
});

lista.addEventListener('click', e => {
  const btn = e.target.closest('.comenzar');
  if (!btn) return;
  alert('Comenzando ejercicio ' + btn.dataset.id);
});

document.getElementById('btnVolver').addEventListener('click', e => {
  e.preventDefault();
  history.back();
});

mostrar(items);