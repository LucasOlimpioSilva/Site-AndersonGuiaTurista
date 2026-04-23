import { passeios } from "./passeios.js";

const container = document.getElementById('passeios');
const linkspasseios = document.getElementById('teste');

passeios.forEach(p => {
    const card = document.createElement('div');

    card.innerHTML = `
    <div class="imagem-passeio">
        <img src="${p.imagem01}" alt="Foto de um ponto turístico do Rio de Janeiro">
    </div>
    <div class="informações-passeio">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
    </div>
  `;

  const link = document.createElement('li');

    link.innerHTML = `<a class="dropdown-item" href="#">${p.nome}</a>`;

    container.appendChild(card);
    linkspasseios.appendChild(link);
});