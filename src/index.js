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
  handAnimation,
  hideChoose,
  lightAnimation,
  redStrokeAnimation,
  reversBlurAnimation,
  reversHideChoose,
  victoryScreenAnimation,
  yellowAnimation,
} from "./utils/animation";
import {
  fifthBallAnimation,
  firstBallAnimation,
  forthBallAnimation,
  secondBallAnimation,
  seventhBallAnimation,
  sixthBallAnimation,
  thirdBallAnimation,
} from "./ballAnimations";

// document.querySelector(".choose").href = "https://www.google.com/";

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // document.querySelector(".link").href =
    //   "https://play.google.com/store/apps/details?id=com.ludigames.android.anmp.idle.siege&hl=ru&gl=US";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    console.log(26789);
    window.location = "https://apps.apple.com/us/app/empire-bingo/id1584334464";
  }
}

const wrapper = document.getElementById("scalable-wrapper");
const wrapperContent = document.getElementById("scalable-wrapper__content");
const elHeight = wrapperContent.offsetHeight;
const elWidth = wrapperContent.offsetWidth;

// window.onload = () => {
//   handleResize();
//   setInterval(() => {
//     handleResize();
//   }, 500);
// };

// setInterval(() => {
//   handleResize();
// }, 500);

document.querySelectorAll(".link").forEach((el) => {
  el.addEventListener("pointerdown", (e) => {
    getMobileOperatingSystem();
  });
});

let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(handleResize, options);

handleResize();
downloadBtnAnimation();
lightAnimation();

setTimeout(() => {
  handleResize();
}, 500);

backCounting();
let count = 0;
let victoryCount = 0;

handAnimation();

window.addEventListener("resize", function (event) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
});

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

function doBingo() {
  firstBallAnimation();
  ballsPanelAnimation();
  setTimeout(() => {
    secondBallAnimation();
    ballsPanelAnimation();
    setTimeout(() => {
      backCounting();
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

window.onload = function () {
  dapi.isReady()
    ? onReadyCallback()
    : dapi.addEventListener("ready", onReadyCallback);
  //here you can put other code that not related to dapi logic
};

function onReadyCallback() {
  //no need to listen to this event anymore
  dapi.removeEventListener("ready", onReadyCallback);
  let isAudioEnabled = !!dapi.getAudioVolume();

  if (dapi.isViewable()) {
    adVisibleCallback({ isViewable: true });
  }
  dapi.isViewable() ? startGame() : false;

  dapi.addEventListener("viewableChange", adVisibleCallback);
  dapi.addEventListener("adResized", adResizeCallback);
  dapi.addEventListener("audioVolumeChange", audioVolumeChangeCallback);
}

try {
  mraid?.getMaxSize();
  mraid?.getState();
} catch (e) {}

function startGame() {
  var screenSize = dapi.getScreenSize();
}

function userClickedDownloadButton() {
  try {
    if (mraid) {
      mraid.openStoreUrl(
        "https://apps.apple.com/us/app/empire-bingo/id1584334464"
      );
    }
  } catch (e) {}

  try {
    if (dapi?.isReady()) {
      dapi.openStoreUrl(
        "https://apps.apple.com/us/app/empire-bingo/id1584334464"
      );
    }
    window.open("https://apps.apple.com/us/app/empire-bingo/id1584334464");
  } catch (e) {}
}

document.querySelectorAll(".link").forEach((el) => {
  el.addEventListener("pointerdown", userClickedDownloadButton);
});

function adVisibleCallback(event) {
  console.log("isViewable " + event.isViewable);
  if (event.isViewable) {
    const screenSize = dapi.getScreenSize();
    //START or RESUME the ad
  } else {
    //PAUSE the ad and MUTE sounds
  }
}

function adResizeCallback(event) {
  const screenSize = event;
  console.log(
    "ad was resized width " + event.width + " height " + event.height
  );
}

function audioVolumeChangeCallback(volume) {
  let isAudioEnabled = !!volume;

  if (volume >= 0) {
    console.log(volume);
  }

  if (isAudioEnabled) {
    //START or turn on the sound
  } else {
    //PAUSE the turn off the sound
  }
}

window.visualViewport.addEventListener("resize", (e) => {
  handleResize();
});
