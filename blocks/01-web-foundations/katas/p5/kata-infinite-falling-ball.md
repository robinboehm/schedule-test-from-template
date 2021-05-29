# Kata - Infinite Falling Ball

- Create a sketch that displays ball that falls from the top to the bottom [this](https://editor.p5js.org/CodingBootcampsEu/full/VI_mM9zm4)
  - When the ball reaches the bottom of the canvas it starts falling again from the top
  - Every time it starts to fall again from the top it increses the speed (1px faster each round)
- A minimal example solution can be found [here](https://editor.p5js.org/CodingBootcampsEu/sketches/VI_mM9zm4)

## Hints

Use a global variable `speed` to define the speed of the ball.

```js
let speed = 1;

function draw() {
  // other stuff

  // if ball reaches the end
  // reset the ball position
  // increase speed
  speed = speed + 1;
}
```

## Bonus

Use the increment operator `++` to increase the speed.

```js
let speed = 1;

// The ++ operator adds 1 to a number variable
// speed = speed + 1;
speed++;
```

Use the `mousePressed()` function to reset the speed of the ball when it gets to fast.

```js
function mousePressed() {
  speed = 1;
}
```
