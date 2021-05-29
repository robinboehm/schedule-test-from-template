# Cypress

## Step by Step Setup Guide

You will need a NPM workspace to use cypress.

### src Folder

Move all your app source code into a `src` folder.

### Git Ignore

When you start to work with NPM and Git it's important to have a `.gitignore` file in your workspace.

Create a `.gitigore` either in VSCode or using the console `touch .gitignore`.

A predefined list of ignores can be found [here](https://github.com/github/gitignore/blob/master/Node.gitignore)-

### NPM Init

Init a new npm workspace with `npm init`. You can skip all questions by running `npm init --yes`.

### Serve Script

Install a local development server like `serve` with `npm i --save-dev serve`.

Create a serve script in your `package.json`.

```json
"scripts": {
  ...
  "serve": "serve ./src"
}
```

Run the serve script with `npm run serve`.

> Remember to keep the server open while you develop or run cypress

### Cypress

Install cypress as a dev dependency `npm i --save-dev cypress`.

Add a node script to run cypress in your `package.json`

```json
"scripts": {
  ...
  "e2e": "cypress open"
}
```

> Run cypress once with the `e2e` script so that cypress will create all necessary folders and files.

### Cypress BaseURL

You need to set the base url for e2e tests in the `cyress.json` file in the root directory of your npm workspace.

```json
{
  "baseUrl": "http://localhost:5000"
}
```

> The url must match to your personal setup and port.

### Add Own Test

Create a new test file in `/cypress/integration/`. You can name it with the pattern `***.spec.js`.

### Example Test and Source Code

todo.spec.js

```js
describe("todo App", () => {
  it("should allow to enter text", () => {
    cy.visit("/");
    cy.get("#input")
      .type("learn cypress")
      .should("have.value", "learn cypress");
  });

  it("should add li elements", () => {
    cy.visit("/");
    cy.get("#input").type("learn cypress");

    cy.get("#add-button").click();

    cy.get("#list").get("li").should("have.length", 1);
  });
});
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" id="input" /><button id="add-button">Add</button>
    <ul id="list"></ul>
    <script src="script.js"></script>
  </body>
</html>
```

script.js

```js
const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const newTodo = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = newTodo;

  list.appendChild(newLi);
}
```

## Ressources

- [Cypress Tutorial for Beginners](https://www.valentinog.com/blog/cypress/)
- [Code AutoComplete](https://www.linkedin.com/pulse/vscode-cypress-autocomplete-setup-vscodetips-uma-muthuraman/)
