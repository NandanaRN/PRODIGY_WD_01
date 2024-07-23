document.addEventListener('DOMContentLoaded', function () {  
    const menuLinks = document.querySelectorAll('nav ul li a');  

    menuLinks.forEach(link => {  
        link.addEventListener('click', function (e) {  
            e.preventDefault();  
            const targetSection = document.querySelector(this.getAttribute('href'));  
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });  
        });  
    });  

    // RSVP Form submission  
    const rsvpForm = document.getElementById('rsvp-form');  
    rsvpForm.addEventListener('submit', function (e) {  
        e.preventDefault();  
        document.getElementById('confirmation').style.display = 'block';  
        rsvpForm.reset();  // Reset form fields after submission  
    });  
});
