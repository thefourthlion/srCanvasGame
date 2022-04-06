const Countries = [
  // canada
  {
    name: "Vancouver",
    country: "Canada",
    time: -7,
    daylightSavings: 1,
    rain: 168,
    snow: 9,
    sun: 289,
  },
  {
    name: "Yellowknife",
    country: "Canada",
    time: -7,
    daylightSavings: 1,
    rain: 119,
    snow: 78,
    sun: 43,
  },
  {
    name: "Quebec",
    country: "Canada",
    time: -4,
    daylightSavings: 1,
    rain: 175,
    snow: 70,
    sun: 290,
  },
  {
    name: "Resolute Bay",
    country: "Canada",
    time: -5,
    daylightSavings: 1,
    rain: 109,
    snow: 93,
    sun: 183,
  },

  // USA
  {
    name: "Los Angeles",
    country: "USA",
    time: -7,
    daylightSavings: 1,
    rain: 34,
    snow: 0,
    sun: 186,
  },
  {
    name: "Denver",
    country: "USA",
    time: -7,
    daylightSavings: 1,
    rain: 84,
    snow: 31,
    sun: 115,
  },
  {
    name: "Chicago",
    country: "USA",
    time: -5,
    daylightSavings: 1,
    rain: 127,
    snow: 28,
    sun: 84,
  },
  {
    name: "New York",
    country: "USA",
    time: -5,
    daylightSavings: 1,
    rain: 125,
    snow: 11,
    sun: 107,
  },
  {
    name: "Alaska",
    country: "USA",
    time: -9,
    daylightSavings: 1,
    rain: 115,
    snow: 47,
    sun: 126,
  },

  // Mexico
  {
    name: "Mexico City",
    country: "Mexico",
    time: -6,
    daylightSavings: 1,
    rain: 64,
    snow: 0,
    sun: 301,
  },
  {
    name: "Puerto Vallarta",
    country: "Mexico",
    time: -5,
    daylightSavings: 1,
    rain: 95,
    snow: 0,
    sun: 270,
  },

  // Brazil
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    time: -3,
    daylightSavings: 1,
    rain: 93,
    snow: 0,
    sun: 218,
  },
  {
    name: "Sao Paulo",
    country: "Brazil",
    time: -3,
    daylightSavings: 1,
    rain: 107,
    snow: 0,
    sun: 200,
  },
  {
    name: "Manaus",
    country: "Brazil",
    time: -4,
    daylightSavings: 1,
    rain: 160,
    snow: 0,
    sun: 182,
  },

  // South America
  // Argentina
  {
    name: "Cordoba",
    country: "Argentina",
    time: -3,
    daylightSavings: 1,
    rain: 82,
    snow: 1,
    sun: 282,
  },
  //Peru
  {
    name: "Lima",
    country: "Peru",
    time: -5,
    daylightSavings: 1,
    rain: 60,
    snow: 0,
    sun: 316,
  },
  // Venezuela
  {
    name: "Caracas",
    country: "Venezuela",
    time: -4,
    daylightSavings: 1,
    rain: 100,
    snow: 0,
    sun: 265,
  },

  // Europe
  // Germany
  {
    name: "Berlin",
    country: "Germany",
    time: +2,
    daylightSavings: 1,
    rain: 106,
    snow: 40,
    sun: 162,
  },
  // France
  {
    name: "Paris",
    country: "France",
    time: +2,
    daylightSavings: 1,
    rain: 111,
    snow: 2.4,
    sun: 166,
  },
  // Italy
  {
    name: "Rome",
    country: "Italy",
    time: +2,
    daylightSavings: 1,
    rain: 78,
    snow: 0,
    sun: 225,
  },
  // Spain
  {
    name: "Madrid",
    country: "Spain",
    time: +2,
    daylightSavings: 1,
    rain: 63,
    snow: 0,
    sun: 276,
  },
  // Ukraine
  {
    name: "Kyiv",
    country: "Ukraine",
    time: +3,
    daylightSavings: 1,
    rain: 195,
    snow: 61,
    sun: 184,
  },
  // Norway
  {
    name: "Oslo",
    country: "Norway",
    time: +2,
    daylightSavings: 1,
    rain: 172,
    snow: 71,
    sun: 192,
  },
  // United Kingdom
  {
    name: "London",
    country: "United Kingdom",
    time: +2,
    daylightSavings: 1,
    rain: 110,
    snow: 16,
    sun: 148,
  },
  {
    name: "Cambridge",
    country: "United Kingdom",
    time: +0,
    daylightSavings: 1,
    rain: 108,
    snow: 2,
    sun: 149,
  },
  // Ireland
  {
    name: "Dublin",
    country: "Ireland",
    time: +1,
    daylightSavings: 1,
    rain: 191,
    snow: 17,
    sun: 142,
  },

  // Asia
  // China
  {
    name: "Beijing",
    country: "China",
    time: +8,
    daylightSavings: 1,
    rain: 46,
    snow: 6,
    sun: 274,
  },
  // Japan
  {
    name: "Tokyo",
    country: "Japan",
    time: +9,
    daylightSavings: 1,
    rain: 101,
    snow: 5,
    sun: 188,
  },
  // South Korea
  {
    name: "Seoul",
    country: "South Korea",
    time: +9,
    daylightSavings: 1,
    rain: 107,
    snow: 20,
    sun: 258,
  },
  // India
  {
    name: "Mumbai",
    country: "India",
    time: +5,
    minute: 30,
    daylightSavings: 1,
    rain: 90,
    snow: 0,
    sun: 258,
  },
  // Saudi Arabia
  {
    name: "Mecca",
    country: "Saudi Arabia",
    time: +3,
    daylightSavings: 1,
    rain: 10,
    snow: 0,
    sun: 355,
  },
  // Iran
  {
    name: "Tehran",
    country: "Iran",
    time: +4,
    minute: 30,
    daylightSavings: 1,
    rain: 61,
    snow: 2,
    sun: 304,
  },
  // Israel
  {
    name: "Jerusalem",
    country: "Israel",
    time: +3,
    daylightSavings: 1,
    rain: 41,
    snow: 0,
    sun: 324,
  },

  // Africa

  // Ethiopia
  {
    name: "Addis Ababa",
    country: "Ethiopia",
    time: +3,
    daylightSavings: 1,
    rain: 104,
    snow: 0,
    sun: 261,
  },
  // South Africa
  {
    name: "Cape Town",
    country: "South Africa",
    time: +2,
    daylightSavings: 1,
    rain: 103,
    snow: 2,
    sun: 262,
  },
  // Egypt
  {
    name: "Cairo",
    country: "Egypt",
    time: +2,
    daylightSavings: 1,
    rain: 17,
    snow: 0,
    sun: 348,
  },
  // Nigeria
  {
    name: "Lagos",
    country: "Nigeria",
    time: +1,
    daylightSavings: 1,
    rain: 130,
    snow: 1,
    sun: 235,
  },

  // Australia
  {
    name: "Sydney",
    country: "Australia",
    time: +10,
    daylightSavings: 1,
    rain: 95,
    snow: 0,
    sun: 262,
  },
  {
    name: "Perth",
    country: "Australia",
    time: +8,
    daylightSavings: 1,
    rain: 79,
    snow: 0,
    sun: 321,
  },
  // New Zealand
  {
    name: "Wellington",
    country: "New Zealand",
    time: +12,
    daylightSavings: 1,
    rain: 122,
    snow: 0,
    sun: 211,
  },
];

const player = {
  w: 25,
  h: 25,
  x: Math.floor(Math.random() * 245) + 1,
  y: 123,
  speed: 1,
  dx: 0,
  dy: 0,
};

const bed = {
  w: 50,
  h: 60,
  x: 5,
  y: 90,
};

const food = {
  w: 50,
  h: 60,
  x: 245,
  y: 90,
};

const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
w = 600;
h = 360;
const playerImage = document.querySelector(".player");
const bedImage = document.querySelector(".bed");
const foodImage = document.querySelector(".food");
let nftName = "Yellowknife";
let weatherCalled = false;
let snows;
let rains;
let raining = true;
let snowing = true;
let sunny = true;
let dayTime = true;

function rain() {
  if (raining == true) {
    console.log("rain got called");

    function init() {
      rains = [];
      for (let i = 0; i < 500; i++) {
        rains.push(new Rain());
      }
      animationLoop();
    }

    function animationLoop() {
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      for (let i = 0; i < rains.length; i++) {
        rains[i].update();
        rains[i].draw();
      }
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    class Rain {
      constructor() {
        this.reset();
        this.rgb = "52, 235, 236";
      }
      reset() {
        this.x = getRandomInt(0, w);
        this.xc = (this.x - w / 2) / (w / 2) / 2;
        this.y = getRandomInt(-(h * 0.3), h);
        this.yc = getRandomInt(10, 15) / 10;
        this.size = getRandomInt(5, 11) / 10;
        this.a = getRandomInt(-5, 0) / 10;
        this.ac = getRandomInt(1, 3) / 100;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
      }
      update() {
        this.x += this.xc;
        this.y += this.yc;
        this.a += this.ac;
        if (this.a > 2) {
          this.ac *= -1;
        } else if (this.a < 0 && this.ac < 0) {
          this.reset();
        }
      }
    }
  }
  window.addEventListener("DOMContentLoaded", init);
}

// snow();
function snow() {
  if (snowing == true) {
    console.log("snow got called");
    function init() {
      snows = [];
      for (let i = 0; i < 500; i++) {
        snows.push(new Snow());
      }
      animationLoop();
    }

    function animationLoop() {
      drawScene();
      requestAnimationFrame(animationLoop);
    }

    function drawScene() {
      for (let i = 0; i < snows.length; i++) {
        snows[i].update();
        snows[i].draw();
      }
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    class Snow {
      constructor() {
        this.reset();
        this.rgb = "52, 235, 236";
      }
      reset() {
        this.x = getRandomInt(0, w);
        this.xc = (this.x - w / 2) / (w / 2) / 2;
        this.y = getRandomInt(-(h * 0.3), h);
        this.yc = getRandomInt(10, 15) / 10;
        this.size = getRandomInt(5, 11) / 10;
        this.a = getRandomInt(-5, 0) / 10;
        this.ac = getRandomInt(1, 3) / 100;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
      }
      update() {
        this.x += this.xc;
        this.y += this.yc;
        this.a += this.ac;
        if (this.a > 2) {
          this.ac *= -1;
        } else if (this.a < 0 && this.ac < 0) {
          this.reset();
        }
      }
    }
  }

  window.addEventListener("DOMContentLoaded", init);
}

const index = Countries.findIndex((object) => {
  return object.name === nftName;
});

// create random numbers
const ranNums = {
  eat: Math.floor(Math.random() * 60) + 1,
  sleep: Math.floor(Math.random() * 60) + 1,
};
// clear function
function clear() {
  ctx.clearRect(0, 80, 300, 70);
  ctx.clearRect(0, 0, 300, 15);
  ctx.clearRect(0, 0, 600, 360);
  ctx.beginPath();
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function weather() {
  let chance = Math.floor(Math.random() * 365) + 1;
  let rainChance = Countries[index].rain - Countries[index].snow;
  if (chance < rainChance) {
    // snow();
    console.log(chance + " < " + rainChance);
    console.log("Raining");
    rain();

    rain = true;
    snow = false;
    sunny = false;
  } else if (
    chance > rainChance &&
    chance < rainChance + Countries[index].snow
  ) {
    // snow();
    console.log(
      chance +
        " > " +
        rainChance +
        "&&" +
        chance +
        " < " +
        rainChance +
        Countries[index].snow
    );
    console.log("Snowing");
    snow();

    snowing = true;

    sunny = false;
    raining = false;
  } else if (
    chance > rainChance &&
    chance > rainChance + Countries[index].snow
  ) {
    console.log("Sunny");
    console.log(
      chance +
        " > " +
        rainChance +
        " && " +
        chance +
        " > " +
        (rainChance + Countries[index].snow)
    );

    sunny = true;
    snowing = false;
    raining = false;
  }
}

// function weather() {
//   rain();
// }
// name: "Perth",
// country: "Australia",
// time: +8,
// daylightSavings: 1,rain: 79,
// snow: 5,
// sun: 321.2,
weather();

// if (raining == true) {
//   console.log("raining is true");
//   snow();
// }
// if (snowing == true) {
//   console.log("snowing is true");

//   snow();
// }
// if (sunny == true) {
//   console.log("sunny is true");

//   snow();
// }
// draw functions

function drawPlayer() {
  ctx.drawImage(playerImage, player.x, player.y, player.w, player.h);
}

function drawBed() {
  ctx.drawImage(bedImage, bed.x, bed.y, bed.w, bed.h);
}

function drawFood() {
  ctx.drawImage(foodImage, food.x, food.y, food.w, food.h);
}

// game related functions
function loadEverything() {
  function time() {
    let date = new Date();
    let currentHour = date.getUTCHours() + Countries[index].time;
    let currentMinute = 0;
    let currentSecond = date.getUTCSeconds();
    let milliseconds = date.getUTCMilliseconds();
    if (
      Countries[index].name == "Tehran" ||
      Countries[index].name == "Mumbai"
    ) {
      currentMinute = date.getUTCMinutes() + Countries[index].minute;
    } else {
      currentMinute = date.getUTCMinutes();
    }

    //set daytime variable
    if (currentHour < 19 && currentHour > 7) {
      dayTime = true;
    } else {
      dayTime = false;
    }

    // if (currentSecond % 3 == 0 && milliseconds <= 16.6) {
    //   if (currentSecond > 40 && currentSecond < 43) {
    //     weatherCalled = false;
    //     if (weatherCalled == false) {
    //       weatherCalled = true;
    //       weather();
    //     }
    //   }
    //   if (weatherCalled == false) {
    //     weatherCalled = true;
    //     weather();
    //   }
    // }
    let time = currentHour + ":" + currentMinute + ":" + currentSecond;
    ctx.fillText(time, canvas.width / 2 - 15, 10);
    // for testing
    ctx.fillText("player x: " + player.x, 10, 10);
  }

  // drawScene();
  time();

  clear();
  time();

  drawBed();
  drawFood();
  drawPlayer();

  newPos();
  bedCollision();
  foodCollision();

  waitForHunger();

  requestAnimationFrame(loadEverything);
}

//sky color
function defaultSky() {
  if (dayTime === true && raining === true) {
    canvas.style.background = "linear-gradient(#9BB9B8, #1F6064)";
  } else if (dayTime !== true && raining === true) {
    canvas.style.background = "linear-gradient(#272026, #000000)";
  } else if (dayTime === true && snowing === true) {
    canvas.style.background = "linear-gradient(#CCFFFD, #31C4BF)";
  } else if (dayTime !== true && snowing === true) {
    canvas.style.background = "linear-gradient(#320D3E, #100411)";
  } else if (dayTime === true && sunny === true) {
    canvas.style.background = "linear-gradient(#D3FFFF, #56E7E7)";
  } else if (dayTime !== true && sunny === true) {
    canvas.style.background = "linear-gradient(#320D3E, #100411)";
  }
}
defaultSky();

function newPos() {
  player.x += player.dx;
  detectWalls();
}

// buttons
function waitForHunger() {
  let date = new Date();
  let currentMinute = date.getMinutes();
  let currentSecond = date.getSeconds();
  if (currentMinute % 1 === 0) {
    // console.log("will be hungry at " + ranNums.eat + " seconds.");
    if (currentSecond === ranNums.eat) {
      console.log("I'm hungry");
      ctx.clearRect(0, 15, 300, 15);
      ctx.fillText("I'm Hungry ", 25, 25);
    }
  }
}

function sleepBtn() {
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
}

// collision detection
function bedCollision() {
  if (player.x > -1 && player.x <= 40) {
    ctx.beginPath();
    ctx.fillText("Bed!!!", 10, 89);
    ctx.stroke();
  }
}

function foodCollision() {
  if (player.x > 220 && player.x <= 275) {
    ctx.beginPath();
    ctx.fillText("Food!!!", 260, 89);
    ctx.stroke();
  }
}

function detectWalls() {
  if (player.x < 0) {
    player.x = 0;
  }

  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
}

// movement functions
function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  if (e.key === "ArrowRight" || e.key === "Right" || e.key === "d") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left" || e.key === "a") {
    moveLeft();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key === "d" ||
    e.key === "a"
  ) {
    player.dx = 0;
  }
}

document.addEventListener("click", (event) => {
  let bound = canvas.getBoundingClientRect();
  let x = event.clientX - bound.left - canvas.clientLeft;
  let y = event.clientY - bound.top - canvas.clientTop;
  //fill with functions for positional clicks
  console.log("got clicked X:" + x + " Y:" + y);
  // clickable positions
  function hungryClicked() {
    if (y >= 31 && y < 68 && x > 40 && x < 155) {
      console.log("tired clicked");
      ctx.clearRect(24, 14, 50, 20);
      // ctx.beginPath();
      // ctx.rect(24, 14, 50, 20);
      // ctx.stroke();
    }
  }
  hungryClicked();
});
loadEverything();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
// window.addEventListener("DOMContentLoaded", init);
