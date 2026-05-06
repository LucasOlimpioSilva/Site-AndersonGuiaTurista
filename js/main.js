import { passeios } from "./passeios.js";

const container = document.getElementById('passeios');
const linkspasseios = document.getElementById('navbar-links');


export function renderPasseios(passeios) {

    container.innerHTML = ``;

    passeios.forEach(p => {
        const card = document.createElement('div');

        card.innerHTML = `
            <div id="${p.id}" class="card-passeio">
                <div class="imagem-passeio">
                    <img src="${p.imagem01}" alt="Foto de um ponto turístico do Rio de Janeiro">
                </div>
                <div class="informacoes-passeio">
                    <h3>${p.nome}</h3>
                    <p>${p.descricao}</p>
                    <div class="preco"><strong>Preço a partir de: ${p.preco}</strong></div>
                    <div class="card-btns">
                        <button onclick="verNoMapa(${p.coords[0]},${p.coords[1]})" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver no mapa" class="map-location">
                            <img src="./images/svg/map-location-pin-svgrepo-com.svg" alt="Ver no mapa" >
                        </button>
                        <a target="_blank" href="https://wa.me/5521981943187" class="btn-passeio btn btn-primary">Agendar/Detalhes</a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

export function renderListaPasseios (passeios) {

    linkspasseios.innerHTML = ``;

    passeios.forEach(p => { 

        const link = document.createElement('li');

        link.innerHTML = `<a class="dropdown-item" href="#${p.id}">${p.nome}</a>`;

        linkspasseios.appendChild(link);
    });
}

renderPasseios(passeios);
renderListaPasseios(passeios);



