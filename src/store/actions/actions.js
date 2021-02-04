export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD_VALUE';
export const SUBTRACT = 'SUBTRACT_VALUE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value: value
    }
};

export const storeResult = (value) => {
    return {
        type: STORE_RESULT,
        result: value
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
};