export function renderCards(containerId, data, onClick) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="row">
      ${data.map(item => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.summary}</p>

              <button class="btn btn-primary mt-auto" data-id="${item.id}">
                Ver más
              </button>
            </div>

          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const selected = data.find(i => i.id == id);
      onClick(selected);
    });
  });
}