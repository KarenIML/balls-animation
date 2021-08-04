var container = {
  x: 0,
  y: 0,
  width: 800,
  height: 300,
};
const totalBalls = 1000;

balls = [];
//create the array of balls that will be animated
for (let i = 0; i < totalBalls; i++) {
  const x = Math.floor(Math.random() * (800 - 0)) + 0;
  const y = Math.floor(Math.random() * (500 - 0)) + 0;
  const r = Math.floor(Math.random() * (10 - 2)) + 2;
  const color = Math.floor(Math.random() * (255 - 0)) + 0;

  const vx = Math.floor(Math.random() * (20 - 8)) + 8;
  const vy = Math.floor(Math.random() * (15 - 8)) + 8;

  let ball = document.createElement("div");
  ball.className = "ball";
  ball.style.background = "hsl(" + color + ", 100%, 50%)";
  ball.style.width = 20 + "px";
  ball.style.height = 20 + "px";
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  document.body.appendChild(ball);

  balls.push({
    x,
    y,
    r,
    vx,
    vy,
    color,
    ball,
  });
}

function animateBalls() {
  for (var i = 0; i < balls.length; i++) {
    let ballElement = balls[i];
    if (
      ballElement.x - ballElement.r + ballElement.vx < container.x ||
      ballElement.x + ballElement.r + ballElement.vx >
        container.x + container.width
    ) {
      ballElement.vx = -ballElement.vx;
    }

    if (
      ballElement.y + ballElement.r + ballElement.vy >
        container.y + container.height ||
      ballElement.y - ballElement.r + ballElement.vy < container.y
    ) {
      ballElement.vy = -ballElement.vy;
    }

    ballElement.x += ballElement.vx;
    ballElement.y += ballElement.vy;
    ballElement.color = ballElement.color++;
    ballElement.ball.style.left = ballElement.x + "px";
    ballElement.ball.style.top = ballElement.y + "px";
    ballElement.ball.style.background =
      "hsl(" + ballElement.color++ + ", 100%, 50%)";
  }
}

function updateColor() {
  for (var i = 0; i < balls.length; i++) {
    let ballElement = balls[i];
    ballElement.ball.style.background =
      "hsl(" + ballElement.color++ + ", 100%, 50%)";
  }
}

setInterval(updateColor, 20);
setInterval(animateBalls, 90);
