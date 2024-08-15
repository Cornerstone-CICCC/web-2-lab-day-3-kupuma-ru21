gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // set up
  const timeLine = gsap.timeline();
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;

  // section1
  const childrenFromH1 = document.getElementsByTagName("h1")[0].children;
  const paragraph0 = document.getElementsByTagName("p")[0];
  const img0 = document.getElementsByTagName("img")[0];
  timeLine
    .fromTo(childrenFromH1[1], { x: windowInnerWidth }, { x: 0 })
    .fromTo(childrenFromH1[0], { x: -windowInnerWidth }, { x: 0 })
    .fromTo(
      paragraph0,
      { opacity: 0, rotate: 90, transformOrigin: "top left" },
      { opacity: 1, rotate: 0 }
    )
    .fromTo(img0, { y: windowInnerHeight }, { y: 0 });

  // section2
  const childrenFromH2 = document.getElementsByTagName("h2")[0].children;
  const paragraph1 = document.getElementsByTagName("p")[1];
  for (let index = 0; index < childrenFromH2.length; index++) {
    const element = childrenFromH2[index];
    gsap.from(element, {
      scrollTrigger: { trigger: paragraph1 },
      y: -windowInnerHeight,
      delay: index * 0.5,
    });
  }
  // TODO: add animation to paragraph1

  // section3
  const paragraph2 = document.getElementsByTagName("p")[2];
  for (let index = 0; index < paragraph2.children.length; index++) {
    const element = paragraph2.children[index];
    element.style.color = "black";
    element.style.backgroundColor = "white";
    gsap.from(element, {
      scrollTrigger: { trigger: paragraph2 },
      y: windowInnerHeight,
      delay: index * 0.5,
    });
  }

  // section3 and 4
  gsap.to(".horizontal-sections", {
    xPercent: -34.8,
    scrollTrigger: {
      trigger: ".horizontal-sections",
      pin: true,
      scrub: 1,
    },
  });

  // section5
  const h2_2 = document.getElementsByTagName("h2")[2];
  const newH2_2 = document.createElement("h2");
  for (const element of h2_2.innerText) {
    newH2_2.innerHTML += `<span class="contactMe">${element}</span>`;
  }
  h2_2.innerHTML = newH2_2.innerHTML;
  gsap.from(".contactMe", 1, { stagger: 0.5, y: -windowInnerHeight });
});
