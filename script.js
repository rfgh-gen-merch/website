// 1. Image Modal (Lightbox effect)
const images = document.querySelectorAll('.product-card img');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalImage = document.createElement('img');
modal.appendChild(modalImage);
document.body.appendChild(modal);

images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src; // Set modal image source to clicked image
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none'; // Close modal when clicked
});

// 2. Smooth Scroll
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// 3. Button Hover Effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#e04e2f'; // Darker shade of orange
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#ff5733'; // Original color
  });
});
