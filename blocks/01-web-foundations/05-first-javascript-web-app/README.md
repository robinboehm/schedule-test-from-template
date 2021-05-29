# Lecture - First JavaScript Web App

- [Slides](https://docs.google.com/presentation/d/17l5_-J0EB-0DyGPAGamW8o1-ygo4Ia6L3U9kNTDrMYs)
- [GitHub respository of the lexample solution](https://github.com/coding-bootcamps-eu/lexample-coulette)

## Lexample Tasks

- [Add JavaScript](#add-javascript)
- [Toggle Background Color](#toggle-background-color)
- [Random Color](#random-color)
- [Save Color](#save-color)
- [Duplicate Check](#duplicate-check)
- [Disable Save Button](#disable-save-button)
- [Delete Color](#delete-color)
- [Persist Colors in LocalStorage](#persist-colors-in-localstorage)

### Add JavaScript

- Create a new HTML document for coulette
  - Add a `header` and a `h1`
- Create a stylesheet and link it to the new document
- Create a js file and link it to the new document
  - The script should be included at the end of the body
- Log "Welcome to Coulette" to the console in your script file

**Example Solution**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/add-javascript/) for this task

### Toggle Background Color

- Add a `button` with the text `Change Color` to the header
- Add an event listener for the `click` event to your button in the header
  - Use the button to toggle the background color of the header between a color of your choice and the default color

**Hints**

Change background color.

```js
const color = "hotpink";
const header = document.querySelector("header");
header.style.backgroundColor = color;
```

Get current background color of element.

```js
const header = document.querySelector("header");
const currentBackgroundColor = header.style.backgroundColor.toLowerCase();
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/toggle-background-color/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/add-javascript...toggle-background-color)


### Bonus Task: Create multiple buttons for colors ### 

*Only use this if you have spare time to fill up before the next lesson* 

Create more than one button that allows us to set the color.
You can add a color for the colors: `green`, `yellow` and `red`.

Try to use a function with a paramenter

```js
function setColor(color) {
 // .. write the code - you can do it ;) 
}
```

### Random Color

- Change the text of the button to "Generate Color"
- Add a paragraph that should display a generated color value
- Change the implementation of the button handler to now
  - Generate a new random color with the provided code
  - Set the generated color value as the background color of the header
  - Set the color as the text of the paragraph
- Initially generate a random color when entering coulette

Use the following code to generate a random color.

```js
/**
 * Toggle color of header
 * Generate random number between min and max
 */
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

/**
 * Generate random hex number for color
 */
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Generate random hex color
 */
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/random-color/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/toggle-background-color...random-color)

### Save Color

- Add a new button "Save Color"
- Add a main section for a list of colors
  - Use a unsorted list for this
- Register an event listener on `click` for the save button
- Implement a function for the click event that ...
  - read the current generated hex value from the header area
  - Create a new `li` element using `document.createElement`
  - Set the correct properties for the new element
  - Append the new element to the list of colors


```html
<main>
  <ul id="colors"></ul>
</main>
```




**Hints**

- With more than one button the buttons will need an own `id`

**Read the current colorvalue**
```js
const colorValueEl = document.querySelector("#colorValue");
const color = colorValueEl.innerText;
```

**How to add an list element to a list**
```js
const newColor = document.createElement("li");
// TODO: Set the properties of newcolor e.g. background-color and content
colorList.appendChild(newColor);
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/save-color/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/random-color...save-color)

### Duplicate Check

In this task we'll add a check for duplicate entries in the list of colors.
This task aims to get used to the use of [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
So we'll add all the colors to a list and check if the current color is already part of it.

- Add a global variable `colors` that initialized with an empty array
- Add a global variable `currentColor` and initialize it with `null`

**When you generate a new color**
- Set the `currentColor` always to the last generated color

**When the save button is pressed** 
- Use the [Array.include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) function to check of the `currentColor` is not included in the `colors` array
- If not use [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) to add the `currentColor` to the list of `colors`


**Hints**

**Create an Array** 
```js
const colors = [];
```

**Inverse a condition** 
```js
let name = "JS";
// Check if the name is NOT JS
if(name != JS) {}

// Check if an array of name NOT contain a specific name
if (!names.includes(name)) {}
```



**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/duplicate-check/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/save-color...duplicate-check)

### Disable Save Button

- Create a new function `updateSaveButtonStatus` for the following
- Use [Array.include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) to check if the `currentColor` is already added
- If yes use [Element.setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) to set `disabled` to the element
- If not use [Element.removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) to remove `disabled`
- Call the function at the initialization of the script and on every save 

**Hints**
Disabled need no value so you can use it with an empty string

```js
saveButton.setAttribute("disabled", "");
// or
saveButton.removeAttribute("disabled");
```

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/disable-save-button/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/duplicate-check...disable-save-button)

### Delete Color

Add a button that deletes a saved color in your `ul` list.
Take a look in the example solution but not in the code.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/delete-color/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/disable-save-button...delete-color)

### Persist Colors In LocalStorage

Save your color list in the local storage. When you reload the website the colors should be loaded from the local storage again.

**Example Solution and Comparison**

- [Example solution](https://codesandbox.io/s/github/coding-bootcamps-eu/lexample-coulette/blob/persist-colors-in-localstorage/) for this task
- [Comparison to previous task](https://github.com/coding-bootcamps-eu/lexample-coulette/compare/delete-color...persist-colors-in-localstorage)
