function fizzBuzz(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    // (indexé à partir de 1)

    if (i % 3 === 0 && i % 5 === 0) {
      answer[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) {
      answer[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      answer[i - 1] = "Buzz";
    } else {
      // j'utilise template string pour convertir i en string
      answer[i - 1] = `${i}`;
    }
  }

  return answer;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
