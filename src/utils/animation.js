import anime from "animejs";

export function finalScreenAnimation() {
  anime({
    targets: ".final-screen",
    top: "0px",
    duration: 900,
    delay: 2000,
    easing: "easeInOutQuart",
  });
}

export function downloadBtnAnimation() {
  anime({
    targets: [".fail-download", "victory-download"],
    scale: [
      { value: 1 },
      { value: 1.05, duration: 2000 },
      { value: 1, duration: 2000 },
    ],
    loop: true,
    easing: "linear",
  });
}

export function appearAnimation(target) {
  return new Promise((res) => {
    anime({
      targets: target,
      complete: res,
      opacity: [
        { value: 0, duration: 200 },
        { value: 1, duration: 200 },
      ],
      easing: "linear",
    });
  });
}

export function handAnimation() {
  anime({
    targets: ".hand",
    delay: 500,
    duration: 1000,
    top: "1800px",
    easing: "linear",
    loop: true,
  });
}
