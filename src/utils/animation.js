import anime from "animejs";

export function victoryScreenAnimation() {
  anime({
    targets: ".victory-screen",
    top: "0px",
    duration: 900,
    delay: 2000,
    easing: "easeInOutQuart",
  });
}

export function failScreenAnimation() {
  anime({
    targets: ".fail-screen",
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

export function yellowAnimation() {
  anime({
    targets: '.yellow-board',
    complete: scarabAnimation,
    opacity: [
      { value: 0, duration: 200 },
      { value: 1, duration: 200 },
    ],
    easing: "linear",
  });
}

export function scarabAnimation() {
  anime({
    targets: ".scarab-board",
    scale: [
      { value: 0 },
      { value: 1.05, duration: 300 },
      { value: 1, duration: 300 },
    ],
    easing: "easeInOutQuart",
  });
}

export function blurAnimation() {
  return new Promise((res) => {
    anime({
      targets: ".blur",
      complete: res,
      opacity: [
        { value: 1, duration: 200 },
        { value: 0, duration: 200 },
      ],
      easing: "linear",
    });
  });
}

let leftValue = 428;

export function ballsPanelAnimation() {
  anime({
    targets: ".balls",
    duration: 500,
    left: `${(leftValue = leftValue - 108)}px`,
    easing: "linear",
  });
}

export function firstBallAnimation() {
  anime({
    targets: ".ball-number1",
    scale: [{ value: 1 }, { value: 0.82, duration: 500 }],
    easing: "linear",
  });
}

export function secondBallAnimation() {
  anime({
    targets: ".ball-number2",
    scale: [{ value: 1.25 }, { value: 1, duration: 500 }],
    easing: "linear",
  });
}

export function thirdBallAnimation() {
  anime({
    targets: ".ball-number3",
    scale: [{ value: 1.25 }, { value: 1, duration: 500 }],
    easing: "linear",
  });
}

export function forthBallAnimation() {
  anime({
    targets: ".ball-number4",
    scale: [{ value: 1.25 }, { value: 1, duration: 500 }],
    easing: "linear",
  });
}

export function fifthBallAnimation() {
  anime({
    targets: ".ball-number5",
    scale: [{ value: 1.25 }, { value: 1, duration: 500 }],
    easing: "linear",
  });
}

export function handAnimation() {
  anime({
    targets: ".hand",
    delay: 500,
    duration: 1000,
    top: "722px",
    left: "261px",
    easing: "linear",
    loop: true,
  });
}
