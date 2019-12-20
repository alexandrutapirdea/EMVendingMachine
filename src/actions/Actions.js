import {
    FETCH_PRODUCTS,
    INCREMENT_BALANCE,
    DECREMENT_BALANCE,
    BUY_PRODUCT,
} from '../constants/ActionTypes';

const products =
    [
        {
            'title': "Product1",
            "id": 67,
            "price": 2,
            "count": 5,
            "image": "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
        },
        {
            'title': "Product2",
            "id": 73,
            "price": 4,
            "count": 3,
            "image": "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
        },
        {
            'title': "Product3",
            "id": 81,
            "price": 9,
            "count": 2,
            "image": "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
        },
        {
            'title': "Product4",
            "id": 88,
            "price": 17,
            "count": 1,
            "image": "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
        },
        {
            'title': "Product5",
            "id": 90,
            "price": 28,
            "count": 2,
            "image": "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
        }
    ];

// get a list containing all the products
export const fetchProducts = () => {
return {
        type: FETCH_PRODUCTS,
        payload: products
    };
};

// increment balance with a specific amount
export const incrementBalance = amount => {
    return({
        type: INCREMENT_BALANCE,
        payload: amount
    });
};

// decrement balance with a specific amount
export const decrementBalance = amount => {
    return({
        type: DECREMENT_BALANCE,
        payload: amount
    });
};

// action triggered when user click on "buy it" button
export const buyProduct = id => {
            return({
                type: BUY_PRODUCT,
                payload: id
            });
};