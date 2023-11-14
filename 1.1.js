// Declarative
const applyFunctionDeclarative = (numbers, transformFunction) => {
  return numbers.map(transformFunction);
};

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const squareFunction = (num) => num * num;

const resultDeclarative = applyFunctionDeclarative(
  numbersArray,
  squareFunction
);
console.log({ resultDeclarative });

// Imperative
const applyFunctionImperative = (numbers, transformFunction) => {
  const result = [];

  for (const num of numbers) {
    result.push(transformFunction(num));
  }

  return result;
};

// Example usage:

const resultImperative = applyFunctionImperative(numbersArray, squareFunction);
console.log({ resultImperative });
