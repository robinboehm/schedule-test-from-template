# Lecture - Introduction to Programming with p5

- [Slides](https://docs.google.com/presentation/d/1ETf2JPlHnF6q3O66fdY91UHdfos6F2OoNx-kjmEmg2Q)
- [Example Solutions](https://editor.p5js.org/CodingBootcampsEu/collections/ZbK7bIT5n)

## Lexample Tasks

- [p5 Setup](#p5-setup)
- [First Sketch](#first-sketch)
- [Microsoft Logo](#microsoft-logo)
- [Eraser](#eraser)
- [Variables Refactoring](#variables-refactoring)
- [Fire Brush](#fire-brush)
- [Brush Refactoring](#brush-refactoring)
- [A Wild Paint Appears](#a-wild-paint-appears)
- [Comet](#comet)
- [Multiple Comets](#multiple-comets)
- [Random Comets](#random-comets)

### p5 Setup

- Go to [p5](https://editor.p5js.org/) and login with your GitHub account
- Open the p5 editor
- Press the play button
- Check if you can see a 400 x 400 canvas
- Open the [p5 reference](https://p5js.org/reference/) in the second tab

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/q7_T3ED3j)


### First Sketch

- Use the sketch from the previous task as starting point
- Change the dimensions of the canvas (i.e. make is wider and / or taller)
- Change the color of the background
- Log something to the console (i.e. "hello world" or "p5 whoop whoop!")

**Hints**

Add a `console.log()` to the `setup` and `draw` function to see how often the messages get logged to the console.

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/Hiv0IMM_R)

### Microsoft Logo

- Please create a new sketch
- Change the background of the canvas to white
- Recreate the microsoft logo
  - The logo is basically four colorful squares with a gutter
  - See logo in hints

**Hints**

The Microsoft logo looks like this.

![Microsoft Logo](assets/microsoft-logo.png)

You can use the following CSS color names: tomato, yellowgreen, skyblue, orange

You need to disable outlines for the Microsoft logo.

```js
  function setup() {
    noStroke();
  }
```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/kn648AesQ)

### Eraser

- Please use the sketch from the previous task
- Move the code that creates the Microsoft Logo into the setup function
  - The logo should be drawn once during setup of the sketch
- Draw a circle with the background color of the sketch at the current mouse position in the `draw` function
  - Only draw the circle when the mouse button is pressed

**Hints**

The `mouseIsPressed` variable indicates if the mouse is currently pressed.

```js
if(mouseIsPressed) {
  // draw circle
}
```

The `mouseX` and `mouseY` variables hold the current mouse position on the x and y axis.

```js
function draw() {
  console.log("MouseX is " + mouseX + " and mouseY is " + mouseY);  
}
```

**Bonus**

Use a random diameter for the circles.

```js
circle(mouseX, mouseY, random(30));
```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/50ujcQlRBn)


### Variables Refactoring

- Please use the sketch from the previous task
- Create global variables for
  - Canvas size
  - Background color of the canvas
  - Size of the squares of the microsoft logo
- Use the global variables instead of the values in your program

**Hints**

Global variables can be created with the `let` keyword.

Global variables need to be declared outside of functions.

```js
let canvasSize = 400;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

```

**Bonus**

Also create variables for the `x` and `y` coordinates of the squares, the gutter (space between squares).

Calculate the size of the squares based on the canvas size and gutter size.

> The idea is to change the appreance (dimension and spacing) of the logo only with changing single variables.

The example solution for the bonus can be found [here](https://editor.p5js.org/CodingBootcampsEu/sketches/GMlS1W6Ei).

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/ut4r4Uuyd)


### Fire Brush

- Start with a new p5 sketch
- Draw a circle when the mouse is pressed
- The diamter of the circle should be random between 10px and 30px
- Use the red, green, blue and alpha channel to define the fill color
  - The green and alpha channel of the color depends on the size of the circle
    - If the diameter is smaller than 20px
      - The green portion of the color should be 0
      - The opacity of the color should be between 10 and 40
    - If the diameter is larger or equal than 20px
      - The green portion of the color should be between 100 and 200
      - The opacity of the color should be between 40 and 70
  - The blue channel is always 0
  - The red channel is random between 200 and 255
- The x and y coordinate of the circle is based on the current mouse position but it also includes randomness from -20px to +20px


**Hints**

If statements are written like that.

```js
if(diameter < 20) {
  // do this
} else {
  // do that
}
```

```js
let randomX = mouseX + random(-20,20);
```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/DgOWR3Hvb)


### Brush Refactoring

- Use the sketch from the previous task
- Create a new function called `fireBrush()`
- Move the relevant code for the existing fire brush into the new function
- The `fireBrush()` function has a `x` and `y` parameter
- The `fireBrush()` function itself takes the original x and y coordinates of the mouse
  - `x` and `y` are randomized inside the function itself
- Call the the `fireBrush()` function inside the `draw()` function when the mouse is pressed

**Hints**

The anatomy of a function with parameters looks like that.

```js
function customFunction(parameter1, parameter2) {

}
```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/E7AxgZ-J6)

### A Wild Paint Appears

- Use the sketch from the previous task
- Create a new brush function called `iceBrush()`
  - Color
    - fill color is between `200` and `255` blue
    - no red and no green
    - opacity is between `0` and `100`
  - Shape
    - The first part of the brush is a large rect with a random width and height between `30px` and `40px` on the current mouse position
    - The second part of the brush is a small rect between `10px` and `20px` with a randomized x and y position
      - The random position is between -10px and +10px of the current mouse position
- Implement a switch between the different brushes
  - Use a global variable for that
  - press `f` to switch to the fire brush
  - press `i` to switch to the ice brush

> You still only draw when the mouse is pressed 💡

**Hints**

The switch between the different brushes can be done with a `if-else` statement or with a `switch-case` statement.

***Bonus***

Create a eraser brush as well. Any other key pressed than `i` or `f` will switch to the erase brush.

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/0Jpk0M3j1)

### Comet

- Start with a new p5 sketch
- Use a dark background
- Draw a comet (circle) which moves from the top left corner to the bottom right corner
- If the comect reaches the edge of the canvas it should start from the top left corner again
 
**Hints**

You can use global variables to save the current position of the comet which can be incremented in the `draw()` function.

```js
let posX = 0;

function draw() {
  circle(posX, 100, 30);
  posX = posX + 1;
}
```

**Bonus**

The comet should get bigger while it moves through the canvas.

The comet should have a fading tail.

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/-5VqLsScn)

### Multiple Comets

- Use the sketch from the previous task
- You will now display two comets that move on the canvas
- Use objects to store the `x` and `y` coordinates of the comet
  - Also store a `diamter` and `velocity` (speed) variable for each comet
- Create a `renderComet(comet)` function that takes a comet as the parameter
  - The function will draw the comet and update the coordinates
  - Use the `velocity` variable to update the position
 
**Hints**

```js

let comet1 = { x: 1, y: 2, velocity: 2 };

function draw() {
  renderComet(comet1);
  // update second comet
}

function renderComet(comet) {
  // update comet coordinates
  comet.x = comet.x + comet.velocity;
  
  // draw comet
  circle(...);
  
  // calculate if comet is outside of canvas
  ...
}

```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/KZKOwwQY9)


### Random Comets

- Use the sketch from the previous task
- Create a function that will create a new random comet
  - Random `x` (between 0 and canvas width) and `y` (between 0 and half canvas height)
  - Random Diameter
  - Random Velocity
- All comets should be stored in a global array
- Create a random number comets on startup (between 4 and 8)
- Update all comets in the draw function using a loop
- Reset `x` and `y` to a random value (according to the initial requirements) when comet leaves canvas

**Hints**

```js
function createRandomComet() {
  let newComet = { x: random(..., ...), ... };
  return newComet;
}
```

Not all keys must be created upon object creation.

```js
// Create empty object
let newComet = {};

// Create keys / properties afterwards
newComet.x = 0;
newComet.y = 0;
```

**Example Solution**

- [Example solution](https://editor.p5js.org/CodingBootcampsEu/sketches/s__inljdW)


