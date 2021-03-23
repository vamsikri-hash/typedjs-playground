// if we compile with filename tsconfig.json is ignored!!!!

var count: number;
count = 343276;

var userName: string;
userName = "wbrqhrq";

var user: object
user = [];
user = {};


var isLoading: boolean;
isLoading = true;

var gen: object;

gen = {};
gen = null; // why null can be assigned to object


// why null and undefined works diff
/* var nullable: null;
nullable = undefined;

var notdefined: undefined;
notdefined = null; */


// trying out speicific types

/* var btcValue: bigint;

btcValue = 123n; */ // gives error because bigint is newly added feature if ES2020

//unions

var userId: number | string ;
userId = 121;
userId = "sample string";



//Arrays

var numberList: number[];
numberList = [1,2,3];

var numberListalter: Array<number>;
numberListalter = [12,132131,13133];

var userNames: string[];
userNames = ["vamsi","ajay"];

var userNamesalter: Array<string>;
userNamesalter = ["vamsi","ajay"];

// using type

type userObj = {
    name: string,
    age: number
}

var User: userObj;
User = {
    name: "vamsi",
    age: 20
};

User.name = "vamsi krishna"

console.log(User);

/* types can't be reopened to add new property ex: comment out to see error

type UserObj = {
    gender: string
}
 */

// interface can provide above flexibility

interface userObject {
    name: string,
    age: number
};
var newUser: userObject;

/* newUser = {
    name: "vamsi",           // this gives error because gender property is missing (gives error even after interface extension)
    age: 20
}; */

interface userObject {
    gender: string
};

/* newUser = {
    name: "vamsi",
    age: 20
}; */

newUser = {
    name: "vamsi",
    age: 20,
    gender: "male"
};
console.log(newUser);

// literal types

var litnum: 3;
//litnum = 4;   like const but with var

//literal interface

interface litobj {
    name: "vamsi"
};

var litobject: litobj;

/* litobject = {
    name: "krish"             // like a const obj
} */






