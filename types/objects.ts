type User = {
    name: string,
    age?: number,
    readonly id: string,
};

var user: User;
user = {
    name: "random",
    id: "23612U2sd",
};

user.age = 25;



interface Random<Type> {
    content: Type,
};

var randomInteger: Random<number> = {content: Math.floor(Math.random()*Math.floor(10))};
console.log(randomInteger.content);
const randomDb: Array<string> = ["abc","akjh","sqh","abcderf","akjhjdw","sqwqbdqh","sgdwjdqhw"];

var randomString: Random<string> = {content: randomDb[randomInteger.content-1]};
console.log(randomString.content);

