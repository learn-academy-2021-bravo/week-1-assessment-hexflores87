// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is
// below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

function boiling(temp)
{
    if (temp==212)
    {
        console.log("212 is at boiling point \n");
    }else if (temp<212){
        console.log(temp + " is below boiling point \n");
    }else {
        console.log(temp + " is above boiling point\n ");
    }
}
boiling(temp1);
boiling(temp2);
boiling(temp3);
/*
func boiling (temp):
    if temp is equal to 212:
        print "212 is the at boiling"

*/
// --------------------2) Create a function that takes in an array of numbers and 
//returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

function multiplyBy5 (arr)
{
    //var newArray = arr;
    for (let i=0;i<arr.length;i = i +1)
    {
        arr[i] = arr[i] * 5;
    }
    return arr;
}
var times5 = multiplyBy5(myNumbers1);

for (let i=0;i<times5.length;i = i +1)
    {
        console.log(times5[i], " ");
    }
/*
function multiplyBy5 (array):
    for each number in array:
        number is equal to number times 5

    return array
*/


// --------------------3) Create a function that takes in an array of numbers and 
//returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
/*
function oddNumbers (array):
    for each number in array:
        if odd number add to return array
    return odd-only-array
*/
function oddNumbers (arr)
{
    let oddArray=[];
    let idx=0;
    for (let i =0;i<arr.length;i++)
    {
        if (arr[i] % 2 != 0)  // This is an odd number
        {
            oddArray[idx]=arr[i];
            idx++;
        }
    }
    return oddArray;
}
let oddArray = oddNumbers(myNumbers2);
for (let i=0;i<oddArray.length;i = i +1)
    {
        console.log(oddArray[i], " ");
    }

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
/*
function removeVowels(text):
    for each character in text:
        if character is vowel 
            remove 
    return text 
    // added a line
*/
function removeVowels(text){
    let retval = ""; // return value with not vowels.
    let vowels= "AEIOUYaeiouy";  // String of all vowels.

    for (let i=0;i<text.length;i++) // iterate through each character in text
    {
        const c = text.charAt(i); // get char at position i

        if(vowels.indexOf(c)<0) // not a vowel
        {
            retval += c; // add to return value
        }
    }
    return retval;
}
console.log(removeVowels(stringWithVowels1));
console.log(removeVowels(stringWithVowels2));



// --------------------5) Copy/paste your code from #4. Refactor your code to 
//include non-string edge cases. Inform your user if the variable passed 
//into the vowel removal function is not a string.
// Use the test variables provided below. Expected output:
// "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)
/*
function removeVowels(text):
    if text is not a string:
        print "not a string"
        return

    for each character in text:
        if character is vowel 
            remove 
    return text 
*/
var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"
function removeVowels2(text){
    if (typeof text != "string")
    {
        return text+" is not a string";
        return;
    }
    let retval = ""; // return value with not vowels.
    let vowels= "AEIOUYaeiouy";  // String of all vowels.

    for (let i=0;i<text.length;i++) // iterate through each character in text
    {
        const c = text.charAt(i); // get char at position i

        if(vowels.indexOf(c)<0) // not a vowel
        {
            retval += c; // add to return value
        }
    }
    return retval;
}
console.log(removeVowels2(refactorTester1));
console.log(removeVowels2(refactorTester2));
console.log(removeVowels2(refactorTester3));