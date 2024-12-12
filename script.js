const hamburger=document.querySelector(".hamburger");
  const navLink = document.getElementById("navLinks");
  hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active")
  navLinks.classList.toggle("active");
  })


const shirts = document.querySelector('.shirts');
const navLinks = document.querySelector('.nav-links');
const footerLinks = document.querySelectorAll('.footer-column ul li a');
footerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});