const textElement = document.querySelector('.home__sidebar .text');
const navigateButtons = document.querySelectorAll('.navigate__arrow');
const mainBackground = document.querySelector('.home__main');
const showMenu = document.querySelector('.mobile');
const mask = document.querySelector('.mask');

document.querySelector('.menuIcon').addEventListener("click", () => {
    showMenu.style.display = "flex";
    mask.style.display = "flex";
})
document.querySelector('.closeIcon').addEventListener("click", () => {
    showMenu.style.display = "none";
    mask.style.display = "none";
})
mask.addEventListener("click", () => {
    showMenu.style.display = "none";
    mask.style.display = "none";
})

let currentSlide = 0; // Current slide index

const slideContent = [
    {
        title: 'Discover innovative ways to decorate',
        background: 'url("/assets/images/desktop-image-hero-1.jpg")',
        description: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title: 'We are available all across the globe',
        background: 'url("/assets/images/desktop-image-hero-2.jpg")',
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title: ' Manufactured with the best materials',
        background: 'url("/assets/images/desktop-image-hero-3.jpg")',
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

// Update sidebar title and main background
const updateSlide = () => {
  textElement.innerHTML = `
    <h1>${slideContent[currentSlide].title}</h1>
    <p>${slideContent[currentSlide].description}</p>
  `;
  mainBackground.style.backgroundImage = slideContent[currentSlide].background;
};

// Handle navigation button clicks
navigateButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      currentSlide = (currentSlide - 1 + slideContent.length) % slideContent.length;
    } else {
      currentSlide = (currentSlide + 1) % slideContent.length;
    }
    updateSlide();
  });
});

// Initial update
updateSlide();
