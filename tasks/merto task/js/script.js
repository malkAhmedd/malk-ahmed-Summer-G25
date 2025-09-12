const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


window.addEventListener('scroll' , ()=>{
    var upArrow = document.getElementById('upArrow')
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 400) upArrow.classList.remove('d-none')
        else upArrow.classList.add('d-none')
})


if (document.getElementById('contactForm')) {
    var contactForm = document.getElementById('contactForm')
    contactForm.addEventListener('input', (e) => {
          e.preventDefault(); 
    
        if (e.target.id == "userName") {
            nameValidation(e.target)
        }
        else if (e.target.id == "userEmail") {
            emailValidation(e.target)
      
          
        }
        else if (e.target.id == "subject") {
           nameValidation(e.target)
        }
    })

       contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        nameValidation(document.getElementById('userName'));
        emailValidation(document.getElementById('userEmail'));
        nameValidation(document.getElementById('subject'));
    });
    
}

var nameValidation = (element) => {
    var inputValue = element.value.trim()
    console.log(inputValue.length);
     if (inputValue.length == 0) {
        handleError(element, "This field is required");

}
  else {
        handleError(element, ""); 
    }
}
var emailValidation = (input) => {
    var inputValue = input.value.trim();
    if (inputValue.length == 0) {
        handleError(input, "This field is required");
    } 

    else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(inputValue)) {
            handleError(input, ""); 
        } else {
            handleError(input, "Please enter a valid email"); 
        }
    }
}




var handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}

if(document.getElementById('userName')||document.getElementById('userEmail')||document.getElementById('subject')){
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    nameValidation(document.getElementById('userName'));
    emailValidation(document.getElementById('userEmail'));
    nameValidation(document.getElementById('subject'));

    let msgBox = document.getElementById('formMessage');

   
    let errors = contactForm.querySelectorAll("small");
    let hasError = false;
    errors.forEach(s => {
        if (s.innerText.trim() !== "") {
            hasError = true;
        }
    });

    if (hasError) {
        msgBox.innerText = "One or more fields have an error. Please check and try again.";
        msgBox.className = "text-center mb-3 b-color p-2 rounded";
    } else {
        msgBox.innerText = "Thanks, your message has been sent!";
        msgBox.className = "text-center mb-3 b-color p-2 rounded";
  setTimeout(() => {
        contactForm.submit();
    }, 4000); 
    }
});

}
if (document.querySelector('.owl-carousel')) {
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:5,
    loop:true,
    nav:true,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']
  });
});
}