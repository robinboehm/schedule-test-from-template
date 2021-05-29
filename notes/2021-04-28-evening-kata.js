// see also: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// all solutions return the shortest word length 
function findShort(s){ // s is a string like: "hello World what is the shortest word length?"
  
  // These are 8 possible solutions
  // They become more and succinct
  // Not everything was officaly covered therefore links to MDN
  

  // for of + for loop with temporary variable
  {
    let words = s.split(' ') // ['word1', 'word2']
    let min_length = words[0].length
    for(let word of words) {
      if(word.length < min_length) {
        min_length = word.length
      }
    }
    return min_length
  }
  
  // for of + sort  
  // see sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  {
    let words = s.split(' ')
    let lengths = []
    for(let word of words) {
      lengths.push(word.length)
    }
    lengths = lengths.sort()
    return lengths[0]
  }
  
  // more compact using .map
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  { 
    let words = s.split(' ') // [ 3, 5]
    let lengths = words.map(function(word) {
      return word.length
    })
    return word_lengths.sort()[0] // return first element of sorted array
  }    
  
  // more compact using lambda / arrow function
  // see lambda: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  { 
    let words = s.split(' ')
    let lengths = words.map((word) => word.length)
    return word_lengths.sort()[0]
  }    
  
  // Math.min + deconstructing expression
  // see:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // see:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min 
  {
    let words = s.split(' ')
    let word_lengths = words.map(w => w.length)
    return Math.min(...word_lengths)
  }
  
  // more compact via chaining
  {
    let word_lengths = s.split(' ').map(w => w.length)
    return Math.min(...word_lengths)
  }
  
  // even more compact via chaining
  {
    return Math.min(...s.split(' ').map(w => w.length))
  }
  
  // regex solution ;)
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  {
    return s.match(/\w+?/).length
  }
    
}
