burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar')
ul=document.querySelector('.navbar ul')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('navbar-h')
    ul.classList.toggle('opac')
    rightnav.classList.toggle('opac')
})