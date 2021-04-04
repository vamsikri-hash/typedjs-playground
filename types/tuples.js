// an Array kind of thing that keeps mixed data types.
var quest = function (pair) {
    var name = pair[0];
    var age = pair[1];
    console.log("Hey, Hello " + name + " and you are " + age + " years old right ?");
};
quest(["Ajay", 20]);
var printParams = function (params) {
    console.log(params[2] === undefined ? "Required param not exists" : params[2]);
};
printParams([1, 2, 0]);
printParams([1, 2]);
