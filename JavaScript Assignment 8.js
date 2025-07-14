// Q1. Find the Smaller Angle
// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the
// shorter angle formed between hour and minute hand at any given time.
// Note: You have to complete Minimal_Angle function. No need to take any input.
// Input Format
// The input contains two number h and m, which represents the current time as hour and minutes.
// Output Format
// Return the Minimal angle formed between the Hour hand and Minute hand.
// Constraints
// All valid times
// Example
// Sample Input 1
// 5 30
// Sample Output 1
// 15
// Sample Input 2
// 6 0
// Sample Output 2
// 180
function Minimal_Angle(h, m) {
  let hourAngle = (h % 12) * 30 + (m / 60) * 30;
  let minuteAngle = m * 6;
  let angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
}
// Examples
console.log(Minimal_Angle(5, 30)); // Output: 15
console.log(Minimal_Angle(6, 0));  // Output: 180

// Q2. Check whether the year is Leap year or not.
// Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.
// Note: You have to complete Check_Leap function. No need to take any input.
// Input Format
// The input contains a single number N, which represents a year.
// Output Format
// Return "Leap Year" if the given year is a Leap Year else return "Non Leap Year".
// Constraints
// 1000≤N≤10000
// Example
// Sample Input 1
// 1900
// Sample Output 1
// Non Leap Year
// Sample Input 2
// 2012
// Sample Output 2
// Leap Year 
function Check_Leap(N) {
  if ((N % 4 === 0 && N % 100 !== 0) || (N % 400 === 0)) {
    return "Leap Year";
  }
  return "Non Leap Year";
}
// Examples
console.log(Check_Leap(1900)); // Output: Non Leap Year
console.log(Check_Leap(2012)); // Output: Leap Year

// Q3. Perfect Number Check.
// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum
// of all its divisors except that number itself.
// Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.
// Note: You have to complete Perfect _Check function. No need to take any input.
// Input Format
// The input contains a single number N.
// Output Format
// Return "YES" if the number is a Perfect Number, else return "NO".
// Constraints
// 1≤N≤100000
// Example
// Sample Input 1
// 1
// Sample Output 1
// YES
// Sample Input 2
// 96345
// Sample Output 2
// NO
function Perfect_Check(N) {
  if (N === 1) return "YES";
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      sum += i;
      if (i !== N / i) sum += N / i;
    }
  }
  return sum === N ? "YES" : "NO";
}
// Examples
console.log(Perfect_Check(1));     // Output: YES
console.log(Perfect_Check(96345)); // Output: NO

// Q4. Reverse a Number.
// Write a program which takes a numebr N as input from the user and You need to reverse the number.
// Note: You have to complete Reverse_Number function. No need to take any input.
// Input Format
// The input contains a single number N.
// Output Format
// Return the reversed number.
// Constraints
// 1≤N≤100000
// Example
// Sample Input 1
// 1900
// Sample Output 1
// 91
// Sample Input 2
// 2012
// Sample Output 2
// 2102
function Reverse_Number(N) {
  let reversed = parseInt(N.toString().split('').reverse().join(''), 10);
  return reversed;
}
// Examples
console.log(Reverse_Number(1900)); // Output: 91
console.log(Reverse_Number(2012)); // Output: 2102

// Q5. Substring Check.
// You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.
// Note: You have to complete Substring_Check function. No need to take any input.
// Input Format
// The first line of input contains the first string S1. The second line of input contains the second string S2.
// Output Format
// Return "YES" if S1 is a substring of S2 else return "NO".
// Constraints
// 1≤|S1|,|S2|≤100, where |S|denotes the length of string S.
// Example
// Sample Input 1
// Hii this is Prepbuddy Prepbuddy
// Sample Output 1
// Hii this is Prepbuddy Prepbuddy
// Sample Output 1
// YES
// Sample Input 2
// Hii this is Prepbuddy Prepbytes
// Sample Output 2
// NO
function Substring_Check(S1, S2) {
  return S2.includes(S1) ? "YES" : "NO";
}
// Examples
console.log(Substring_Check("Prepbuddy", "Hii this is Prepbuddy")); // Output: YES
console.log(Substring_Check("Prepbuddy", "Hii this is Prepbytes")); // Output: NO