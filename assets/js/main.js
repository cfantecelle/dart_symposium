function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  container.scrollBy({ left: direction * 320, behavior: 'smooth' });
}

/* Animated Counters */
const counters = document.querySelectorAll('[data-counter]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute('data-counter');
      let count = 0;

      const update = () => {
        count += target / 100;
        if (count < target) {
          el.innerText = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };

      update();
      observer.unobserve(el);
    }
  });
});

counters.forEach(counter => observer.observe(counter));

document.addEventListener("DOMContentLoaded", () => {

  const triggers = document.querySelectorAll(".menu-trigger");

  triggers.forEach(trigger => {
    const id = trigger.dataset.menu;
    const dropdown = document.querySelector(
      `.menu-dropdown[data-menu="${id}"]`
    );

    let timeout;

    function openMenu() {
      clearTimeout(timeout);
      dropdown.classList.remove("hidden");
    }

    function closeMenu() {
      timeout = setTimeout(() => {
        dropdown.classList.add("hidden");
      }, 200); // delay in ms
    }

    trigger.addEventListener("mouseenter", openMenu);
    trigger.addEventListener("mouseleave", closeMenu);

    dropdown.addEventListener("mouseenter", openMenu);
    dropdown.addEventListener("mouseleave", closeMenu);
  });

});


///

// Carousel
function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  const cardWidth = 280 + 32;
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

setInterval(() => {
  document.querySelectorAll('.auto-carousel').forEach(container => {
    const cardWidth = 280 + 32;
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".auto-carousel").forEach(container => {
    const cardWidth = 280 + 32;
    const startIndex = 3; // ← change this if you want
    container.scrollLeft = cardWidth * startIndex;
  });
});


// Mobile menu header
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});