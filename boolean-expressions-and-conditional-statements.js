/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasCompass = true;
const hasJarOfPeanutButter = true;
const hasJarOfHoney = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
    console.log("It's too dark to proceed. You decide to turn back.");
    if (hasJarOfHoney || hasJarOfPeanutButter) {
      console.log("A hungry bear smells your food. It charges you from behind and you lose consciousness.");
    }
} else if (choice === "village" || hasMap || hasCompass) {
  console.log("You find your way to the village.");
    if (hasJarOfHoney && !hasMap) {
      console.log("You trade the jar of honey with a hungry villager for a map.");
    if (hasJarOfHoney && !hasCompass) {
      console.log("You trade the jar of peanut butter to an wandering villager for a compass.");
      }
    } 
} else {
    console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/