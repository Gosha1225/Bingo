import firstBackground from "../../assets/Playable_1/BG.png";

import upperBox from "../../assets/Playable_1/Upper_Box.png";
import menu from "../../assets/Playable_1/Menu.png";

import ball1 from "../../assets/Playable_1/61.png";
import ball2 from "../../assets/Playable_1/29.png";
import ball3 from "../../assets/Playable_1/68.png";
import ball4 from "../../assets/Playable_1/8.png";
import ball5 from "../../assets/Playable_1/10.png";

import purple from "../../assets/Playable_1/purple.png";
import white from "../../assets/Playable_1/white.png";
import yellow from "../../assets/Playable_1/yellow.png";
import scarab from "../../assets/Playable_1/scarab.png";

import empty from "../../assets/Playable_1/Empty.png";
import clock from "../../assets/Playable_1/Time.png";
import bingo from "../../assets/Playable_1/bingo.png";

import secondBackground from "../../assets/Playable_1/BG2.png";

import logo from "../../assets/Playable_1/Logo.png";
import money from "../../assets/Playable_1/CashPile.png";

import victoryText1 from "../../assets/Playable_1/TAKE_YOUR.png";
import victoryText2 from "../../assets/Playable_1/CASH_copy.png";
import victoryLink from "../../assets/Playable_1/Download_NOW.png";

import failText1 from "../../assets/Playable_1/EARNED.png";
import failText2 from "../../assets/Playable_1/$5.png";
import failLink from "../../assets/Playable_1/REDEEM_NOW.png";

import blur from "../../assets/Playable_1/Blur.png";
import hand from "../../assets/Playable_1/Hand.png";
import choose from "../../assets/Playable_1/choose.png";

setSource(document.querySelector(".blur"), blur);
setSource(document.querySelector(".choose"), choose);

function setSource(el, source) {
  el.src = el.src || source;
}

setSource(document.querySelector(".first-background"), firstBackground);
setSource(document.querySelector(".upper-box-background"), upperBox);
setSource(document.querySelector(".menu"), menu);

const ballsImg = [ball5, ball1, ball2, ball3, ball4];
document.querySelectorAll(".ball-number").forEach((el, index) => {
  setSource(el, ballsImg[index]);
});

document.querySelectorAll(".white-board").forEach((el) => {
  setSource(el, white);
});

document.querySelectorAll(".purple-board").forEach((el) => {
  setSource(el, purple);
});

document.querySelectorAll(".yellow-board").forEach((el) => {
  setSource(el, yellow);
});

document.querySelectorAll(".scarab-board").forEach((el) => {
  setSource(el, scarab);
});

setSource(document.querySelector(".boarder"), empty);
setSource(document.querySelector(".clock"), clock);
setSource(document.querySelector(".bingo"), bingo);

document.querySelectorAll(".secondbackground").forEach((el) => {
  setSource(el, secondBackground);
});

document.querySelectorAll(".logo").forEach((el) => {
  setSource(el, logo);
});

setSource(document.querySelector(".hand"), hand);

setSource(document.querySelector(".victory-money"), money);
setSource(document.querySelector(".victory-text"), victoryText1);
setSource(document.querySelector(".victory-cash"), victoryText2);
setSource(document.querySelector(".victory-download"), victoryLink);

setSource(document.querySelector(".fail-money"), money);
setSource(document.querySelector(".fail-text"), failText1);
setSource(document.querySelector(".fail-cash"), failText2);
setSource(document.querySelector(".fail-download"), failLink);
