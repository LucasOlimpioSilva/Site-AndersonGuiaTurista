
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map', { dragging: true, scrollWheelZoom: false, gestureHandling: true, }).setView([-22.9368, -43.1929], 12); ;

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap & CartoDB'}).addTo(map);

    L.marker([-22.9519, -43.2105]).addTo(map)
        .bindPopup('Cristo Redentor');

    L.marker([-22.9486, -43.1566]).addTo(map)
        .bindPopup('Pão de Açúcar');

    L.marker([-22.9711, -43.1822]).addTo(map)
        .bindPopup('Praia de Copacabana');
});



