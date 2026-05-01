export function renderCards(containerId, data, onClick) {
  const container = document.getElementById(containerId);

  container.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <button data-id="${item.id}">
        Ver más
      </button>
    </div>
  `).join('');

  // Eventos
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const selected = data.find(i => i.id == id);
      onClick(selected);
    });
  });
}