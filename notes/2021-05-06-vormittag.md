---
marp: true
theme: uncover
drive link: https://docs.google.com/presentation/d/1j0c0tcEVcXZZpKDuVYm0H55MJ1Bm1fTAzavX-7Cdflo/ 

---
# The javascript ecosystem
Getting to know `node` and `npm`
 🤝 



---
## Browser javascript

Inside the browser Javascript runs **sandboxed**: <br>

- no access access local files 
- no listening on ports (e.g. web-server)
- less danger ☠️



---
> Javascript is so nice 😍 
> Can I use it for everything? 👉👈

Ryan Dahl - creator node nodejs



---
And so we got: 

![](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

- javascript running un-sandboxed
- can access the filesystem
- no `window`, no DOM, no HTML



---
## using `node`

```bash
# this is terminal code 😉      
node --help 
node --version
node -e "console.log('hello world');"
node              # interactive mode 
```


---
### Headless Javascript
What we know:
```html
<!-- index.html -->
<html>
  <head><script src="main.js"/></head>
  <body></body>
</html>
```

`node` needs no `head` and `body`:

```js
// main.js                            
console.log('Hello world')
```

```bash       
node ./main.js # prints Hello World    
```



---
### loading scripts


```js
// helper.mjs
let variable = 1;
const a_function = () => 'Hello World'          
console.log('helper.js loaded')
export { variable };
export default a_function;
```

```js
// main.mjs
import welcome, { variable } from './helper.mjs' 

console.log('i say:', welcome())
```

```bash
node ./main.mjs # requires > node v16                                  
# helper.js loaded
# i say: Hello World     
```



---

# all you can `import` 😋

- `node` provides a lowlevel [standard library](https://nodejs.org/api/)
- `node` allows to import local files
- `node` **has a package manager** 🎉


---

# Node Package Manager

- cia CLI: `npm`
- [npmjs.com](https://www.npmjs.com/) 
- \> 1 Million packages



---

## Installing a tool via `npm`

```bash
npm --help # obligatory

# npm install package globally
npm install -g @marp-team/marp-cli

# serving this very presentation
marp --server ./schedule/notes/
```




---

# Let's build a package

using `node` and `npm` to:

- create basic webserver (to replace VSC Live Server)
- include our first very package into our `index.html`



---
### `npm create` 

```bash
mkdir myproject # create new folder
cd myproject # go into to folder
npm create # create the package.json
```

---



### `package.json`

- contains package metadata
- will conatin dependencies

```json
{
  "name": "starter",
  "version": "1.0.0",
  "description": "a first test",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
  }
}
```

---

### `package.json` structure

- [package.json documentation](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- `engines` - which node versions to use
- `devDependencies`
- `scripts`
- `private`

---

### creating our source files


```bash
# a folder for everything that will be served 
# in the browser
mkdir public 
touch public/index.html # copy coulette files here

# our server side javascript code
touch server.js 

# our dependency comes next
```


---
### add the webserver dependecy

```bash
npm install express               
```
This will update the `package.json`

```json
...                               
"dependencies": {
    "express": "^4.17.1"
  }
...  
```
and initialize the `package-lock.json` and adds a `node_modules` folder.


---
### `node_modules`
- they contain our installed packages
- they will be searched by `node` when importing


```
// server.js
import express from "express"
```

---



### `package-lock.json`

- ensures we really download **the same** packages into `node_modules` each time.
- it "locks" the used package versions


---
### project structure summary
```
├── node_modules
│   └── ...
├── package.json
├── package-lock.json
├── public
│   └── index.html
└── server.js

```



--- 
### server.js aka the webserver

- add `"type": "module",` to your `package.json`

```js
import express from 'express'
const server = express()
const port = 3000  // port 80 and 443 might be blocked

// configure serving public from /
server.use('/', express.static('public')) 

// configure a route to be served via javascript callback
server.get('/hello', (req, res) => { 
  res.send('Hello World!')
})

// actually begin serving 
server.listen(port, () => {
  console.log('Server listening at http://localhost:' + port)
})
```



---

# Let's run the server

```bash
node server.js # that's it
```
- check out http://localhost:3000
- behold 🎉
- no auto-refresh 😐


---
# boostrap.js library

- [getbootstrap.com](https://getbootstrap.com)
- this will be your first library 
- comes with JS and CSS files
- allows you to not reinvent the wheel


---

### setting up bootstrap

```bash
npm install bootstrap                            
```

```js
// inside the server.js
server.use(
  '/library', 
  express.static('node_modules/bootstrap/dist/')
);
```


add to `head`:
```html
<script src="library/js/bootstrap.bundle.js"></script>
<link rel="stylesheet" href="library/css/bootstrap.css" />
```


---

### Work with bootstrap
- reading the docs 📖
- try out components 🧪
- inspect the CSS 🧐
- Add a navigation 
- Add a carousel for the added items 
- Show a warning dialog when removing items 

---
