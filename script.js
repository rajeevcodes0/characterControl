let currentState = "idle";

let allLi = document.getElementsByTagName("li");

allLi[0].addEventListener("click",idle);
allLi[1].addEventListener("click",walk);
allLi[2].addEventListener("click",run);
allLi[3].addEventListener("click",jump);
allLi[4].addEventListener("click",dead);

let boyImage = document.getElementsByTagName("img")[0];



function keyPressNotificationManager(keyName){
    let keyPressNotificationDiv = document.getElementsByClassName("key-press-notification")[0];
    keyPressNotificationDiv.innerText = keyName;
    keyPressNotificationDiv.classList.add("key-press-notification-show");
    setTimeout(()=>{
        keyPressNotificationDiv.classList.remove("key-press-notification-show");
    },1000)
}

let timers = [];

function walk(event) {
  timers.forEach((timer) => {
    clearInterval(timer);
  });
  let frameNumber = 1;
  let timer = setInterval(() => {
    boyImage.src = `flatboy/png/walk(${frameNumber}).png`;

    frameNumber++;
    if (frameNumber === 16) {
      frameNumber = 1;
    }
  }, 60);
  timers.push(timer);

  let allLi = document.getElementsByTagName("li");
  for(let i=0;i<allLi.length;i++){
      allLi[i].classList.remove("selected-li");
  }
  allLi[1].classList.add("selected-li");
}

function idle() {
  timers.forEach((timer) => {
    clearInterval(timer);
  });
  let frameNumber = 1;
  let timer = setInterval(() => {
    boyImage.src = `flatboy/png/idle(${frameNumber}).png`;

    frameNumber++;
    if (frameNumber === 16) {
      frameNumber = 1;
    }
  }, 60);
  timers.push(timer);

  let allLi = document.getElementsByTagName("li");
  for(let i=0;i<allLi.length;i++){
      allLi[i].classList.remove("selected-li");
  }
  allLi[0].classList.add("selected-li");
}

function dead() {
  timers.forEach((timer) => {
    clearInterval(timer);
  });
  let frameNumber = 1;
  let timer = setInterval(() => {
    boyImage.src = `flatboy/png/dead(${frameNumber}).png`;

    frameNumber++;
    if (frameNumber === 16) {
      frameNumber = 1;
      clearInterval(timer);
    }
  }, 60);
  timers.push(timer);

  let allLi = document.getElementsByTagName("li");
  for(let i=0;i<allLi.length;i++){
      allLi[i].classList.remove("selected-li");
  }
  allLi[4].classList.add("selected-li");
}

function jump() {
  timers.forEach((timer) => {
    clearInterval(timer);
  });
  let frameNumber = 1;
  let timer = setInterval(() => {
    
    boyImage.src = `flatboy/png/jump (${frameNumber}).png`;

    frameNumber++;
    if (frameNumber === 16) {
      frameNumber = 1;
      clearInterval(timer);
      idle();
    }
  }, 60);

  timers.push(timer);

  let allLi = document.getElementsByTagName("li");
  for(let i=0;i<allLi.length;i++){
      allLi[i].classList.remove("selected-li");
  }
  allLi[3].classList.add("selected-li");
}

function run(){
    timers.forEach((timer) => {
      clearInterval(timer);
    });
    let frameNumber = 1;
    let timer = setInterval(() => {
      boyImage.src = `flatboy/png/run (${frameNumber}).png`;

      frameNumber++;
      if (frameNumber === 16) {
        frameNumber = 1;
      }
    }, 60);

    timers.push(timer);

    let allLi = document.getElementsByTagName("li");
  for(let i=0;i<allLi.length;i++){
      allLi[i].classList.remove("selected-li");
  }
  allLi[2].classList.add("selected-li");
}


document.addEventListener("keydown", (event) => {
    
    if(event.key==="w" || event.key==="W"){
        walk();
        keyPressNotificationManager(event.key)
        
    }
    if (event.key === "i" || event.key === "I") {
        idle();
        keyPressNotificationManager(event.key)
    }

  if (event.key === "d" || event.key === "D") {
    dead();
    keyPressNotificationManager(event.key)
  }

  if (event.key === "j" || event.key === "J") {
    jump();
    keyPressNotificationManager(event.key)
  }
  if (event.key === "r" || event.key === "R") {
    run();
    keyPressNotificationManager(event.key)
  }
});

idle();