function addProjects(e) {
    const projects = [
        {
            title: "Project Bellegem",
            img: "/projecten/img/bellegem.jpg",
            link: "/projecten/project-voorbeeld/",
        },
        {
            title: "Project Gistel",
            img: "/projecten/img/gistel.jpg",
            link: "/projecten/project-voorbeeld/",
        },
        {
            title: "Project Kortrijk",
            img: "/projecten/img/kortrijk.jpg",
            link: "/projecten/project-voorbeeld/",
        },
        {
            title: "Project Kruiskerke",
            img: "/projecten/img/kruiskerke.jpg",
            link: "/projecten/project-voorbeeld/",
        },
        {
            title: "Project Roeselare",
            img: "/projecten/img/roeselare.jpg",
            link: "/projecten/project-voorbeeld/",
        },
        {
            title: "Project Sint-Joris",
            img: "/projecten/img/sint-joris.jpg",
            link: "/projecten/project-voorbeeld/",
        },
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