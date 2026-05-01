export function openModal(item) {
  let modal = document.getElementById("modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="${item.image}" />
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      
      ${
        item.catalog
          ? `<a href="${item.catalog}" download>
               Descargar catálogo
             </a>`
          : ""
      }
    </div>
  `;

  modal.style.display = "flex";

  modal.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };
}