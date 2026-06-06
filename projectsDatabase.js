
const projects = {
    neighbortailor: {
        title: "Neighbortailor",
        category: "Fashion and E-commerce",
        date: "1st september 2025 - 30th december 2025",
        projectLink: "www.neighbortailor.com",
        description: "Built the most beautifyl systalsj alorem epism",
        images: ["assets/img/portfolio/desktop/NT-customize.png", "assets/img/portfolio/desktop/NT-home.png", "assets/img/portfolio/desktop/NT-outfit-custom.png"],
        tools: ["HTML", "CSS", "Javascript"],
    },
    fenuaza: {
        title: "Fenuaza Premium Paints",
        category: "Design and E-commerce",
        date: "3rd feb 2026 - 3rd april 2025",
        projectLink: "www.fenuaza.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/FEN-category.png", "/assets/img/portfolio/desktop/FEN-color-page.png", "/assets/img/portfolio/desktop/FEN-home.png"],
        tools: ["HTML", "CSS", "Javascript"],
    },
    avataworks: {
        title: "Avataworks Digital Agency",
        category: "Digital Marketing Website",
        date: "1st feb 2025 - 28th july 2025",
        projectLink: "www.avataworks.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/AV-team.png", "/assets/img/portfolio/desktop/AV-work-hitl.png", "/assets/img/portfolio/desktop/AV-home.png"],
        tools: ["HTML", "CSS", "Javascript"],
    },
    deeternex: {
        title: "De-eternex Electronics Store",
        category: "Electronics and E-commerce",
        date: "25th jan 2025 - 30th december 2025",
        projectLink: "www.deeternex.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/Deet-homepage.png", "/assets/img/portfolio/desktop/Deet.products-home.png", "/assets/img/portfolio/desktop/Deet-category.png"],
        tools: ["HTML", "CSS", "Javascript"],
    }
}


const page = new URLSearchParams(window.location.search);
const pageId = page.get('id');
console.log(pageId);

const currentProject = projects[pageId];

const title = document.getElementById("projectTitle");
const url = document.getElementById("projectUrl");
const cat = document.getElementById("projectCat");
const client = document.getElementById("projectClient");
const body = document.getElementById("projectBody");
const date = document.getElementById("projectDate");
const images = document.getElementById("projectImage");
const imgContainer = document.getElementById('imageContainer')
// console.log(page);

if (!currentProject) {
    title && (title.innerText = "Project Not Found");
}
else {
    title && (title.innerText = currentProject.title);
    if (url) {
        url.innerText = currentProject.projectLink;
        url.href = `https://${currentProject.projectLink}`;
    };
    cat && (cat.innerText = currentProject.category);
    client && (client.innerText = currentProject.title);
    body && (body.innerText = currentProject.description);
    date && (date.innerText = currentProject.date);
    if (imgContainer && currentProject.images) {
        imgContainer.innerHTML = "";
        currentProject.images.forEach(img => {
            const imgSwiperDiv = document.createElement('div');
            imgSwiperDiv && (imgSwiperDiv.className = "swiper-slide");
            const imgElement = document.createElement('img');
            imgElement.src = img;   
            imgElement.alt = currentProject.title;
            imgSwiperDiv.appendChild(imgElement);
            imgContainer.appendChild(imgSwiperDiv);
        })
    }
}