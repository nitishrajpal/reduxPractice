import * as actionTypes from './actionTypes';

const saveResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: value   
    }
}

export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value))
        }, 2000)
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};