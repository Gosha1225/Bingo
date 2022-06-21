import "../styles/reset.css";
import "../styles/global.css";
import "../styles/index.css";
import "../styles/fonts.css";
import handleResize from "./utils/resize";
import "./utils/images";
import { appearAnimation, downloadBtnAnimation } from "./utils/animation";

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
getMobileOperatingSystem();

downloadBtnAnimation();

async function listener(event) {
  console.log(event.target.parentElement.children[1]);
  await appearAnimation(event.target.parentElement.children[1]);
}

document.querySelectorAll(".cell").forEach((el) => {
  el.addEventListener("pointerdown", listener);
});
