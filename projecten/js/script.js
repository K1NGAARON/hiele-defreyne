function addProjects(e) {
    const projects = [
        {
            title: "Project 1",
            img: "https://placehold.co/1200x800/EEE/31343C",
            link: "/realisaties/liesa/",
        },
        {
            title: "Project 2",
            img: "https://placehold.co/1200x800/EEE/31343C",
            link: "/realisaties/liesa/",
        },
        {
            title: "Project 3",
            img: "https://placehold.co/1200x800/EEE/31343C",
            link: "/realisaties/liesa/",
        },
        {
            title: "Project 4",
            img: "https://placehold.co/1200x800/EEE/31343C",
            link: "/realisaties/liesa/",
        },
        // {
        //     title: "",
        //     img: "",
        //     link: "",
        // },
        // {
        //     title: "",
        //     img: "",
        //     link: "",
        // },
    ];

    const target = document.querySelector('#project-wrapper');

    if (!target) {
        return;
    }

    const cards = projects.map(item => {

        return `
            <a href="${item.link}" class="item-link">
                <div class="item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="content">
                        <h3>
                            ${item.title}
                        </h3>
                        <p class="read-more">
                            Lees meer
                        </p>
                    </div>
                    <div class="overlay"></div>
                </div>
            </a>
        `;
    }).join('');

    target.innerHTML = cards;
};

$(document).ready(addProjects);