// create fibonacci series in iterative way.
function fibonacci(n) {
  fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const result = fibonacci(12);
console.log(result);

// create fibonacci series in recursive way.
function fibonacci1(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    const fibo = fibonacci1(n - 1);
    const nextElement = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextElement);
    return fibo;
  }
}
const result1 = fibonacci1(10);
console.log(result1);

// fibonacci in recursive way.
function fibonacci2(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
}
const result2 = fibonacci2(10);
console.log(result2);
