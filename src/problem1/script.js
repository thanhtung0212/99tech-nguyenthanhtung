const sumToNA = (n) => {
  return (n * (n + 1)) / 2;
};
const sumToNB = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
const sumToNC = (n) => {
  return n === 1 ? 1 : n + sumToNC(n - 1);
};

console.log(sumToNA(5));
console.log(sumToNB(5));
console.log(sumToNC(5));
