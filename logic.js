let logic = {};

logic.askQuestion = (questions, i) => {
  if (i === undefined) {
    i = 0;
  }
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(` > `);
};

logic.checkAlice = (user, today) => {
  if (user === "Alice") {
    console.log(`Today is: ${today}`);
  }
};

logic.moreQuestions = (answers, questions) => {
  if (answers.length < questions.length) {
    let i = answers.length;
    logic.askQuestion(questions, i);
  } else {
    process.exit();
  }
};

logic.calculations = (user, operand1, operand2) => {
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
};
exports.data = logic;
