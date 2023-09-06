const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("text-line");
    } else {
      entry.target.classList.remove("text-line");
    }
  });
});
const portfolioHeading = document.querySelectorAll(".hidden1");
portfolioHeading.forEach((el) => observer2.observe(el));

// const currentViewWidth = $(window).width();
// if (currentViewWidth < 1500) {
//   $("<br/>").insertBefore($(".auto-type"));
//   if (currentViewWidth < 500) {
//     $(".title-heading").css("font-size", "2.5rem");
//     $(".animatedPortfolio").css("font-size", "4rem");
//   }
// }

const typed = new Typed(".auto-type", {
  strings: ["Eunji Park.", "a developer.", "a designer"],
  typeSpeed: 130,
  backSpeed: 100,
  loop: true,
});

gsap.to(".st0", {
  duration: 2.5,
  ease: "elastic.out(1,0.3)",
  x: 50,
  delay: 1.5,
});
