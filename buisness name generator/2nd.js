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

function Generator(x, y, z){
let value = Math.floor(Math.random() * 3)
 
if (value == 0)
    return x


else if (value == 1)
    return y


else
    return z
}

console.log("Genereted names: " + Generator("crazy", "amazing", "fire")+" " + Generator("engine", "food", "garments")+ " " + Generator("limited", "Hub", "Bros"))

