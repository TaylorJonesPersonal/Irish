
import { CHECKOUT_BASKET_BADGE, NEW_MENU } from "./ActionTypes";
import { menu } from "../types/types";

export const newMenu = (menuNumber: number, restaurantName: string) => (dispatch:any) =>{
    let newMenu: menu = {
        menuNumber: menuNumber,
        restaurantName: restaurantName
    }

    return dispatch({
        type: NEW_MENU,
        payload: newMenu
    })
}

export const checkoutBasketBadge = (props:number) => (dispatch:any) => {
    
    return dispatch({
        type: CHECKOUT_BASKET_BADGE,
        payload: props
    })
}