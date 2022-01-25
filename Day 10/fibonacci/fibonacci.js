fib = (num) => {
  var result = [0, 1];

  for (let i = 0; i < num; i++) {
    const num1 = result[i];
    const num2 = result[i + 1];
    let sum = num1 + num2;

    result.push(sum);
  }
  console.log(result);
};

fib(5);
