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
  fifthRotateBallAnimation,
  fifthScaleBallAnimation,
  firstRotateBallAnimation,
  firstScaleBallAnimation,
  forthRotateBallAnimation,
  forthScaleBallAnimation,
  handAnimation,
  hideChoose,
  lightAnimation,
  redStrokeAnimation,
  reversBlurAnimation,
  reversHideChoose,
  secondRotateBallAnimation,
  secondScaleBallAnimation,
  seventhRotateBallAnimation,
  seventhScaleBallAnimation,
  sixthRotateBallAnimation,
  sixthScaleBallAnimation,
  thirdRotateBallAnimation,
  thirdScaleBallAnimation,
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
lightAnimation();

// backCounting();
let count = 0;
let victoryCount = 0;

handAnimation();

async function listener(event) {
  count++;
  if (count == 1) {
    victoryCount++;
    event.currentTarget.removeEventListener("pointerdown", listener);
    forthBallAnimation();
    ballsPanelAnimation();
    blurAnimation();
    hideChoose();
    document.querySelector(".ball-number3").classList.remove("ball-stroke");
    document.querySelector(".white_10 ").classList.remove("cell-stroke");
    document.querySelector(".hand").remove();
    await appearAnimation(event.currentTarget.children[1]);
    document.querySelector(".blur").remove();
    document.querySelector(".choose").remove();
  }
  if (count == 2) {
    if (event.currentTarget.classList.contains("cell3")) {
      victoryCount++;
    }
    if (!event.currentTarget.classList.contains("cell3")) {
      redStrokeAnimation(event.currentTarget.children[2]);
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    fifthBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 3) {
    if (event.currentTarget.classList.contains("cell18")) {
      victoryCount++;
    }
    if (!event.currentTarget.classList.contains("cell18")) {
      redStrokeAnimation(event.currentTarget.children[2]);
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    sixthBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 4) {
    if (event.currentTarget.classList.contains("cell13")) {
      victoryCount++;
    }
    if (!event.currentTarget.classList.contains("cell13")) {
      redStrokeAnimation(event.currentTarget.children[2]);
    }
    event.currentTarget.removeEventListener("pointerdown", listener);
    seventhBallAnimation();
    ballsPanelAnimation();
    await appearAnimation(event.currentTarget.children[1]);
  }
  if (count == 5) {
    if (event.currentTarget.classList.contains("cell8")) {
      victoryCount++;
    }
    if (!event.currentTarget.classList.contains("cell8")) {
      redStrokeAnimation(event.currentTarget.children[2]);
    }
    event.currentTarget.removeEventListener("pointerdown", listener);

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

function firstBallAnimation() {
  firstScaleBallAnimation();
  firstRotateBallAnimation();
}

function secondBallAnimation() {
  firstRotateBallAnimation();
  secondScaleBallAnimation();
  secondRotateBallAnimation();
}

function thirdBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdScaleBallAnimation();
  thirdRotateBallAnimation();
}

function forthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthScaleBallAnimation();
  forthRotateBallAnimation();
}

function fifthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthScaleBallAnimation();
  fifthRotateBallAnimation();
}

function sixthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthRotateBallAnimation();
  sixthScaleBallAnimation();
  sixthRotateBallAnimation();
}

function seventhBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthRotateBallAnimation();
  sixthRotateBallAnimation();
  seventhScaleBallAnimation();
  seventhRotateBallAnimation();
}

function doBingo() {
  firstBallAnimation();
  ballsPanelAnimation();
  setTimeout(() => {
    secondBallAnimation();
    ballsPanelAnimation();
    setTimeout(() => {
      thirdBallAnimation();
      ballsPanelAnimation();
      reversBlurAnimation();
      reversHideChoose();
      document.querySelector(".hand").classList.remove("hidden");
      document.querySelector(".white_10").classList.add("cell-stroke");
      document.querySelector(".ball-number3").classList.add("ball-stroke");
      document.querySelectorAll(".cell").forEach((el) => {
        el.addEventListener("pointerdown", listener);
      });
    }, 2000);
  }, 2000);
}

doBingo();
