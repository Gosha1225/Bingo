import "../styles/reset.css";
import "../styles/global.css";
import "../styles/index.css";
import "../styles/fonts.css";
import handleResize from "./utils/resize";
import "./utils/images";
import {
  appearAnimation,
  ballsPanelAnimation,
  blurAnimation,
  downloadBtnAnimation,
  failScreenAnimation,
  fifthBallAnimation,
  firstBallAnimation,
  forthBallAnimation,
  handAnimation,
  hideChoose,
  secondBallAnimation,
  thirdBallAnimation,
  victoryScreenAnimation,
  yellowAnimation,
} from "./utils/animation";

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.querySelector(".link").href =
      "https://play.google.com/store/apps/details?id=com.ludigames.android.anmp.idle.siege&hl=ru&gl=US";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.querySelector(".link").href =
      "https://apps.apple.com/us/app/idle-siege-army-tycoon-game/id1527417124";
  }
}

handleResize();
downloadBtnAnimation();

// backCounting();
let count = 0;
let victoryCount = 0;

handAnimation();

async function listener(event) {
  count++;
  if (count == 1) {
    victoryCount++;
    event.currentTarget.removeEventListener("pointerdown", listener);
    firstBallAnimation();
    ballsPanelAnimation();
    blurAnimation();
    hideChoose();
    document.querySelector(".hand").remove();
    await appearAnimation(event.currentTarget.children[1]);
    document.querySelector(".blur").remove();
    document.querySelector(".choose").remove();
  }
  if (count == 2) {
    if (event.currentTarget.classList.contains("cell3")) {
      victoryCount++;
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    secondBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 3) {
    if (event.currentTarget.classList.contains("cell18")) {
      victoryCount++;
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    thirdBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 4) {
    if (event.currentTarget.classList.contains("cell13")) {
      victoryCount++;
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    forthBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 5) {
    if (event.currentTarget.classList.contains("cell8")) {
      victoryCount++;
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    fifthBallAnimation();
    document.querySelectorAll(".cell").forEach((el) => {
      el.removeEventListener("pointerdown", listener);
    });
    await appearAnimation(event.currentTarget.children[1]);
    if (victoryCount === 5) {
      yellowAnimation();
      victoryScreenAnimation();
    } else {
      failScreenAnimation();
    }
  }
}

function backCounting() {
  let myTimer = setInterval(timer, 1000);
  let seconds = 15;
  function timer() {
    seconds = seconds - 1;
    document.querySelector(".time").innerText = `00:${seconds}`;
    if (document.querySelector(".time").innerText === "00:0") {
      clearInterval(myTimer);
      if (victoryCount === 5) {
        victoryScreenAnimation();
      } else {
        failScreenAnimation();
      }
    }
  }
}

backCounting();

document.querySelectorAll(".cell").forEach((el) => {
  el.addEventListener("pointerdown", listener);
});
