
let normalFunction = function () {
  return true;
};

let arrowFunction = () => true;

console.log(normalFunction(), arrowFunction());


// Oh wow they are not the same exactly?
console.log(normalFunction == arrowFunction);