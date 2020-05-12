let numberOfCupsOfCoffee = 2;
let fullName = "Stefan Bettaglio";
let response = require("./logic.js");
let today = Date.now();
today = new Date().toLocaleDateString();
console.log(
  `${fullName} drank ${numberOfCupsOfCoffee} cups of coffee ${today}`
);

const questions = [
  "What's your name?",
  "Please input a number",
  "Please input another number",
];

response.data.askQuestion(questions);

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  response.data.moreQuestions(answers, questions);
});
process.on("exit", () => {
  const [user, operand1, operand2] = answers;

  response.data.checkAlice(user, today);

  response.data.calculations(user, operand1, operand2);
});
