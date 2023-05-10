export const fizzBuzzRule = (initialNumber: number, finalNumber: number) => {
  const pushedNumbers: number | string[] = [];
  for (let index: any = initialNumber; index <= finalNumber; index++) {
    pushedNumbers.push(index);

    if (index % 3 === 0) {
      pushedNumbers.pop();
      pushedNumbers.push("Fizz");
    }

    if (index % 5 === 0) {
      pushedNumbers.pop();
      pushedNumbers.push("Buzz");
    }

    if (index % 3 === 0 && index % 5 === 0) {
      pushedNumbers.pop();
      pushedNumbers.push("FizzBuzz");
    };
  };

  return pushedNumbers;
};
