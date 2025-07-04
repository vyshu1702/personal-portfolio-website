// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const sections = document.querySelectorAll('main section');

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Prevent contact form submission (demo only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo only)');
  });
}

// Project modal logic
const projectCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalGithub = document.getElementById('modalGithub');
const modalWebsite = document.getElementById('modalWebsite');

function openProjectModal(card) {
  const title = card.getAttribute('data-title');
  const objective = card.getAttribute('data-objective');
  const tech = card.getAttribute('data-tech');
  const github = card.getAttribute('data-github');
  const website = card.getAttribute('data-website');
  if (title && objective && tech && github && website) {
    modalTitle.textContent = title;
    modalDesc.textContent = objective;
    modalTech.textContent = tech;
    modalGithub.href = github;
    modalWebsite.href = website;
    modal.classList.add('active');
  }
}

projectCards.forEach(card => {
  card.addEventListener('click', function(e) {
    // Only open modal if not clicking a link
    if (!e.target.classList.contains('project-details-link')) {
      openProjectModal(card);
    }
  });
  const detailsLink = card.querySelector('.project-details-link');
  if (detailsLink) {
    detailsLink.addEventListener('click', function(e) {
      e.preventDefault();
      openProjectModal(card);
    });
  }
});

closeModalBtn.addEventListener('click', function() {
  modal.classList.remove('active');
});
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Section fade-in on scroll
const cardSections = document.querySelectorAll('main .card');
const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.92;
  cardSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Mobile nav toggle (if needed)
const navbar = document.querySelector('.navbar');
const navUl = navbar ? navbar.querySelector('ul') : null;
if (navbar && navUl) {
  // Add a hamburger button for mobile
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  navbar.insertBefore(hamburger, navUl);
  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });
} 