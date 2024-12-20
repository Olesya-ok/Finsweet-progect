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

// Селектор контейнера
const itemsContainer = document.getElementById("items");

let iterationCount = 0;

itemsData.forEach(item => {
    if (iterationCount >= 4) return;

    const itemElement = document.createElement("div");
    itemElement.className = "item";

    // Создание и добавление первого <p> с <span> и <a>
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

    // Создание и добавление второго <p>
    const itemP = document.createElement("p");
    itemP.className = "item-p";
    itemP.textContent = item.text;

    // Добавление созданных элементов в контейнер
    itemElement.appendChild(itemPSpan);
    itemElement.appendChild(itemP);

    // Добавление элемента в контейнер
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
        linkElement.target = "_blank"; // Открытие в новой вкладке

        const iconElement = document.createElement("img");
        iconElement.src = social.icon;
        iconElement.alt = `Icon for ${social.platform || "social network"}`;

        linkElement.appendChild(iconElement);
        socialLinksElement.appendChild(linkElement);
    });

    // Сборка карточки
    cardElement.appendChild(photoElement);
    cardElement.appendChild(authorElement);
    cardElement.appendChild(jobTitleElement);
    cardElement.appendChild(socialLinksElement);

    // Добавление карточки в контейнер
    visitCardsContainer.appendChild(cardElement);

    iterCount++;
});


