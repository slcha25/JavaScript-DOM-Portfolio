// create hamburger menu for mobile
const hamMenu = document.querySelector('.hamburger');

const offScreenMenu = document.querySelector('.off-screen-nav-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});    

// create the dark mode environment 
let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode','active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode',null);
}

if(darkMode === "active") enableDarkMode()

themeSwitch.addEventListener("click",() => {
    darkMode = localStorage.getItem('darkMode')
    darkMode !== "active" ? enableDarkMode() :disableDarkMode ()
})

// Smooth scrolling for navigation links
document.querySelectorAll('.off-screen-nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close the mobile menu
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      
      // Scroll to the target section
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// create the carousel slideshow for project
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

// Get slide width once and use it for positioning
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Initialize first slide and dot
function initCarousel() {
    // Remove any existing 'current-slide' classes
    slides.forEach(slide => slide.classList.remove('current-slide'));
    dots.forEach(dot => dot.classList.remove('current-slide'));

    // Set the first slide and dot as current
    slides[0].classList.add('current-slide');
    dots[0].classList.add('current-slide');
    hideShowArrows(0); // This will hide left arrow on first slide
}

// Move to specific slide
function moveToSlide(targetIndex) {
    //safety check for valid index
    if (targetIndex < 0 || targetIndex >= slides.length) return;
    // Get current and target slides and dots
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[targetIndex];
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = dots[targetIndex];
    // Update track position
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    
    // Update classes
    currentSlide?.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentDot?.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    
    // Update arrows
    hideShowArrows(targetIndex);
}

// Update arrow visibility
function hideShowArrows(targetIndex) {
    // Show left arrow unless we're on the first slide
    prevButton.classList.toggle('is-hidden', targetIndex === 0);
    // Show right arrow unless we're on the last slide
    nextButton.classList.toggle('is-hidden', targetIndex === slides.length - 1);
}

// Next button click handler
nextButton.addEventListener('click', () => {
    const currentIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < slides.length) {
        moveToSlide(nextIndex);
    }
});

// Previous button click handler
prevButton.addEventListener('click', () => {
    const currentIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));
    const prevIndex = currentIndex - 1;
    
    if (prevIndex >= 0) {
        moveToSlide(prevIndex);
    }
});

// Dot navigation click handler
dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('.carousel_indicator');
    if (!targetDot) return;
    
    const targetIndex = dots.indexOf(targetDot);
    const currentSlide = track.querySelector('.current-slide');
    const currentIndex = slides.indexOf(currentSlide);
    
    // Only proceed if clicked dot is different from current slide
    if (targetIndex !== currentIndex) {
        moveToSlide(targetIndex);
    }
});

// Initialize the carousel
initCarousel();

// add event listener to the contact form, after click the button, the form will be cleared and pop up a message "Thank you for your message!"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Check if form exists
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        // Submit via Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Clear form
                form.reset();
                // Show your custom message
                alert('Thank you for your message, I will contact you shortly!');
                // Optional: Redirect after delay
                // setTimeout(() => window.location.href = '/thank-you.html', 2000);
            } else {
                alert('Error submitting form. Please try again.');
            }
        })
        .catch(error => {
            alert('Error submitting form. Please try again.');
        });
    });
});



