
import { passeios } from "./passeios.js";

document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map', { dragging: true, scrollWheelZoom: false, gestureHandling: true, }).setView([-22.9268, -43.1629], 12); ;

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap & CartoDB'}).addTo(map);


    passeios.forEach(p => {
        L.marker(p.coords).addTo(map)
        
            .bindPopup(`
                <div class="card text-center p-2 map-card" style="width: 18rem; border: none;">
                    <div class="carousel slide" >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${p.imagem01}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${p.imagem02}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${p.imagem03}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${p.imagem04}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${p.imagem05}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${p.imagem06}" class="d-block w-100 map-image" style="height: 150px;" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body" >
                        <div class="card-background">
                            <h5 class="card-title">${p.nome}</h5>
                            <p class="card-text">${p.descricao}</p>
                            <p class="card-text"><strong">Preço a partir de: ${p.preco}</strong></p>
                        </div>
                        <a href="#" class="map-btn btn btn-primary mt-2">Agendar / Detalhes</a>
                    </div>
                </div>
            </div>
        `);
    });

    window.verNoMapa = function (lat, lng) {
            map.flyTo([lat,lng], 15, {
                animated: true,
                duration: 0.8
        });

        setTimeout(() => {
            map.panBy([0, -220]); // sobe o mapa (ajuste fino aqui)
        }, 801);

        map.eachLayer(layer => {
            if (layer.getLatLng &&
                layer.getLatLng().lat === lat &&
                layer.getLatLng().lng === lng) {

                layer.openPopup();
            }
        });

        
        document.getElementById("map").scrollIntoView({
            behavior: "smooth"
        });
    };
});

