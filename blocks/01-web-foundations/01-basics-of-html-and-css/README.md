# Lecture - Basics of HTML & CSS

- [Slides](https://docs.google.com/presentation/d/1cGmGr6g-wEpr4_156hu9lIQyBs18XtaaGmZVf5lrGo0)
- [GitHub respository of the lexample solution](https://github.com/coding-bootcamps-eu/lexample-cv)

> The example solutions holds commits of two lectures ("Basics of HTML and CSS" and "Advanced HTML and CSS") 💡

## Lexample Tasks

- [CV Setup](#cv-setup)
- [Basic Structure](#basic-structure)
- [Sub Headings and Text Content](#sub-headings-and-text-content)
- [Navigation](#navigation)
- [Lists](#lists)
- [Basic Styling](#basic-styling)
- [Styling with Combinators and Pseudo-Classes](#styling-with-combinators-and-pseudo-classes)
- [Styling with Pseudo-Elements](#styling-with-pseudo-elements)
- [Cascade, Inheritance and Normalize](#cascade-inheritance-and-normalize)
- [Display Property](#display-property)
- [Position](#position)
- [Length Units](#length-units)
- [Media Queries](#media-queries)

### CV Setup

- Create a new folder for this lexample on your computer
- Create the file `index.html`
- Open the `index.html` in Visual Studio Code
- Create a basic HTML5 sekleton (you can use the emmet command for that)
- Add a meta tag for the description
- Add a meta tag for the author
- Add a meaningful title
- Ensure that your code also includes
  - the meta tag for the charset `<meta charset="UTF-8" />`
  - the meta tag for the viewport `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- Use the Live Serer Extension of VSCode to serve and open the `index.html` in your browser

**Hints**

The basic HTML skeleton created by the HTML5 emmet command looks like this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

**Bonus**

Open the browser dev tools and view your cv in the mobile emulation. Toggle (remove or add) the viewport meta tag and see how your cv behaves in the mobile emulation.

**Example Solution**

[Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/cv-setup/) for this task.

### Basic Structure

In this task we will create the basic structure of the document.

- Add a header that contains the main heading of the document
- Add a main element
- The main element should be structured like this
  - Include articles with a heading for your
    - profile
    - experiences
    - skills
    - contact
- Add two previous jobs / experiences to the experiences article
  - Each experience should have it's own heading
- Add sections within the skills article for soft and technical skills
  - Each article should have it's own heading

**Hints**

Please ensure that you don't skip heading levels.

The `<article>` element can be used to structure your main content.

Content within each main article can be represented with the `<section>` element.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/basic-structure/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/cv-setup...basic-structure)

### Sub-Headings and Text Content

- Add a paragraph as the sub heading inside your main header
  - The sub header should state what your are (job, profession, future profession)
- Add a short introduction to yourself in the profile article
- Refactor the headings of your previous jobs / experiences
  - Add a sub heading (using a `<p>` element) that states the time span of the job / experience
  - Add the heading and sub heading of the experience in a `<header>` tag
- Add a descrition for each experience
  - You can initially use filler text ([hipster ipsum](https://hipsum.co/), [kraut ipsum](https://krautipsum.com) or the `lorem` emmet of VSCode) to fill the gaps

**Hints**

- You can use multiple `<p>` tags for longer texts

**Bonus**

- Use semantic tags (i.e. `<i>` or `<strong>`) to point out what makes you special
  ...

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/sub-headings-and-text-content/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/basic-structure...sub-headings-and-text-content)

### Navigation

- Add a navigation inside the header
  - Add IDs for each article of your main content
  - Use the IDs to create a inline navigation

**Hints**

IDs can be used to create inline navigation within a document.

```html
<a href="#profile">Profile</a>

...

<article id="profile">...</profile>
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/navigation/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/sub-headings-and-text-content...navigation)

### Lists

In this task you will create content using lists for the skills and contact section.

- Add a list of your soft and technical skills
  - Please add at least three list items for each list
- Add a list of possible contact options
  - Order the options according your preference

**Hints**

You can use anchor links that will open an email client

```html
<a href="mailto:robin@batman.com">Email</a>
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/lists/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/navigation...lists)

### Basic Styling

- Create a new CSS file and link it to your document

**General Styling**

- Create a global box sizing that uses `box-sizing: border-box`
- Remove the default margin from the `<body>` element
  - Set it to `0` or `0px` (both means the same)
- Change the fonts of your document
  - Define a default font for your document
  - Define a different font for all heading elements

**Specific Styling**

- Specific Styling should be based on classes
- Add a `padding` to the header and main element within the body
  - Use a padding value that looks good to you but use at least `16px`
- Style the overall header (the one in the body) of the document like this
  - Align the text in the center using `text-align: center`
  - Use a `background-color` for the header
  - Use a `padding` within the header to create more room for the document title

**Hints**

You can use [Google Fonts](https://fonts.google.com/) to load external fonts into your document.

Use general selectors (like the tag or universal selector) for general styling (i.e. all headings should use this font) and use classes for more specific styling.

You can use pre defined CSS colors i.e. `salmon`, `hotpink` or `lemonchiffon`. Other colors can be found [here])https://htmlcolorcodes.com/color-names/).

A selector list can help you to change styles for a list of elements.

```css
h1,
h2,
h3 {
  color: dodgerblue;
}
```

**Bonus**

Use the two value padding shorthand to use different values for vertical and horizontal padding.

```css
.header {
  padding: 48px 16px;
}
```

The content gets hard to read when the screen is too wide. You can use a `max-width` for the main element and center it using the margin.

```css
.main {
  max-width: 800px;
  margin: 0 auto;
}
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/basic-styling/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/lists...basic-styling)

### Styling with Combinators and Pseudo-Classes

- Add spacing between the different areas of your main content
- Add styling to the navigation links
  - Add spacing between the navigation links
  - Add a general color for the navigation links
  - Add specific styling for the `:hover` and `:active` state (i.e. different color or background color)
- Use the `border` property to draw a line over each article of the main content execept for the first one

**Hints**

The Lobotomized Owl selector `* + *` can be useful for some of the current requirements.

Specific sides of the border box can be style using the `border-top`, `border-bottom`, `border-left` or `border-right` properties.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/styling-with-combinators-and-pseudo-classes/) for this task.
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/basic-styling...styling-with-combinators-and-pseudo-classes)

### Styling with Pseudo-Elements

- Change the selection style of the document
  - Use a different background color and / or color
- Use the `::after` pseudo element of the profession subheading to display a emoji best describing you or your professional you

**Hints**

You can use [emojicopy](https://www.emojicopy.com/) to if you have no emoji keyboard on your computer.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/styling-with-pseudo-elements/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/styling-with-combinators-and-pseudo-classes...styling-with-pseudo-elements)

### Cascade, Inheritance and Normalize

- The general font family should be inherited from the `<html>` element
- Add normalize.css as an external CSS file to your document
  - You can use `unpkg` to load normalize.css (see hints)
- Validate if your current CSS uses
  - tag or universal for general styling
  - classes for specific styling

**Hints**

Make sure that normalize.css is loaded before your CSS file.

The normalize.css can be loaded from unpkg.com.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/normalize.css@8.0.1/normalize.css"
/>
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/cascade-inheritance-and-normalize/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/styling-with-pseudo-elements...cascade-inheritance-and-normalize)

### Display Property

- Use the `display` property to show the experience heading and sub heading in one line

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/display-property/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/cascade-inheritance-and-normalize...display-property)

### Position

- Display the headings of the main articles slightly more offset to the left
- Add a "Hire Me" badge inside the header that is placed absolutely in the top right corner of the header

**Hints**

The badge could use an `aside` element.

You may increase the `top-padding` inside the header so that the badge has room to breathe.

**Bonus**

You can add a `padding` to the left and right side to every `<article>` inside `<main>` to still make it look well aligned.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/position/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/display-property...position)

### Length Units

**Pixel to REM**

- Define a root font size for the `<html>` element
  - `16px` is the default font size but feel tree to try something else
- Replace all other `px` values within your CSS with rem values

**Header Refacoring**

- Enclose the title (`<h1>`) and profession (`<p>`) of the header in a generic html element
- Give that enclosing element a `rem` based font size (it should be big)
- Use relative sizing using the `em` unit for the title and profession
  - The title (`<h1>`) should have the same size as the parent element
  - The profession (`<p>`) should be 25% of the size

**Main Content**

- Use the `ch` unit to limit the `max-width` of the main content
  - Experiment with the `max-width` to get a good reading experience

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/length-units/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/position...length-units)

### Media Queries

- Introduce breakpoints for medium and large screens
  - You can use `786px` as medium breakpoint and `992px`as large breakpoint (both values are based on bootstrap)
  - You can as well make up your own breakpoints
- Increase the overall font size at both breakpoints
- Use fixed position for the "Hire Me" badge beginning with the large breakpoint
- Hide the navigation and "Hire Me" badge for printers
- Increase the spacing between the main articles beginning with the medium break point

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-cv/blob/media-queries/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-cv/compare/length-units...media-queries)