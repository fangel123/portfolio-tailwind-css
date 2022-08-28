// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Contact
const emailReceiver = 'mikhajuntaq@gmail.com'

function submitForm(event) {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    if(name == '') {
        alert('Fill the blank')
    }

    if(email == '') {
        alert('Fill the blank')
    }

    if(subject == '') {
        alert('Choose your subject')
    }

    if(message == '') {
        alert('Fill the blank')
    }

    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${message}`
    a.click()

    let dataObject = { name, email, subject, message }
    console.log(dataObject)
} 