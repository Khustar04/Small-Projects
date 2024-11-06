// // Write a script that changes the background color of a div to a random color every time the user clicks on that div. Ensure that the text color remains readable (you can implement a simple brightness check).



// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box'); // Use querySelectorAll to select all boxes

// Function to generate a random hex color
function getrandcolor() {
    let randomcolors = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += randomcolors[Math.floor(Math.random() * 16)];
    }
    return colors;
}

// Function to check brightness of a color
function isColorDark(color) {
    // Remove '#' and convert hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Calculate brightness (using the luminance formula)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128; // Return true if the color is dark
}

// Add click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function() {
        const boxcolor = getrandcolor(); // Generate a random background color
        let textcolor = getrandcolor(); // Generate a random text color

        // Ensure text color is readable (light on dark, dark on light)
        if (isColorDark(boxcolor)) {
            textcolor = '#FFFFFF'; // Use white text for dark backgrounds
        } else {
            textcolor = '#000000'; // Use black text for light backgrounds
        }

        // Set the background and text color
        box.style.backgroundColor = boxcolor;
        box.style.color = textcolor;
    });
});


/*
FULL EXPLAINATION OF FUNCTION <isColorDrak>.

const r = parseInt(color.slice(1, 3), 16); // Get Red part of color
const g = parseInt(color.slice(3, 5), 16); // Get Green part
const b = parseInt(color.slice(5, 7), 16); // Get Blue part



Here, slice() is applied to a string, not an array. This might be confusing because you are more familiar with slicing arrays, but in JavaScript, you can also slice strings. Let me explain how it works in this context.

Context: Hex Color Code
Hex colors look like this: #A1B2C3.
A1 represents the red component.
B2 represents the green component.
C3 represents the blue component.

Hex codes are written with 6 characters (excluding the #), where every 2 characters represent the amount of red, green, or blue in the color.
For example:

#A1B2C3:
Red: A1
Green: B2
Blue: C3

What slice() Does:
String slicing works the same way as array slicing. It extracts a portion of the string based on index positions.

color.slice(1, 3) means:
Start at index 1 (skipping the #).
Extract up to but not including index 3.
So, it extracts characters from index 1 to 2 (inclusive), which gives us the red part: A1 in this case.
Similarly, color.slice(3, 5) extracts the green part (B2), and color.slice(5, 7) extracts the blue part (C3).

Full Explanation:

color.slice(1, 3):
Takes the substring from index 1 to 3 of the color string.
Example: For #A1B2C3, it will return "A1" (the red part).
parseInt(..., 16):
Converts the hex string "A1" into a decimal (integer) number.
"A1" in hexadecimal becomes 161 in decimal. So, r = 161.

Same Process for Green and Blue:
g = parseInt(color.slice(3, 5), 16) extracts the green part (B2) and converts it to 178 in decimal.
b = parseInt(color.slice(5, 7), 16) extracts the blue part (C3) and converts it to 195 in decimal.

Final Example:
For the color #A1B2C3:

color.slice(1, 3) gives "A1", which becomes 161 in decimal.
color.slice(3, 5) gives "B2", which becomes 178 in decimal.
color.slice(5, 7) gives "C3", which becomes 195 in decimal.

Why We Use slice() Here:
We’re slicing the hex string to separate out the red, green, and blue components from the hex code so we can work with them individually and calculate brightness.

Recap:
slice() is applied to the hex string (like #A1B2C3), not an array.
It extracts parts of the hex color code that represent red, green, and blue.
parseInt(..., 16) converts those parts from hex to decimal.
*/


/*
HOW TO BRIGHTNESS CALCULATED - With FORMULA.

const brightness = (r * 299 + g * 587 + b * 114) / 1000;
return brightness < 128;

Context:
This code is used to calculate the brightness of a color in RGB format and determine whether the color is considered dark or light. It calculates brightness based on the individual red, green, and blue (RGB) values of the color.

Explanation:
1. RGB Components:
In an RGB color model, each color is made up of three components:

r: Red (0–255)
g: Green (0–255)
b: Blue (0–255)
For example, in the color rgb(100, 150, 200):

r = 100
g = 150
b = 200
2. Luminance/Perceived Brightness Formula:

The formula:
(r * 299 + g * 587 + b * 114) / 1000;

is used to calculate the perceived brightness of a color based on human vision. This is not a simple average of the RGB values. Instead, it weights each color component differently:

Red (r) is multiplied by 299.
Green (g) is multiplied by 587.
Blue (b) is multiplied by 114.
These specific numbers (299, 587, and 114) are used because the human eye is more sensitive to green light and less sensitive to blue light. So, green has the highest weight (587), red has a medium weight (299), and blue has the smallest weight (114).

Formula Breakdown:
r * 299: Adds more weight to the red component of the color.
g * 587: Adds even more weight to the green component.
b * 114: Adds less weight to the blue component.
The sum is divided by 1000 to normalize the result and get a brightness value between 0 and 255.
3. Final Brightness Value:
The formula returns a brightness value, which ranges from 0 (completely dark) to 255 (completely bright).

If brightness < 128, the color is considered dark.
If brightness >= 128, the color is considered light.
Example:
Let's say we have a color with RGB values r = 100, g = 150, and b = 200.

const brightness = (100 * 299 + 150 * 587 + 200 * 114) / 1000;

Step-by-step calculation:

1.100 * 299 = 29900
2.150 * 587 = 88050
3.200 * 114 = 22800

Summing these gives:
brightness = (29900 + 88050 + 22800) / 1000;
brightness = 140750 / 1000;
brightness = 140.75;
So, the brightness of this color is 140.75.

return brightness < 128;
Since 140.75 is greater than 128, the function will return **false**, meaning the color is not dark (it's considered light).

Summary:
The formula calculates the brightness of a color by giving different weights to the red, green, and blue components based on how humans perceive light.
The brightness value determines whether the color is dark (brightness < 128) or light (brightness >= 128).
*/




