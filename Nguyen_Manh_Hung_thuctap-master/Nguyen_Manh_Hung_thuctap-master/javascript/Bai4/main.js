// #3

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// console.log(factorial(0));

// #4

function sum(n) {
   if ( n === 1) {
    return 1;
   }
   return n + sum(n-1)
}

// console.log(sum(3));

