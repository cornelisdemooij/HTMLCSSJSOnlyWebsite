
/**
 * 
 *  1) OBJECTS YAY!!!
 * 
 */
const animals = {
  'turtle': '🐢',
  'unicorn': '🦄',
}





const animals = {
  turtle: {
    'emoji': '🐢',
    'age': 300,
    'name': 'Bob',
  },
  unicorn: {
    emoji: '🦄',
    age: Infinity,
    name: 'Joren',
  }
}


const animals = {
  '🐢': {
    'age': 300,
    'name': 'Bob',
  },
  '🦄': {
    age: Infinity,
    name: 'Joren',
  }
}
console.log(animals['🐢']);
console.log(animals['🐢'].age);






/**
 * 
 *  2) FUNCTIONS YAY!!!
 * 
 */
function doSomething() {
  console.log('I am doing something :)');
}

doSomething();


function returnSomeString() {
  console.log('start of the function');
  return 'I am returning this string';
  console.log('this part does not get executed');
}

let someString = returnSomeString();








function sumIsMoreThan(numberA, numberB, minimumSum) {
  const sum = numberA + numberB;
  if (sum > minimumSum) {
    return true;
  } else {
    return false;
  }
}

console.log(sumIsMoreThan(5, 23, 15));
console.log(sumIsMoreThan(5, 7, 20))




/**
 * 
 *  3) BACK TO OBJECTS YAY!!!
 * 
 */
const animals = {
  turtle: {
    emoji: '🐢',
    age: 300,
    name: 'Bob',
    
    giveFood: function () {
      console.log(this.emoji + ': Thank you for feeding me that 🍃!!!');
    },
  },
  unicorn: {
    emoji: '🦄',
    age: Infinity,
    name: 'Joren',

    poop: function (amount = 2) {
      poops = '';
      for (let i = 0; i < amount; i++) {
        poops += '🌈';
      }
      console.log('🦄' + poops)
    },

    getAge: function () {
      return this.age;
    },

    friends: ['🐢', '🐕', '🐹'],

    // getMyself: function() => { return this } // show this to demonstrate arrow vs normal function "this" keyword
  }
} 

animals.unicorn.poop(5);
animals.turtle.giveFood();
let unicornAge = animals.unicorn.getAge();
console.log(`${animals.unicorn.emoji}: My age is ${unicornAge - 1}, whoopwhoop!!`);

console.log(animals.unicorn.friends);




/**
 * Arrow functions :O omg
 */
let sumIsMoreThan = function(numberA, numberB, minimumSum) {
  const sum = numberA + numberB;
  if (sum > minimumSum) {
    return true;
  }
  return false;
}
console.log(sumIsMoreThan(15, 5, 30))

// Change it to this:
sumIsMoreThan = (numberA, numberB, minimumSum) => {
  const sum = numberA + numberB;
  if (sum > minimumSum) {
    return true;
  }
  return false;
}


let normalFunction = function () {
  return true;
};

let arrowFunction = () => true;

console.log(normalFunction(), arrowFunction());


// Oh wow they are not the same exactly?
console.log(normalFunction == arrowFunction);