# Kata - Key Press Game

- Create a Key Press Game like [this](https://editor.p5js.org/CodingBootcampsEu/full/8SFu4OLrz)
- There is a count down while the game is active
- If the correct key is pressed the score is incremented
- If the wrong key is pressed the score is decremented
- Only accept keyboard input when the game is active
- When the game is over display a message
- A new game can be started when the mouse is pressed
- A minimal example solution can be found [here](https://editor.p5js.org/CodingBootcampsEu/sketches/8SFu4OLrz)

You can use this code to create a random letter for the game.

```js
// calling split() on a string will turn the string into
// an array of single letters
let requiredLetter = random("abcdefghijklmnopqrstuvwxyz".split(""));
```
