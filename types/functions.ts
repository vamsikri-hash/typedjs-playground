
//declaring function with types
function sum (a: number, b: number) : number {
    return a+b;
}

console.log(sum(2,3));

type greet = {
    (name: string): string;
}

function greeting(fn: greet){
    return fn("hello");
}

console.log(greeting((name) => {return name;}));