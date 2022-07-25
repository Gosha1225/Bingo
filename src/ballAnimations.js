import {
  fifthRotateBallAnimation,
  fifthScaleBallAnimation,
  firstRotateBallAnimation,
  firstScaleBallAnimation,
  forthRotateBallAnimation,
  forthScaleBallAnimation,
  secondRotateBallAnimation,
  secondScaleBallAnimation,
  seventhRotateBallAnimation,
  seventhScaleBallAnimation,
  sixthRotateBallAnimation,
  sixthScaleBallAnimation,
  thirdRotateBallAnimation,
  thirdScaleBallAnimation,
} from "./utils/animation";

export function firstBallAnimation() {
  firstScaleBallAnimation();
  firstRotateBallAnimation();
}

export function secondBallAnimation() {
  firstRotateBallAnimation();
  secondScaleBallAnimation();
  secondRotateBallAnimation();
}

export function thirdBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdScaleBallAnimation();
  thirdRotateBallAnimation();
}

export function forthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthScaleBallAnimation();
  forthRotateBallAnimation();
}

export function fifthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthScaleBallAnimation();
  fifthRotateBallAnimation();
}

export function sixthBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthRotateBallAnimation();
  sixthScaleBallAnimation();
  sixthRotateBallAnimation();
}

export function seventhBallAnimation() {
  firstRotateBallAnimation();
  secondRotateBallAnimation();
  thirdRotateBallAnimation();
  forthRotateBallAnimation();
  fifthRotateBallAnimation();
  sixthRotateBallAnimation();
  seventhScaleBallAnimation();
  seventhRotateBallAnimation();
}