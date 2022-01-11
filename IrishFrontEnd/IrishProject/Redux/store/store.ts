import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { AppState } from '../types/types';
import reducer from '../reducers/reducer';

const initialState:AppState = {
    user: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        gender: "lad",
        cart: {
            numberOfItems: 0,
            totalPrice: 0,
        },
        favorites: []
    },
    menu: {
        menuNumber: 5,
        restaurantName: ""
    },
    checkoutBasketBadge: 0
}

export const configureStore = () => {
    const middleWare = [thunk];
    return createStore(reducer, initialState, applyMiddleware(...middleWare));
}

