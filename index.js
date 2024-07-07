#! /usr/bin/env node
// Using Inquirer to easily collect and process user input in the command line interface (CLI).
import inquirer from "inquirer";
import chalk from "chalk";
async function askSentence() {
    // Welcoming message
    console.log(chalk.green("Welcome to the mshk-word-counter"));
    // Declare a constant `answers` and assign it to the result of inquirer.prompt function
    const answers = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the words:",
            validate: (input) => {
                if (input.trim() === "") {
                    return chalk.red("Please enter a valid sentence.");
                }
                return true;
            }
        },
    ]);
    const words = answers.Sentence.trim().split(" ");
    // Print the array of words to the console
    console.log(chalk.blue(words));
    // Print the words count of the sentence to the console
    console.log(chalk.yellow(`Your sentence word count is ${words.length}`));
}
async function main() {
    let again = true;
    while (again) {
        await askSentence();
        const answer = await inquirer.prompt([
            {
                name: "retry",
                type: "confirm",
                message: "Do you want to count the words in another sentence?",
                default: false,
            },
        ]);
        again = answer.retry;
    }
    // Ending Message
    console.log(chalk.red("Thank you for using the mshk-word-counter!"));
}
// Call the main function to start the program
main();
