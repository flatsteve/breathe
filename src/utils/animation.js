const DURATION = 6000;

export const featherAnimation = [
  { transform: "translateY(0)" },
  { transform: "translateY(20vh) translateX(2px) rotate(5deg)" },
  { transform: "translateY(40vh) translateX(-2px) rotate(-5deg)" },
  { transform: "translateY(60vh)" }
];

export const foregroundAnimation = [
  { transform: "translateY(60%)" },
  { transform: "translateY(10%)" }
];

export const backgroundAnimation = [
  { transform: "translateY(30%)" },
  { transform: "translateY(10%)" }
];

export const animationTiming = {
  direction: "alternate",
  duration: DURATION,
  easing: "ease-in-out",
  iterations: Infinity
};
