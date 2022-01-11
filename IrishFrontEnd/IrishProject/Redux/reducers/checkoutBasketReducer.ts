import { CHECKOUT_BASKET_BADGE } from "../actions/ActionTypes";

let checkoutBasketBadge = 0;

type Action = {type:string, payload: number}

export const checkoutBasketReducer = (state = checkoutBasketBadge, action:any) =>{
    switch(action.type) {
        case CHECKOUT_BASKET_BADGE:
            checkoutBasketBadge = action.payload;
            return{
                checkoutBasketBadge
            }
        default:
            return state;
    }
}