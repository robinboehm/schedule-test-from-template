# Notes 2021-04-28

## `typeof`-operator

We looked at the [typeof on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

We learned that:
 - the common types we already use each have their own type:
   - `string`, `number`, `object`, `function` (though a few more exist)
   - `Array`s are also of the type `object` 

- What is `typeof` used for:
 - to `console.log` the type to find bugs...
 - to distinguish based on types in cases where the type is not clearly defined or where multiple types like `2` vs `'2'` could both occur. Example:

```js
const isThisAString = function (something) {  // get used to reading stuff like this ;)
    if(typeof something === 'string') {
        return true
    }
    return false
}
console.log('isThisAString:', isThisAString('35'))
console.log('isThisAString:', isThisAString(35))
```

## The role of the DOM

We discussed the role of the DOM and of javascript.
The DOM has the role of the  *view* and javascript acts as the *model* and the *controller*.

- The **model** is our internal data structure like `colors`-array or `current_color`-variable.
- The **controller** is role is enacted through the function that modify the DOM or our callback functions that react to DOM-Events
- The **view** is the DOM-data-structure itself.

Both "model" and "view" might contain the same value. We might find and elements `backgroundColor` both in the DOM and in our own self-declared variables/model.

Such a duplication might be desirable as it might allow us to:
   - reduce the "cognitive load/complexity" because a variable access is simpler to code and skim than a dom lookup.
   - improve performance because direct variable access is faster than e.g. repeated selector queries.

Another way to frame the **model** and **view** relationship is as a **Cache**. A Cache 

> is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation, or a copy of data stored elsewhere.

Through our controller-logic we need to ensure that our **model** and **view** state match / are synchronized. If you would just update the view by adding new DOM-Nodes but to not update our own variables then it might no longer be possible to implement for example a duplicate check based on the model as it is "stale" in cache-terminology.

## callback-functions

A callback function is function that is being "called back" (aka. Rückruf) under certain conditions. In P5 certain callbacks such as `setup` or `draw` function would be called "automatically" for us. Generally and especially when working with the DOM we need to setup callbacks ourselfs e.g. by calling `addEventListener` with our function that should be used as the callback-function. 

When programming by interacting directly with the DOM any user interaction requires callback functions implement our "controller-logic".

## DevTools 🚑

- **Always keep the DevTools openin order notice when errors occur!**
- If an error occurs, and the error message does not suffice to grasp what when wrong, set breakpoints to inspect the variables / application just before the error occurs.

## HTML Attributes

We advanced with the [slides](https://docs.google.com/presentation/d/17l5_-J0EB-0DyGPAGamW8o1-ygo4Ia6L3U9kNTDrMYs/edit#slide=id.gb65146bb12_0_0) from 108 to 125

```html
<button disabled>
  Click
</button>
```
On that `button` we can:
```js
const btn = document.querySelector("button");

btn.hasAttribute("hidden"); // false
btn.hasAttribute("disabled"); // true
btn.removeAttribute("disabled") // <button>
// disabled is a boolean attribute
btn.addAttribute("disabled") // <button disabled> 

// disabled is a string attribute
btn.setAttribute("title", "hover text") // <button disabled title="hover text">
btn.setAttribute("title", "hover text")  // will set it and overwrite if it already exists...
btn.removeAttribute("title") // // <button disabled>
btn.setAttribute("disabled", false) // WRONG do not use setAttribute for boolean attributes

```

A complete attribute reference exists on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) and [W3CSchool](https://www.w3schools.com/tags/ref_attributes.asp).

Additionally we can also access the attributes via:
```js
btn.attributes // {0: disabled, disabled: disabled, length: 1}
```

Note that attributes acts both has a `number`-property like an `Array` as well as a `string`-property. It is an object that "masqueraders" as an array. As the [MDN-Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) it is not an Array (it does not have any Array specific methods like `map` ). Generally all objects support both `string` and `number` property keys. Therefore, while this might look novel at first it is just what javascript generally allows.