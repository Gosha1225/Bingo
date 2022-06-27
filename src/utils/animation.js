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
    delay: 1000,
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
    targets: ".yellow-board",
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

export function reversBlurAnimation() {
  return new Promise((res) => {
    anime({
      targets: ".blur",
      complete: res,
      opacity: [
        { value: 0, duration: 200 },
        { value: 1, duration: 200 },
      ],
      easing: "linear",
    });
  });
}

export function hideChoose() {
  anime({
    targets: ".choose",
    opacity: [
      { value: 1, duration: 200 },
      { value: 0, duration: 200 },
    ],
    easing: "linear",
  });
}

export function reversHideChoose() {
  anime({
    targets: ".choose",
    opacity: [
      { value: 0, duration: 200 },
      { value: 1, duration: 200 },
    ],
    easing: "linear",
  });
}

let leftValue = 540;

export function ballsPanelAnimation() {
  anime({
    targets: ".balls",
    duration: 500,
    left: `${(leftValue = leftValue - 115)}px`,
    easing: "linear",
  });
}

let turns1 = 0;
let turns2 = 0;
let turns3 = 0;
let turns4 = 0;
let turns5 = 0;
let turns6 = 0;
let turns7 = 0;

export function firstScaleBallAnimation() {
  anime({
    targets: ".ball1",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function firstRotateBallAnimation() {
  anime({
    targets: ".ball1",
    duration: 500,
    rotate: `${(turns1 = turns1 - 1)}turn`,
    easing: "linear",
  });
}

export function secondScaleBallAnimation() {
  anime({
    targets: ".ball2",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function secondRotateBallAnimation() {
  anime({
    targets: ".ball2",
    duration: 500,
    rotate: `${(turns2 = turns2 - 1)}turn`,
    easing: "linear",
  });
}

export function thirdScaleBallAnimation() {
  anime({
    targets: ".ball3",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function thirdRotateBallAnimation() {
  anime({
    targets: ".ball3",
    duration: 500,
    rotate: `${(turns3 = turns3 - 1)}turn`,
    easing: "linear",
  });
}

export function forthScaleBallAnimation() {
  anime({
    targets: ".ball4",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function forthRotateBallAnimation() {
  anime({
    targets: ".ball4",
    duration: 500,
    rotate: `${(turns4 = turns4 - 1)}turn`,
    easing: "linear",
  });
}

export function fifthScaleBallAnimation() {
  anime({
    targets: ".ball5",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function fifthRotateBallAnimation() {
  anime({
    targets: ".ball5",
    duration: 500,
    rotate: `${(turns5 = turns5 - 1)}turn`,
    easing: "linear",
  });
}

export function sixthScaleBallAnimation() {
  anime({
    targets: ".ball6",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function sixthRotateBallAnimation() {
  anime({
    targets: ".ball6",
    duration: 500,
    rotate: `${(turns6 = turns6 - 1)}turn`,
    easing: "linear",
  });
}

export function seventhScaleBallAnimation() {
  anime({
    targets: ".ball7",
    scale: [
      { value: 0.5 },
      { value: 0.6, duration: 250 },
      { value: 0.5, duration: 250 },
    ],
    easing: "linear",
  });
}

export function seventhRotateBallAnimation() {
  anime({
    targets: ".ball7",
    duration: 500,
    rotate: `${(turns7 = turns7 - 1)}turn`,
    easing: "linear",
  });
}

export function redStrokeAnimation(target) {
  anime({
    targets: target,
    opacity: [{ value: 0 }, { value: 1, duration: 400 }],
    easing: "linear",
  });
}

export function lightAnimation() {
  anime({
    targets: ".light",
    duration: 13000,
    rotate: "1turn",
    loop: true,
    easing: "linear",
  });
}

export function handAnimation() {
  anime({
    targets: ".hand",
    scale: [
      { value: 1 },
      { value: 1.15, duration: 900 },
      { value: 1, duration: 900 },
    ],
    loop: true,
    easing: "linear",
  });
}
