function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var count = 10; // Số lượng số Fibonacci cần hiển thị
var fibonacciNumbers = [];
for (var i = 0; i < count; i++) {
    fibonacciNumbers.push(fibonacci(i));
}
var sum = 0;
for (var _i = 0, fibonacciNumbers_1 = fibonacciNumbers; _i < fibonacciNumbers_1.length; _i++) {
    var num = fibonacciNumbers_1[_i];
    sum += num;
}
console.log('Dãy số Fibonacci:', fibonacciNumbers);
console.log('Tổng các số Fibonacci:', sum);
