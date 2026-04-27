import { passeios } from "./passeios.js";

const container = document.getElementById('passeios');
const linkspasseios = document.getElementById('navbar-links');


export function renderPasseios(passeios) {

    container.innerHTML = ``;

    passeios.forEach(p => {
        const card = document.createElement('div');

        card.innerHTML = `
            <div class="card-passeio">
                <div class="imagem-passeio">
                    <img src="${p.imagem01}" alt="Foto de um ponto turístico do Rio de Janeiro">
                </div>
                <div class="informacoes-passeio">
                    <h3>${p.nome}</h3>
                    <p>${p.descricao}</p>
                    <div class="preco"><strong>Preço a partir de: ${p.preco}</strong></div>
                    <a href="#" class="btn-passeio btn btn-primary">Agendar / Detalhes</a>
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

        link.innerHTML = `<a class="dropdown-item" href="#">${p.nome}</a>`;

        linkspasseios.appendChild(link);
    });
}


function ajustarLayout() {
    if (window.innerWidth <= 991) {
        navbar.classList.add("fixed-top", "bg-body-tertiary");
    } else {
        navbar.classList.remove("fixed-top", "bg-body-tertiary");
    }
}


window.addEventListener("load", ajustarLayout);
window.addEventListener("resize", ajustarLayout);
renderPasseios(passeios);
renderListaPasseios(passeios);



