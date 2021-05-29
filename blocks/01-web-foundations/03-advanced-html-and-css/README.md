# Lecture - Advanced HTML & CSS

- [Slides](https://docs.google.com/presentation/d/1lyDQ-qLR6xBzG20i3UNx4QnqK0Ct2Kr2jSRzSvYl5mY)
- [GitHub respository of the lexample solution](https://github.com/coding-bootcamps-eu/lexample-cv)

> The example solutions holds commits of two lectures ("Basics of HTML and CSS" and "Advanced HTML and CSS") 💡

> Please make single commits for each task during this lecture 💡

## Lexample Tasks

- [Flexbox](#flexbox)
- [Background](#background)
- [Custom Properties](#custom-properties)
- [Transitions](#transitions)
- [Transform](#transform)
- [Grid](#grid)


### Flexbox

__Navigation__

- Use a flexbox for the navigation in the site header
- Display all navigation links vertically by default
- Starting with the medium breakpoint (`768px`) display the navigations links horizontally

__Experiences__

- Use a flexbox for the headings of each job / experience
- Display the job title and the time span vertically by default
- Beginning with the medium breakpoint display the job title on the left side and the time span on the right side

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/flexbox/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/media-queries...flexbox)

### Background

__Header__

- Add a gradient in the site header of your cv
- Please ensure readability of your text and links within the header

__Footer__

- Add a footer to your cv
- Add a text to the footer, i.e. "Did you like my CV? Contact me"
- Give the footer a background color or a gradient

**Bonus**

Use a color from your header or footer for the separation lines (border of main articles) within your main content.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/background/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/flexbox...background)

### Custom Properties

- Replace all your colors with custom properties

**Hints**

```css
body {
  --main-color: red;
}

h1 {
  border: 2px solid var(--main-color);
}
```

**Bonus**

Add a media query that changes the colors of your cv based on the color scheme preferences of the visitor.

```css
body {
  --page-background-color: white;
  --page-text-color: black;
}

@media screen and (prefers-color-scheme: dark) {
  body {
    --page-background-color: black;
    --page-text-color: white;
  }
}
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/custom-properties/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/background...custom-properties)

### Transitions

- Add a transition for the `background-color` for the nav links
  - If your nav links don't have a background color use one or use the transition with another property (i.e. `color`)
- Add a pseudo class for the `focus` state of the nav links (which then also can use the transition)

**Hints**

```css
.nav-link:focus {
  ...
}
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/transitions/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/custom-properties...transitions)

### Transform

- Increase the the hire me badge with a transform function (`scale()`) when the header is hovered
- Use a transition to animate the change of the hire me badge

**Hints**

```css
.header:hover .hire-me {
  ...
}
```

**Bonus** 

Use the `:focus-within` pseudo class to also transform the hire me badge.

```css

.header:focus-within .hire-me {
  transform: scale(1.5);
}

```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/transform/) for this task.
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/transitions...transform)

### Grid

- Use a two column layout using the grid for each article of the main content beginning with the medium breakpoint (`768px`)

**Hints**

Use a shard class selector for each article of your main content. 

Create a grid with `display: grid`.

```css
.main-article {
  display: grid;
}
```

The columns of a grid can be defined with the `grid-template-columns` property.

Use the `fr` unit to define the grid columns.

Because every child element of the grid container will be layouted inside the grid it may be necessary to add a generic wrapper element around the content of an article.

```html
<article class="article-grid">
  <h2>...</h2>
  <div class="content-wrapper">
    <section>...</section>
    <section>...</section>
  </div>
</article>
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/grid/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/transform..grid)




