import { combineReducers } from 'redux';
import products from './products';
import balance from './balance';

const rootReducer = combineReducers({
    products,
    balance
});

export default rootReducer;