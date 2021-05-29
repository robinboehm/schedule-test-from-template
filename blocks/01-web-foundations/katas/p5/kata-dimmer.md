# Kata - Mouse Coordinates

- Create a dimmer with p5 that looks like [this](https://editor.p5js.org/CodingBootcampsEu/full/SDK9mV-C6)
  - When you move the mouse over the canvas the background will from white to black when moving the mouse on the y axis
- The example solution can be found [here](https://editor.p5js.org/CodingBootcampsEu/sketches/SDK9mV-C6)

![Dimmer Demo](dimmer.gif)

## Hints

You can multiply a percentage value (i.e. `.5` for 50%) with the maximum value of a color space (0 = black, 255 = white).
```js
// this will draw a background at 50% of the black and white color space
background(255 * .5)
```

You can use the current mouse coordinates to calculate a percentage position a one axis.

```js
// mouse y / canvas width
mouseY / 400
```
