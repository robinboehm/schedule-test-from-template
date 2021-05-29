# Live Coding Smallest Number

- Code verstehen über visualisierung von variablen werten

Lösung für smallest number

```js
function findSmallestNumber(arr) {
  let smallestNumber = 0;
  for(let i = 0; i < arr.length; i++) {
    if(smallestNumber > arr[i]) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
```

Pseudo Visualisierungs Code

```
Smallest Number

Array: [-1,5,-2,7]

smallestNumber=0
iterieren wir über array
sn = 0 --> arr[0] = -1 --> sn = -1
sn = -1 --> arr[1] = 5 --> nichts zu tun
sn = -1 --> arr[2] = -2 --> sn = -2
sn = -2 --> arr[3] = 7 --> nichts zu tun

return smallestNumber --> -2
```
