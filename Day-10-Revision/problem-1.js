// Print Fibonacci series

function FibonacciSeries(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);

        let next =a + b ;
        a = b;
        b = next

    }
}
FibonacciSeries(10)