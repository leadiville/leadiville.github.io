
const projects = {
    neighbortailor: {
        title: "Neighbortailor",
        project: "Neighbortailor",
        category: "Fashion and E-commerce",
        date: "1st september 2025 - 30th december 2025",
        projectLink: "www.neighbortailor.com",
        description: "Built the most beautifyl systalsj alorem epism",
        images: ["assets/img/portfolio/desktop/NT-customize.png", "assets/img/portfolio/desktop/NT-home.png", "/assets/img/portfolio/desktop/NT-login.png"],
        tools: ["HTML", "CSS", "Javascript"],
        solutions: [
            "Digitized the traditional tailoring process by allowing customers to submit measurements and customize clothing online.",
            "Developed dynamic forms that support complex clothing configuration workflows and personalized orders.",
            "Improved user onboarding and account management through authentication and profile management features.",
            "Contributed to backend APIs supporting customer accounts, order management, and business operations.",
            "Enhanced platform security and user experience through NextAuth authentication integration.",
            "Assisted in payment workflow implementation and issue resolution to improve transaction reliability."
        ]

    },
    fenuaza: {
        title: "Fenuaza",
        project: "Fenuaza Premium Paints",
        category: "Design and E-commerce",
        date: "3rd feb 2026 - 3rd april 2025",
        projectLink: "www.fenuaza.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/FEN-category.png", "/assets/img/portfolio/desktop/FEN-color-page.png", "/assets/img/portfolio/desktop/FEN-home.png"],
        tools: ["HTML", "CSS", "Javascript"],
        solutions: [
            "Designed and launched a complete ecommerce platform for a paint manufacturer, enabling customers to browse, compare, and purchase products online.",
            "Improved product discovery through category-based and color-based filtering, helping customers find suitable paint products faster.",
            "Created a responsive shopping experience optimized for desktop, tablet, and mobile users.",
            "Integrated secure online payment processing, reducing manual order handling and improving customer convenience.",
            "Customized WooCommerce functionality and styling using PHP and CSS to create a premium user experience without relying on excessive plugins.",
            "Improved site navigation and information architecture to support both retail and bulk paint purchases."
        ]
    },
    avataworks: {
        title: "Avataworks",
        project: "Avataworks Digital Agency",
        category: "Digital Marketing Website",
        date: "1st feb 2025 - 28th july 2025",
        projectLink: "www.avataworks.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/AV-team.png", "/assets/img/portfolio/desktop/AV-work-hitl.png", "/assets/img/portfolio/desktop/AV-home.png"],
        tools: ["HTML", "CSS", "Javascript"],
        solutions: [
            "Eliminated manual visitor tracking by creating a centralized system for managing church first-time visitors.",
            "Built role-based administrative workflows that allow task assignment, reassignment, and progress tracking across teams.",
            "Developed dashboard reporting tools that improve visibility into visitor engagement and follow-up activities.",
            "Designed a relational database structure capable of handling complex relationships between visitors, administrators, and follow-up records.",
            "Reduced administrative overhead by automating first-timer registration and workflow management processes.",
            "Containerized the application using Docker to improve deployment consistency and development efficiency."
        ]
    },
    deeternex: {
        title: "De-eternex",
        project: "De-eternex Electronics Store",
        category: "Electronics and E-commerce",
        date: "25th jan 2025 - 30th december 2025",
        projectLink: "www.deeternex.com",
        description: "",
        images: ["/assets/img/portfolio/desktop/Deet-homepage.png", "/assets/img/portfolio/desktop/Deet.products-home.png", "/assets/img/portfolio/desktop/Deet-category.png"],
        tools: ["HTML", "CSS", "Javascript"],
        solutions: [
            "Developed and maintained an ecommerce platform for an electronics retailer, improving the company's online presence and product accessibility.",
            "Organized product information and shopping workflows to support customer purchasing decisions.",
            "Implemented ongoing website maintenance, content updates, and platform improvements.",
            "Improved usability and site reliability through continuous optimization and support.",
            "Assisted in creating a scalable foundation for future ecommerce growth."
        ]
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
const solution = document.getElementById("projectSolu");
const date = document.getElementById("projectDate");
const images = document.getElementById("projectImage");
const imgContainer = document.getElementById('imageContainer');
const solutionList = document.getElementById('projectSolu');
// console.log(page);

if (!currentProject) {
    if (title) title.innerText = "Project Not Found";
} else {
    if (title) title.innerText = currentProject.title;
    
    if (url) {
        url.innerText = currentProject.projectLink;
        url.href = `https://${currentProject.projectLink}`;
    }
    
    // Use innerHTML or template literals to preserve the <strong> tags in your HTML
    if (cat) cat.innerHTML = `<strong>Category</strong>: ${currentProject.category}`;
    if (client) client.innerHTML = `<strong>Client</strong>: ${currentProject.project}`;
    if (date) date.innerHTML = `<strong>Project date</strong>: ${currentProject.date}`;
    
    // Fix: Clear and properly build the image slider
    if (imgContainer && currentProject.images) {
        imgContainer.innerHTML = "";
        currentProject.images.forEach(img => {
            const imgSwiperDiv = document.createElement('div');
            imgSwiperDiv.className = "swiper-slide";
            
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = currentProject.title;
            imgElement.className = "img-fluid"; // keeps images responsive
            
            imgSwiperDiv.appendChild(imgElement);
            imgContainer.appendChild(imgSwiperDiv);
        });

        // CRITICAL FIX: Re-initialize Swiper so it recognizes the newly injected images
        if (typeof Swiper !== 'undefined') {
            const swiperEl = document.querySelector('.init-swiper');
            if (swiperEl && swiperEl.swiper) {
                swiperEl.swiper.update(); // Updates existing swiper instance
            }
        }
    }
    
    // Fix: Properly loop and append string data to the solution list
    if (solutionList && currentProject.solutions) {
        solutionList.innerHTML = ""; // Clear out old items
        currentProject.solutions.forEach(each => {
            let li = document.createElement('li');
            li.textContent = each; // Use textContent for strings, not appendChild()
            solutionList.appendChild(li);
        });
    }
}