/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/


let Randvalue = Math.random();
let first, second, third;

// there random vlaue carries 0-1 (0, 0.33, 0.66, 1)
 

if (Randvalue < 0.33) {
    first = "crazy";
} else if (Randvalue < 0.66 && Randvalue>= 0.33) {
    first = "amazing";
} else {
    first = "fire";
}

Randvalue = Math.random();
if (Randvalue < 0.33) {
    second = "Engine";
} else if (Randvalue < 0.66 && Randvalue>= 0.33) {
    second = "Food";
} else {
    second = "Garments";
}

Randvalue = Math.random();
if (Randvalue < 0.33) {
    third = "Bros";
} else if (Randvalue < 0.66 && Randvalue>= 0.33) {
    third = "Limited";
} else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);



/*

Explaination of this code.

1. let Randvalue = Math.random();
This line generates a random floating-point number between 0 and 1 using the Math.random() function, and stores it in the variable Randvalue.

2. let first, second, third;
Here, three variables (first, second, third) are declared. These variables will later hold the string values based on random conditions.

3. if (Randvalue < 0.33) { first = "crazy"; }
This checks if the random value (Randvalue) generated is less than 0.33. If true, it assigns the string "crazy" to the variable first.

4. else if (Randvalue < 0.66 && Randvalue >= 0.33) { first = "amazing"; }
If the first condition is false, this condition checks if Randvalue is between 0.33 (inclusive) and 0.66. If true, it assigns "amazing" to first.

5. else { first = "fire"; }
If neither of the previous conditions is true (i.e., if Randvalue is greater than or equal to 0.66), it assigns "fire" to first.

6. Randvalue = Math.random();
Here, a new random number between 0 and 1 is generated and assigned to Randvalue again for the second set of conditions.

7. The next if-else block repeats the same logic for the second variable:
If Randvalue is less than 0.33, second = "Engine";
If Randvalue is between 0.33 and 0.66, second = "Food";
Otherwise, second = "Garments";
8. Randvalue = Math.random();
Another random number is generated to check the value for the third variable.

9. The same if-else structure is used for third:
If Randvalue is less than 0.33, third = "Bros";
If Randvalue is between 0.33 and 0.66, third = "Limited";
Otherwise, third = "Hub";
10. console.log(${first} ${second} ${third});
Finally, this line outputs the values of first, second, and third as a string in the format: <first> <second> <third>. For example, it might output: "amazing Food Hub".

Summary:
The code generates three random words by selecting them based on random numbers. Each word is chosen from three sets of options (first, second, third), and the final string is logged to the console.




*/