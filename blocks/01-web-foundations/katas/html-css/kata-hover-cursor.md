# Kata - Hover Cursor

- Look at this [codepen](https://codepen.io/nicokoenig/full/yLgvZvm
) and play around with it
- Recreate what you saw

Quick inspiration on what properties are needed here:
- transform
- transition
- opacity
- position
- flexbox
- selector combinators

## Hints

Use one primary element that contains the circle and the arrow elements.

```html
<div class="cursor-hover">
  <div class="left-cusor">...</div>
  <div class="top-cusor">...</div>
  <div class="right-cusor">...</div>
  <div class="bottom-cusor">...</div>
  <div class="circle"></div>
</div>
```

The nesting and order of elements is key to solve this kata because you will need the adjacent sibling combinator.

```css
.left-cursor:hover .circle {
 /* move circle with translate */
}
```


