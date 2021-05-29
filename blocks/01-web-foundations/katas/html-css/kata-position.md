# Kata - Position

Todos: 
- Create a html and css file
- Copy the starting code into the files
- Link the css file to the html
- Place the number elements in the corners of their parent element (`.box`)
- Do not use a flexbox

Your solution should look like [this](https://codepen.io/nicokoenig/full/QWwYaJB).

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kata - Position</title>
</head>
<body>
  <div class="box">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
  </div>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;    
}

.box {
  width: 50vmin;
  height: 50vmin;
  border: 2vmin solid black;
}

.child {  
  background-color: salmon;
  font-size: 5vmin;  
  padding: 2vmin;
}
```
