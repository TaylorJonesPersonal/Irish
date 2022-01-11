import { IUser } from "../types/types";
import { GENDER, LOGIN } from "../actions/ActionTypes";
import { UPDATECART } from "../actions/ActionTypes";
import React from 'react';

let initialState: IUser = {
    id: -1,
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
};

type Action = {type: string, payload: IUser};

export const userReducer = (state: IUser = initialState, action: Action) => {
    switch(action.type){
        case LOGIN:
            initialState = action.payload;
            return {
                ...initialState
            }
            case GENDER:
                initialState = action.payload;
                return {
                    ...initialState
                }
            case UPDATECART:
            initialState = action.payload;
            return {
                ...initialState
            }
            default:
                return state;
    }
}