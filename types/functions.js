//declaring function with types
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function greeting(fn) {
    return fn("hello");
}
console.log(greeting(function (name) { return name; }));
