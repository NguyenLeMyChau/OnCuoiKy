export function handlePlus(inputOne, inputTwo) {
    return {
        type: 'plus',
        payload: {inputOne, inputTwo}
    };
};

export function handleMinus(inputOne, inputTwo) {
    return {
        type: 'minus',
        payload: {inputOne, inputTwo}
    };
};


export function handleMultiply(inputOne, inputTwo) {
    return {
        type: 'multiply',
        payload: {inputOne, inputTwo}
    };
};

export function handleDivide(inputOne, inputTwo) {
    return {
        type: 'divide',
        payload: {inputOne, inputTwo}
    };
};