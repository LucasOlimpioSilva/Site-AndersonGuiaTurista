import { passeios } from "./passeios.js";
import { renderPasseios,renderListaPasseios } from "./main.js";

document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const termo = input.value.toLowerCase();

        const resultados = passeios.filter(p =>
            p.nome.toLowerCase().includes(termo) ||
            p.descricao.toLowerCase().includes(termo)
        );

        renderPasseios(resultados);
        renderListaPasseios(resultados);
    });
});