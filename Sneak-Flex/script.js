gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.3,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 120,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from(".card", {
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 5,
  },
});
gsap.from("#quote1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#quote2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h2", {
  y: 250,
  scrollTrigger: {
    trigger: "#page4 h2",
    scroller: "body",
    start: "top 75%",
    end: "top 10%",
    scrub: 3,
  },
});
