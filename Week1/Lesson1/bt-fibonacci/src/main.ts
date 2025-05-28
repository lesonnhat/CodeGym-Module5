function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const count: number = 10; // Số lượng số Fibonacci cần hiển thị
const fibonacciNumbers: number[] = [];

for (let i = 0; i < count; i++) {
    fibonacciNumbers.push(fibonacci(i));
}

let sum: number = 0;

for (const num of fibonacciNumbers) {
    sum += num;
}

console.log('Dãy số Fibonacci:', fibonacciNumbers);
console.log('Tổng các số Fibonacci:', sum);