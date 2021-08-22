//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// create a general function along with 3 separate functions. Each separate functions will check if it is an object, array, or
// string, then iterates through and outputs individual strings.

// for objects, iterate through each key and call the main function again
function ifObj(input_obj) {
    for (let i=0; i<Object.keys(input_obj).length; i++) {
        allFood(Object.values(input_obj)[i])
    }
}

// for arrays, iterate through each element and call the main function
function ifArray(input_array) {
    for (let i=0; i<input_array.length; i++) {
        allFood(input_array[i])
    }
}

// for strings, output it.
function ifStr(input_string) {
    return console.log(input_string)
}

// checks if the current index is an object, array, or string. If object/array, call function to go deeper until a string.
// If a string, output the string.
function allFood(my_list) {
    // if an object, call the object function
    if (Object.prototype.toString.call(my_list) === '[object Object]') {
        ifObj(my_list);
    }
    // if an array, call the array function
    else if (Array.isArray(my_list)) {
        ifArray(my_list);
    }
    // if a string, call the string function
    else if (typeof my_list === 'string') {
        ifStr(my_list);
    }
}

allFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `You are ${this.name} and ${this.age} years old.`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (add=1) => {
        let newAge = this.age + add;
        return `You are ${newAge} years old after adding ${add} years.`
    }
}

let person1 = new Person('Jerry', 22)
console.log(person1.printInfo())
console.log(person1.addAge())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
my_string = "12345678910";

let checkLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            return resolve();
        }
        else {
            return reject();
        }
    })
}

// Can't figure out why the console log output is always last.
checkLength(my_string).then((result) => {
    console.log("Big word")
}).catch((result) => {
    console.log("Small Number")
})

// =============Codewars #1 ============//
/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
    let my_obj = {};

    // if the key current_num exists, then +1, else set to 1.
    A.forEach( (current_num) => {
    if (my_obj[current_num]) {
        my_obj[current_num]++;
    }
    else {
        my_obj[current_num] = 1;
    }
    })
      
    // if the number of occurences is not divisible by 2, then it is an odd number
    for (let current_num in my_obj) {
        if (my_obj[current_num]%2 !== 0) {
            return Number(current_num)
        }
    }
  }
  
  A =  [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]
  console.log(findOdd(A))


// =============Codewars #2 ============//
/*
Return the number (count) of vowels in the given string.
*/

function getCount(str) {
    let vowelsCount = 0;
    for (current_char of str) {
        if (current_char === 'a' | current_char === 'e' | current_char === 'i' | current_char === 'o' | current_char === 'u') {
            vowelsCount++;
        }
    }
    return vowelsCount;
  }

string = "should give 7 vowels"
console.log(getCount(string))

// =============Codewars #3 ============//
/*
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

// ***Not sure why this isn't working. It outputs everything rather than filter out vowels.
// ***The idea is to check each character if it is a vowel. If it is, concatenate into new_str, then return new_str.
function disemvowel(str) {
    new_str = ""
    for (let char of str) {
      if (char !== 'a' | char !== 'e' | char !== 'i' | char !== 'o' | char !== 'u') {
        new_str += char;
      }
    }
    return new_str;
}

string = "why isn't this working"
console.log(disemvowel(string))