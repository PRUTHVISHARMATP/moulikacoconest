// Navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

function revealElements() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Trigger reveal on scroll and on initial load
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// 3D parallax tilt effect
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});

// Mobile fallback: pop effect on tap
if (/Mobi|Android/i.test(navigator.userAgent)) {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('touchend', () => {
      card.style.transform = 'scale(1)';
    });
  });
}
