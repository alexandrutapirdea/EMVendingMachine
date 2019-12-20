import {
    FETCH_PRODUCTS,
    BUY_PRODUCT,
} from '../constants/ActionTypes';

const initialState = {
    data: {},
    orderedProducts : []
};

const reducer = (state = initialState, action) => {
    console.log("WWW",action);
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log("FETCH_PRODUCTS_DONE",action);
            return {...state,
                data: [...action.payload],
            };
        case BUY_PRODUCT:
            console.log("state.data este",state.data);
            let selectedProduct = state.data.find(product => product.id === action.payload);
            selectedProduct.count --;
            console.log("selectedProduct",selectedProduct);
            return {...state,
                orderedProducts:[...state.orderedProducts,selectedProduct],
                data:[...state.data],
                selectedProduct:{
                    [action.payload]: {...selectedProduct,
                        count:  selectedProduct.count
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;