// navbar scroll feature
const navbar = document.querySelector('.navbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);

// split text
gsap.registerPlugin(SplitText);

let split = SplitText.create(".split-text", {
    type: "chars"
});

gsap.from(split.chars, {
    duration: 1,
    x: 0,
    autoAlpha: 0,
    stagger: 0.05
});

// scramble text
window.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".scramble-text",
    {
      scrambleText: {
        text: "",
        chars: "upperAndLowerCase",
      },
    },
    {
      scrambleText: {
        text: "A Web & Marketing Specialist.",
        chars: "upperAndLowerCase",
        revealDelay: 1,
        speed: 0.3,
      },
      duration: 2,
      ease: "none",
    }
  );
});

// flip cards
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        this.classList.toggle("flipped");
      });
    });
});