import {
    INCREMENT_BALANCE,
    DECREMENT_BALANCE
} from '../constants/ActionTypes';

const initialState = {
    value: 8
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BALANCE:
            return {...state,
                value: state.value + action.payload
            };
        case DECREMENT_BALANCE:
            return {...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }
};

export default reducer;