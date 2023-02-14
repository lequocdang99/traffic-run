"use strict";

const road = document.getElementById("road");
const sky = document.getElementById("sky");
const car = document.getElementById("car");
const dog = document.getElementById("dog");
const pedestrian = document.getElementById("pedestrian");
const motorbike = document.getElementById("motorbike");
const wheel_front = document.getElementById("wheel-front");
const wheel_back = document.getElementById("wheel-back");
const player = document.getElementById("player");

//Pause game
function pause() {
  road.style.animationPlayState = "paused";
  sky.style.animationPlayState = "paused";
  car.style.animationPlayState = "paused";
  dog.style.animationPlayState = "paused";
  pedestrian.style.animationPlayState = "paused";
  motorbike.style.animationPlayState = "paused";
  wheel_front.style.animationPlayState = "paused";
  wheel_back.style.animationPlayState = "paused";
}
//Start game
function start() {
  road.style.animationPlayState = "running";
  sky.style.animationPlayState = "running";
  car.style.animationPlayState = "running";
  dog.style.animationPlayState = "running";
  pedestrian.style.animationPlayState = "running";
  motorbike.style.animationPlayState = "running";
  wheel_front.style.animationPlayState = "running";
  wheel_back.style.animationPlayState = "running";
}
//Moving motorbike
function moving() {
  const e = window.event;
  //Up
  if (e.keyCode === 38) {
    //Player in middle lane
    if (player.style.top === "40vh") {
      return (player.style.top = "20vh");
    }
    //Player in bottom lane
    else if (player.style.top === "60vh") {
      return (player.style.top = "40vh");
    }
    //Player first move
    return (player.style.top = "20vh");
  }
  //Down
  if (e.keyCode === 40) {
    //Player in middle lane
    if (player.style.top === "40vh") {
      return (player.style.top = "60vh");
    }
    //Player in top lane
    else if (player.style.top === "20vh") {
      return (player.style.top = "40vh");
    }
    //Player first move
    return (player.style.top = "60vh");
  }
}
//Check if player crash
const checkCrash = setInterval(() => {
  //Player position
  let playerRight = parseInt(motorbike.getBoundingClientRect().right);
  let playerBottom = parseInt(motorbike.getBoundingClientRect().bottom);
  //Dog position
  let dogLeft = parseInt(dog.getBoundingClientRect().left);
  //Car position
  let carLeft = parseInt(car.getBoundingClientRect().left);
  //Pedestrian
  let pedestrianLeft = parseInt(pedestrian.getBoundingClientRect().left);
  //Dog crash
  if (playerRight === dogLeft && playerBottom <= 424) {
    pause();
    setTimeout(() => {
      alert("You crashed!!!");
    }, 10);
    window.location.reload();
  }
  //Car crash
  else if (
    playerRight === carLeft &&
    playerBottom > 424 &&
    playerBottom <= 583
  ) {
    pause();
    setTimeout(() => {
      alert("You crashed!!!");
    }, 20);
    window.location.reload();
  }
  //Pedestrian crash
  else if (
    playerRight === pedestrianLeft &&
    playerBottom <= 743 &&
    playerBottom > 583
  ) {
    pause();
    setTimeout(() => {
      alert("You crashed!!!");
    }, 10);
    window.location.reload();
  }
}, 5);
