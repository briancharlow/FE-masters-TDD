export const add = (a, b) => {
    if(typeof a === 'string') a = Number(a);
    if(typeof b === 'string') b = Number(b);

    if(typeof a == 'boolean' || typeof b == 'boolean') {
        throw new Error("Input cannot be boolean");
    }
    if(Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b).join(",");
    }

    
    if(isNaN(a) || isNaN(b)) {
        throw new Error("Cannot convert input to number");
    }
    return a + b;
};

export const subtract = (a, b) => {
    if(Array.isArray(a)){
        a = a.reduce((a, b) => {
            return a - b;
        })
    }
    if(Array.isArray(b)){
        b = b.reduce((a, b) => {
            return a - b;
        })
    }
    return a - b;
};

export const multiply = (a, b) => {
    return a * b;
};

export const divide = (a, b) => {

    if(isNaN(a) || isNaN(b)) {
        throw new Error("Cannot convert input to number");
    }
    return a / b;
};
