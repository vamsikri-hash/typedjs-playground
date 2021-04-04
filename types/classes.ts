//simple class
class User {
    name: string;
    age: number;
};

var user = new User();
user.name =  "vamsi";
console.log(user.name);

// class with constructor

class School {
    name: string;
    city: string;

    constructor() {
        this.name = "ZPHS";
        this.city = "kundurru";
    }
};

var school = new School();
console.log(school.name,school.city)

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

class Hash {
    readonly totalFunctions: number;
    _salt = 0;
    constructor() {
        this.totalFunctions = 1;
    };

    set salt(salt: number) {
        this._salt=salt;
    }

    addSalt(value: number): number {
         return value+this._salt;
    };
};

var hash = new Hash();
console.log(hash.totalFunctions);
console.log(hash.addSalt(1));
hash.salt = 4;
console.log(hash.addSalt(1));