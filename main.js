const itemsData = [
    {
        author: "John Doe",
        date: "Aug 23, 2021",
        text: "8 Figma design systems that you can download for free today.",
        link: "#"
    },
    {
        author: "John Doe",
        date: "Aug 23, 2021",
        text: "8 Figma design systems that you can download for free today.",
        link: "#"
    },
    {
        author: "John Doe",
        date: "Aug 23, 2021",
        text: "8 Figma design systems that you can download for free today.",
        link: "#"
    },
    {
        author: "John Doe",
        date: "Aug 23, 2021",
        text: "8 Figma design systems that you can download for free today.",
        link: "#"
    }
];


const itemsContainer = document.getElementById("items");

let iterationCount = 0;

itemsData.forEach(item => {
    if (iterationCount >= 4) return;

    const itemElement = document.createElement("div");
    itemElement.className = "item";


    const itemPSpan = document.createElement("p");
    itemPSpan.className = "item-p-span";
    itemPSpan.textContent = `By `;

    const itemSpan = document.createElement("span");
    const itemLink = document.createElement("a");
    itemLink.href = item.link;
    itemLink.textContent = item.author;

    itemSpan.appendChild(itemLink);
    itemPSpan.appendChild(itemSpan);
    itemPSpan.appendChild(document.createTextNode(` ${item.date}`));

    const itemP = document.createElement("p");
    itemP.className = "item-p";
    itemP.textContent = item.text;

    itemElement.appendChild(itemPSpan);
    itemElement.appendChild(itemP);

    itemsContainer.appendChild(itemElement);
});

const cardsData = [
    {
        photo: "images/cards/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png",
        author: "Floyd Miles",
        jobTitle: "Content Writer @Company",
        socialLinks: [
            {
                link: "#",
                icon: "images/socialLinks/fb.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/tw.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/inst.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/lI.png",
            },

        ],
    },
    {
        photo: "images/cards/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png",
        author: "Dianne Russell",
        jobTitle: "Content Writer @Company",
        socialLinks: [
            {
                link: "#",
                icon: "images/socialLinks/fb.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/tw.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/inst.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/lI.png",
            },
        ],
    },
    {
        photo: "images/cards/fashion-woman-cute-shoes-5704849.png",
        author: "Jenny Wilson",
        jobTitle: "Content Writer @Company",
        socialLinks: [
            {
                link: "#",
                icon: "images/socialLinks/fb.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/tw.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/inst.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/lI.png",
            },

        ],
    },
    {
        photo: "images/cards/content-baker-with-delicious-puff-in-cafeteria-6205509.png",
        author: "Leslie Alexander",
        jobTitle: "Content Writer @Company",
        socialLinks: [
            {
                link: "#",
                icon: "images/socialLinks/fb.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/tw.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/inst.png",
            },
            {
                link: "#",
                icon: "images/socialLinks/lI.png",
            },
        ],
    }
];

const visitCardsContainer = document.getElementById("visit-cards");

let iterCount = 0;

cardsData.forEach((card) => {
    if (iterCount >= 4) return;

    // Создание карточки
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    // Фото
    const photoElement = document.createElement("img");
    photoElement.className = "photo";
    photoElement.src = card.photo; // Используем данные из массива
    photoElement.alt = `${card.author}'s photo`;

    // Автор
    const authorElement = document.createElement("h3");
    authorElement.className = "author";
    authorElement.textContent = card.author;

    // Должность
    const jobTitleElement = document.createElement("p");
    jobTitleElement.className = "job-title";
    jobTitleElement.textContent = card.jobTitle;

    // Соцсети
    const socialLinksElement = document.createElement("div");
    socialLinksElement.className = "social-links";

    card.socialLinks.forEach((social) => {
        const linkElement = document.createElement("a");
        linkElement.href = social.link;
        linkElement.target = "_blank";

        const iconElement = document.createElement("img");
        iconElement.src = social.icon;
        iconElement.alt = `Icon for ${social.platform || "social network"}`;

        linkElement.appendChild(iconElement);
        socialLinksElement.appendChild(linkElement);
    });

    cardElement.appendChild(photoElement);
    cardElement.appendChild(authorElement);
    cardElement.appendChild(jobTitleElement);
    cardElement.appendChild(socialLinksElement);

    visitCardsContainer.appendChild(cardElement);

    iterCount++;
});

// map

let LatLng = [50.366149, 30.450943];

const map = L.map('map')
    .setView(LatLng, 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

L.circle([50.366114, 30.450981], 20, {
    // колір кордону
    color: 'red',
    // колір заливки
    fillColor: 'green',
    // Прозорість заливання
    fillOpacity: 0.5
}).addTo(map);
// Опис налаштувань що можна використовувати
// https://leafletjs.com/reference.html#path
L.circle([50.366209, 30.453086], 20, {
    color: 'red',
    fillColor: 'green',
    fillOpacity: 0.5
}).addTo(map);



// Координати маршруту
let latlngs = [
    [50.366149, 30.450943],
    [50.366022, 30.451169],
    [50.366807, 30.452392],
    [50.366686, 30.452601],
    [50.366764, 30.452867],
    [50.366453, 30.453387],
    [50.366251, 30.453056],
    [50.366209, 30.453086],

];

let totalDistance = 0;

for (let i = 1; i < latlngs.length; i++) {
    let pointA = L.latLng(latlngs[i - 1]);
    let pointB = L.latLng(latlngs[i]);
    totalDistance += pointA.distanceTo(pointB);
}

// Оновлення тексту в HTML-елементі
document.getElementById("distance").textContent =
    `Загальна довжина маршруту: ${totalDistance.toFixed(2)} м`;

let polyline = L.polyline(latlngs, {
    color: 'blue',
    dashArray: '10, 5',
    weight: 3
});

polyline.addTo(map);

let marker = L.marker(LatLng)
    .bindPopup('Офис CyberBionic Systematics');
marker.addTo(map);



const swiper = new Swiper('.testimonials-slider', {
    direction: 'horizontal', // Горизонтальная прокрутка
    loop: true, // Зацикливать слайды
    speed: 500, // Скорость анимации
    pagination: {
        el: '.swiper-pagination', // Элемент пагинации
        clickable: true, // Можно кликать по пагинации
    },
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "Next"
        prevEl: '.swiper-button-prev', // Кнопка "Prev"
    },
});





