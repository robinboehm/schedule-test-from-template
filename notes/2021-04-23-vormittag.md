# Notes 2021-04-23

- Fehler fixen in smallestNumber Kata
- Katas auf Codewars lösen
- Ausflug zu Function, anonymous functions und arrow functions

## nichts aufs papier bringen

- `console.log` zum nachvollziehen von
  - aktueller stand variablen
  - was hat sich nach aufruf von methode geändert
- Grundgerüst schaffen
- Testet in jsbin / browser console 
- in doku schauen (devdocs)

## Smallest Number Fehler

- Takeaway: Testdaten in alle Richtungen ausweiten
- Testen nützt nix wenn die Daten nicht passen

Mögliche Lösung (achtung zweifach iteration über gesamtes array)
```js
function findSmallestNumber(arr) {
  let smallestNumber = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(smallestNumber < arr[i]) {              
      smallestNumber = arr[i];
    }
  }
  
  for(let i = 0; i < arr.length; i++) {
    if(smallestNumber > arr[i]) {              
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
```

Mögliche Lösung
```js
function findSmallestNumber(arr) {
  let smallestNumber = arr[0];
  if(smallestNumber === undefined) {
    return 0;
  }
      
  for(let i = 0; i < arr.length; i++) {
    if(smallestNumber > arr[i]) {              
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
```

## array.forEach

```js
// Array
const sheeps = [true, false, true];

// Zählervariable für Anzahl Schafe
let sheepCount = 0;

// Eigene Funktion
function countSheeps(sheep) {
  if(sheep === true) {
    sheepCount++;
  }
}

// Führe bitte für jedes Item die Funktion "countSheeps" aus
sheeps.forEach(countSheeps);

console.log("sheepCount: " + sheepCount);
```

## String Methoden

- `string.substr()` => zeichenkette aus string rauslösen
- `string.split("")` => string in array mit einzelnen buchstaben aufteilen

## Array Methode

- `array.pop()` --> letztes element löschen
- `array.shift()` --> erstes element löschen
- `array.join()` --> elemente des arrays zusammenfügen (ergebnis ist immer ein string)


## Kata Remove Char

Lösung mit Array Funktionen
```js
function removeChar(str){  
  const chars = str.split("");

  // shift() entfernt das erste element des arrays
  chars.shift();

  // pop entfernt das letzte element des arrays
  chars.pop();

  return chars.join('');  
};
```
Schleifen-Lösung
```js
function removeChar(str){  
  let word = "";
  
  const chars = str.split("");  
  for(let i = 1; i < (chars.length - 1); i++) {
    word = word + chars[i];
  }  
  
  return word;
};
```

## Functions, Anonymous Functions usw.

```js
console.clear();

// Array
const sheeps = [true, false, true];

// Zählervariable für Anzahl Schafe
let sheepCount = 0;

// Benannte Funktion
function countSheeps(sheep) {
  if(sheep === true) {
    sheepCount++;
  }
}

sheeps.forEach(countSheeps);

console.log("sheepCount: " + sheepCount);
```

```js
console.clear();

// Array
const sheeps = [true, false, true];

// Zählervariable für Anzahl Schafe
let sheepCount = 0;

// Anonyme Funktion (anonymous function expression)
const countSheeps = function(sheep) {
  if(sheep === true) {
    sheepCount++;
  }
}
sheeps.forEach(countSheeps);

console.log("sheepCount: " + sheepCount);
```

```js
console.clear();

// Array
const sheeps = [true, false, true];

// Zählervariable für Anzahl Schafe
let sheepCount = 0;

// Direkte übergabe einer anonymen funktion an forEach()
// Führe bitte für jedes Item die Funktion "countSheeps" aus
sheeps.forEach(
  function(sheep) {
    if(sheep === true) {
      sheepCount++;
    }
  }
);

console.log("sheepCount: " + sheepCount);
```

```js
console.clear();

// Array
const sheeps = [true, false, true];

// Zählervariable für Anzahl Schafe
let sheepCount = 0;

// Arrow Function
sheeps.forEach(sheep => {
  if(sheep === true) {
    sheepCount++;
  }
});

console.log("sheepCount: " + sheepCount);
```
