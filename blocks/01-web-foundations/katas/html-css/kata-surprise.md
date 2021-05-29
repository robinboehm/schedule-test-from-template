# Kata - Surprise

This kata will be tricky 🔥

- Look at this [codepen](https://codepen.io/nicokoenig/full/vgQXgL) and play around with it
- Recreate what you saw

Quick inspiration on what properties are needed here:
- transform
- transition
- opacity
- position

## Hints

You will need the `overflow` property to hide overflowing content.

```css
.surprise {
    overflow: hidden;
}
```

You will need to nest multiple elements in each other to create this kata.

```html
  <div class="surprise">
    <div class="part-one">
      <div class="part-two">
        <!-- Each part that appears in this kata is a single element -->
        ...
      </div>
    </div>
  </div>
```

Focus on each step, i.e. create a element that reveals another element when you hover it. Once this is done make the next step.

```html
<div class="surprise">
  <div class="part-two"></div>
</div>
```

```css
.surprise {
    height: 50vmin;
    width: 50vmin;
    overflow: hidden;
    position: relative;
    background-color: salmon;
}

.surprise:hover .part-two {
    transform: translateX(100%);
    opacity: 1;
}

.part-two {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lime;
    opacity: 0;
}

```