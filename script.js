let map;
let markers = [];
let allMarkers = [];

const places = [
    {
        name: "Лицей №64",
        desc: "Наша школа",
        coords: [45.058224, 38.949280],
        color: "#2196F3",
        icon: "🏫"
    },
    {
        name: "Майский сквер",
        desc: "Место для прогулок и отдыха",
        coords: [45.063439, 38.948259],
        color: "#4CAF50",
        icon: "🌳"
    },
    {
        name: "Фестивальный сквер",
        desc: "Место для прогулок и отдыха",
        coords: [45.059692, 38.960260],
        color: "#4CAF50",
        icon: "🌳"
    },
    {
        name: "Продуктовый магазин",
        desc: "Круглосуточный магазин",
        coords: [55.7530, 37.6150],
        color: "#FF9800", // Оранжевый
        icon: "🛒"
    },
    {
        name: "Городская больница",
        desc: "Поликлиника и стационар",
        coords: [55.7580, 37.6250],
        color: "#F44336", // Красный
        icon: "🏥"
    },
    {
        name: "Библиотека им. Пушкина",
        desc: "Большой выбор книг",
        coords: [55.7540, 37.6100],
        color: "#9C27B0", // Фиолетовый
        icon: "📚"
    },
    {
        name: "Спортивный комплекс",
        desc: "Стадион и тренажерный зал",
        coords: [55.7620, 37.6180],
        color: "#FFC107", // Желтый
        icon: "⚽"
    },
    {
        name: "Аптека №1",
        desc: "Круглосуточная аптека",
        coords: [55.7510, 37.6220],
        color: "#E91E63", // Розовый
        icon: "🏪"
    },
    {
        name: "Администрация района",
        desc: "Районная управа",
        coords: [55.7570, 37.6140],
        color: "#3F51B5", // Темно-синий
        icon: "🏛️"
    }
];

// Инициализация карты при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

// Функция инициализации карты
function initMap() {
    // Координаты центра карты
    const defaultCenter = [45.059988, 38.957221];

    // Создание карты
    map = L.map('map').setView(defaultCenter, 15);

    // Подключение слоя карты OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Добавление маркеров
    addMarkers();

    console.log("Карта OpenStreetMap загружена!");
}

function addMarkers() {
    places.forEach(place => {
        const markerIcon = L.divIcon({
            html: `<div style="
                background: ${place.color};
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                border: 3px solid white;
            ">${place.icon}</div>`,
            className: '',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        const marker = L.marker(place.coords, { icon: markerIcon }).addTo(map);

        const popupContent = `
            <div style="padding: 10px; min-width: 200px;">
                <h3 style="color: ${place.color}; margin: 0 0 8px 0; font-size: 1.2rem;">${place.name}</h3>
                <p style="color: #555; margin: 0; line-height: 1.4;">${place.desc}</p>
            </div>
        `;

        marker.bindPopup(popupContent);

        allMarkers.push(marker);
        markers.push(marker);
    });

}

function toggleMarkers() {
    if (markers.length > 0) {
        markers.forEach(marker => {
            map.removeLayer(marker);
        });
        markers = [];
    } else {
        allMarkers.forEach(marker => {
            map.addLayer(marker);
        });
        markers = [...allMarkers];
    }
}

function centerMap() {
    const defaultCenter = [45.059988, 38.957221];
    map.setView(defaultCenter, 15);

}