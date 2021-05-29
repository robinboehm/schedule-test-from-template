# Kata - Twin Brush

- Create a brush that draws two symmetrical shapes like [this](https://editor.p5js.org/CodingBootcampsEu/full/l5RF6_hFV)
- Set a random fill color during in `setup()` function
- Set a random fill color when the mouse is pressed
- A minimal example solution can be found [here](https://editor.p5js.org/CodingBootcampsEu/sketches/l5RF6_hFV)

## Bonus

The `mousePressed()` function is called by p5 every time the mouse is pressed.

```js
function mousePressed() {
  // set random fill color
}
```

Change the size of the brush (diamter) using the keyboard. If `+` is pressed the diameter is increased and if `-` is pressed the diameter is decreased. You can use the `keyPressed()` function for that. p5 will call the `keyPressed()` function.

```js
function keyPressed() {
  if(key === '+') {
    // increase diameter
  } else if (...) {
    // decrease diameter
  }
}
```
