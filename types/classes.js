//simple class
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
;
var user = new User();
user.name = "vamsi";
console.log(user.name);
// class with constructor
var School = /** @class */ (function () {
    function School() {
        this.name = "ZPHS";
        this.city = "kundurru";
    }
    return School;
}());
;
var school = new School();
console.log(school.name, school.city);
/*  compulsory constructor
class School {
    name: string;
    city: string;

    constructor(name: string, city: string) {
        this.name = string;
        this.city = city;
    }
};

console.log(new School()); // comment out to see error
*/
// readonly variables
var Hash = /** @class */ (function () {
    function Hash() {
        this._salt = 0;
        this.totalFunctions = 1;
    }
    ;
    Object.defineProperty(Hash.prototype, "salt", {
        set: function (salt) {
            this._salt = salt;
        },
        enumerable: false,
        configurable: true
    });
    Hash.prototype.addSalt = function (value) {
        return value + this._salt;
    };
    ;
    return Hash;
}());
;
var hash = new Hash();
console.log(hash.totalFunctions);
console.log(hash.addSalt(1));
hash.salt = 4;
console.log(hash.addSalt(1));
