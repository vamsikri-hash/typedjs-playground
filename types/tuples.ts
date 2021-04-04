// an Array kind of thing that keeps mixed data types.

type nameAndage = [string, number];


const quest = (pair: nameAndage): void => {
    const name = pair[0];
    const age = pair[1];
    console.log(`Hey, Hello ${name} and you are ${age} years old right ?`);
};

quest(["Ajay",20]);

// optional property

type getParamsTypes = [number, number, number?];

const printParams = (params: getParamsTypes): void => {
    console.log(params[2] === undefined ? "Required param not exists" : params[2]);
};

printParams([1,2,0]);
printParams([1,2]);
