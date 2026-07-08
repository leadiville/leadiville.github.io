
/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";
  
  /**
   * Header toggle
  */
 const headerToggleBtn = document.querySelector('.header-toggle');
 
 function headerToggle() {
   document.querySelector('#header').classList.toggle('header-show');
   headerToggleBtn.classList.toggle('bi-list');
   headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn?.addEventListener('click', headerToggle);
  
  /**
   * Hide mobile nav on same-page/hash links
  */
 document.querySelectorAll('#navmenu a').forEach(navmenu => {
   navmenu.addEventListener('click', () => {
     if (document.querySelector('.header-show')) {
       headerToggle();
      }
    });
    
  });
  
  /**
   * Toggle mobile nav dropdowns
  */
 document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
   navmenu.addEventListener('click', function(e) {
     e.preventDefault();
     this.parentNode.classList.toggle('active');
     this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
     e.stopImmediatePropagation();
    });
  });
  
  /**
   * Preloader
  */
 const preloader = document.querySelector('#preloader');
 if (preloader) {
   window.addEventListener('load', () => {
     preloader.remove();
    });
  }
  
  /**
   * Scroll top button
  */
 let scrollTop = document.querySelector('.scroll-top');
 
 function toggleScrollTop() {
   if (scrollTop) {
     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);
  
  /**
   * Animation on scroll function and init
  */
 function aosInit() {
   AOS.init({
     duration: 600,
     easing: 'ease-in-out',
     once: true,
     mirror: false
    });
  }
  window.addEventListener('load', aosInit);
  
  /**
   * Init typed.js
  */
 const selectTyped = document.querySelector('.typed');
 if (selectTyped) {
   let typed_strings = selectTyped.getAttribute('data-typed-items');
   typed_strings = typed_strings.split(',');
   new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  
  /**
   * Initiate Pure Counter
  */
 new PureCounter();
 
 /**
  * Animate the skills items on reveal
 */
let skillsAnimation = document.querySelectorAll('.skills-animation');
skillsAnimation.forEach((item) => {
  new Waypoint({
    element: item,
    offset: '80%',
    handler: function(direction) {
      let progress = item.querySelectorAll('.progress .progress-bar');
      progress.forEach(el => {
        el.style.width = el.getAttribute('aria-valuenow') + '%';
      });
    }
  });
});

/**
 * Initiate glightbox
*/
const glightbox = GLightbox({
  selector: '.glightbox'
});

/**
 * Init isotope layout and filters
*/
document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
  let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
  let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
  let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
  let initIsotope;
  imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
    initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort
    });
  });
  
  isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
    filters.addEventListener('click', function() {
      isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
      this.classList.add('filter-active');
      initIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      if (typeof aosInit === 'function') {
        aosInit();
      }
    }, false);
  });
  
});

/**
 * Init swiper sliders
*/
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );
    
    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);

/**
 * Correct scrolling position upon page load for URLs containing hash links.
*/
window.addEventListener('load', function(e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});

/**
 * Navmenu Scrollspy
*/
let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

})();

// submit contact form //

// Ensure EmailJS is initialized with your public key at the top of the file
(function() {
  emailjs.init({
    publicKey: "aHzOb2Ohz3gBS63Q1", 
  });
})();

const contactForm = document.getElementById('contact-form');
const submitBtn = contactForm.querySelector('button[type="submit"]'); 

contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const originalButtonText = submitBtn.textContent;
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    // Define your exact Dashboard IDs
    const serviceID = 'service_nwu58g6'; 
    const mainContactTemplateID = 'template_3ht0hrk'; 
    const autoReplyTemplateID = 'template_jhuffbm';   

    // Gather your Bootstrap form input values
    const userEmail = contactForm.querySelector('[name="email"]').value;
    const userName = contactForm.querySelector('[name="name"]').value;
    const userSubject = contactForm.querySelector('[name="subject"]').value;
    const userMessage = contactForm.querySelector('[name="message"]').value;

    // Payload 1: Sends the visitor's submission straight to your inbox
    const contactParams = {
        name: userName,
        email: userEmail,
        subject: userSubject,
        message: userMessage
    };
    Swal.fire({
        title: 'Sending Message...',
        text: 'Please wait while we process your request.',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    try {
        // 1. Run and await the primary notification email to your inbox
        await emailjs.send(serviceID, mainContactTemplateID, contactParams);
        
        // SUCCESS: The main email sent! Show the SweetAlert popup instantly.
        Swal.fire({ 
          title: 'Message Sent Successfully!',
          text: 'Thank you for reaching out. A confirmation has been sent to your inbox.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        
        contactForm.reset(); // Safely clear out input text fields

        // 2. Setup the background payload using a secure asset URL instead of a relative path
        const replyParams = {
            name: userName,
            email: userEmail, 
            logo_url: "https://placeholder.com" 
        };

        // Fire the second template quietly in the background without blocking the UI
        emailjs.send(serviceID, autoReplyTemplateID, replyParams)
            .catch(err => console.warn("Background auto-reply failed, but the primary email and alert went through cleanly:", err));

    } catch (error) {
        // Fallback error catcher if the primary connection to EmailJS drops
        console.error('Email Delivery Error Encountered:', error);
        Swal.fire({ 
          title: 'Delivery Warning',
          text: 'Oops! Failed to deliver message. Please check your connection or dashboard settings.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
    } finally {
        // Restore the interactive form button state
        submitBtn.textContent = originalButtonText;
        submitBtn.disabled = false;
    }
});
