 //            Assignment # 38-44 
  
// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 

//ANS 1:
// function power(a, b) {
//     if (b === 0) {
//       return 1;
//     } else if (b < 0) {
//       return 1 / (a * power(a, -b - 1));
//     } else {
//       return a * power(a, b - 1);
//     }
//   }
  
//   const base = 2;
//   const exponent = 3;
//   const result = power(base, exponent);
//   console.log(`${base}^${exponent} = ${result}`);
  
// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, … 

//ANS 2:
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//     const year = parseInt(prompt("Enter a year:"));
  
//   if (!isNaN(year)) {
//     if (isLeapYear(year)) {
//       console.log(`${year} is a leap year.`);
//     } else {
//       console.log(`${year} is not a leap year.`);
//     }
//   } else {
//     console.log("Please enter a valid year.");
//   }
  
// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 

//ANS 3:
// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   function isTriangleValid(a, b, c) {
//     return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
//   }
//   const sideA = parseFloat(prompt("Enter the length of side A:"));
//   const sideB = parseFloat(prompt("Enter the length of side B:"));
//   const sideC = parseFloat(prompt("Enter the length of side C:"));
  
//   if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
//     if (isTriangleValid(sideA, sideB, sideC)) {
//       const area = calculateTriangleArea(sideA, sideB, sideC);
//       console.log(`The area of the triangle is: ${area}`);
//     } else {
//       console.log("These side lengths cannot form a valid triangle.");
//     }
//   } else {
//     console.log("Please enter valid side lengths.");
//   }
  
// 
//ANS 4:
//  function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
//   }
//     function calculatePercentage(mark1, mark2, mark3) {
//     const totalMarks = mark1 + mark2 + mark3;
//     const maxMarksPerSubject = 100; // Assuming each subject is out of 100 marks
//     return (totalMarks / (3 * maxMarksPerSubject)) * 100;
//   }
//   function mainFunction() {
//     const subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
//     const subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
//     const subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
  
//     if (!isNaN(subject1Marks) && !isNaN(subject2Marks) && !isNaN(subject3Marks)) {
//       const average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//       const percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
//       console.log(`Average Marks: ${average}`);
//       console.log(`Percentage: ${percentage}%`);
//     } else {
//       console.log("Please enter valid marks.");
//     }
//   }
  
//   // Call the main function to start the program
//   mainFunction();
  
// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 
 
//ANS 5:
//  function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1; 
//   }
//   const text = "Hello, world!";
//   const characterToFind = "o";
//   const index = customIndexOf(text, characterToFind);
  
//   if (index !== -1) {
//     console.log(`The character "${characterToFind}" is found at index ${index}.`);
//   } else {
//     console.log(`The character "${characterToFind}" is not found in the string.`);
//   }
  
// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 
 
//ANS 6:
//  function deleteVowels(sentence) {
//     const vowels = "aeiouAEIOU"; // Define the vowels
//     const sentenceWithoutVowels = sentence.replace(new RegExp(`[${vowels}]`, "g"), "");
  
//     return sentenceWithoutVowels;
//   }
//   const inputSentence = "This is a test sentence with vowels.";
//   const sentenceWithoutVowels = deleteVowels(inputSentence);
  
//   console.log("Original Sentence: " + inputSentence);
//   console.log("Sentence Without Vowels: " + sentenceWithoutVowels);
  
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 
// “Pleases read this application and give me gratuity” 
// Such occurrences are ea, ea, ui. 

//ANS 7:
//  function countSuccessiveVowels(text) {
//     let count = 0;
  
//     for (let i = 0; i < text.length - 1; i++) {
//       const char1 = text[i].toLowerCase();
//       const char2 = text[i + 1].toLowerCase();
  
//       switch (char1 + char2) {
//         case 'ae':
//         case 'ai':
//         case 'ao':
//         case 'au':
//         case 'ea':
//         case 'ee':
//         case 'ei':
//         case 'eo':
//         case 'eu':
//         case 'ia':
//         case 'ie':
//         case 'io':
//         case 'iu':
//         case 'oa':
//         case 'oe':
//         case 'oi':
//         case 'ou':
//         case 'ua':
//         case 'ue':
//         case 'ui':
//         case 'uo':
//           count++;
//           break;
//         default:
//           break;
//       }
//     }
  
//     return count;
//   }
//   const sentence = "Pleases read this application and give me gratuity";
//   const count = countSuccessiveVowels(sentence);  
//   console.log(`Occurrences of two vowels in succession: ${count}`);
  
// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 

//ANS 8:
// function kilometersToMeters(kilometers) {
//     return kilometers * 1000;
//   }
//   function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84;
//   }
//   function kilometersToInches(kilometers) {
//     return kilometers * 39370.1;
//   }
//   function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000;
//   }
//   function mainFunction() {
//     const distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  
//     if (!isNaN(distanceInKilometers)) {
//       const distanceInMeters = kilometersToMeters(distanceInKilometers);
//       const distanceInFeet = kilometersToFeet(distanceInKilometers);
//       const distanceInInches = kilometersToInches(distanceInKilometers);
//       const distanceInCentimeters = kilometersToCentimeters(distanceInKilometers);
  
//       console.log(`Distance in Meters: ${distanceInMeters} m`);
//       console.log(`Distance in Feet: ${distanceInFeet} ft`);
//       console.log(`Distance in Inches: ${distanceInInches} in`);
//       console.log(`Distance in Centimeters: ${distanceInCentimeters} cm`);
//     } else {
//       console.log("Please enter a valid distance in kilometers.");
//     }
//   }
  
//   mainFunction();
  
// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour. 

//ANS 9:
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.0; 
//     let overtimeHours = 0;
  
//     if (hoursWorked > regularHours) {
//       overtimeHours = hoursWorked - regularHours;
//     }
  
//     const overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
//   function mainFunction() {
//     const hoursWorked = parseInt(prompt("Enter the total hours worked:"));
  
//     if (!isNaN(hoursWorked)) {
//       const overtimePay = calculateOvertimePay(hoursWorked);
  
//       if (overtimePay > 0) {
//         console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);
//       } else {
//         console.log("No overtime pay earned for working within the standard 40 hours.");
//       }
//     } else {
//       console.log("Please enter a valid number of hours worked.");
//     }
//   }
  
//   mainFunction();
  
// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

//ANS 10:
// function calculateCurrencyNotes(amountInHundreds) {
//     const note100 = 100;
//     const note50 = 50;
//     const note10 = 10;
//     const num100Notes = Math.floor(amountInHundreds);
//     const remainingAmount = amountInHundreds - num100Notes;
  
//     const num50Notes = Math.floor(remainingAmount / (note50 / 100));
//     remainingAmount -= num50Notes * (note50 / 100);
  
//     const num10Notes = Math.floor(remainingAmount / (note10 / 100));
  
//     return {
//       100: num100Notes,
//       50: num50Notes,
//       10: num10Notes,
//     };
//   }
//   function mainFunction() {
//     const amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  
//     if (!isNaN(amountInHundreds)) {
//       const notes = calculateCurrencyNotes(amountInHundreds);
  
//       console.log(`Number of 100 Rupee Notes: ${notes[100]}`);
//       console.log(`Number of 50 Rupee Notes: ${notes[50]}`);
//       console.log(`Number of 10 Rupee Notes: ${notes[10]}`);
//     } else {
//       console.log("Please enter a valid amount in hundreds.");
//     }
//   }
  
//   mainFunction();
  