// if we compile with filename tsconfig.json is ignored!!!!
var count;
count = 343276;
var userName;
userName = "wbrqhrq";
var user;
user = [];
user = {};
var isLoading;
isLoading = true;
var gen;
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
var userId;
userId = 121;
userId = "sample string";
//Arrays
var numberList;
numberList = [1, 2, 3];
var numberListalter;
numberListalter = [12, 132131, 13133];
var userNames;
userNames = ["vamsi", "ajay"];
var userNamesalter;
userNamesalter = ["vamsi", "ajay"];
var User;
User = {
    name: "vamsi",
    age: 20
};
User.name = "vamsi krishna";
console.log(User);
;
var newUser;
;
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
var litnum;
;
var litobject;
/* litobject = {
    name: "krish"             // like a const obj
} */
