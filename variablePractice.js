let numberOfCupsOfCoffee = 2;
let fullName = "Stefan Bettaglio";
let today = "05/12/2020";

console.log(
  `${fullName} drank ${numberOfCupsOfCoffee} cups of coffee ${today}`
);

const questions = [
  "What's your name?",
  "Please input a number",
  "Please input another number",
];

const askQuestion = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(` > `);
};
askQuestion();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    askQuestion(answers.length);
  } else {
    process.exit();
  }
});
process.on("exit", () => {
  const [user, operand1, operand2] = answers;
  let today = new Date().toLocaleDateString();
  if (user === "Alice") {
    console.log(`Today is: ${today}`);
  }
  const sum = parseFloat(operand1 + operand2);
  const difference = parseFloat(operand1 - operand2);
  const quotient = parseFloat(operand1 / operand2);
  const product = parseFloat(operand1 * operand2);
  const remainder = parseFloat(operand1 % operand2);
  console.log(`Hello, ${user}.
  The numbers you input are ${operand1} and ${operand2}.
  The sum of both numbers is ${sum}.
  The difference of both number is ${difference}.
  The quotient of both numbers is ${quotient}.
  The product of both numbers is ${product}.
  The remainder of both numbers is ${remainder}.`);
});
