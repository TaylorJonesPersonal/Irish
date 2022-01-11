import { NEW_MENU } from "../actions/ActionTypes";
import { menu } from "../types/types";

let initialState: menu = {
    menuNumber: 0,
    restaurantName: ""
}

type Action = {type:string, payload: menu}

export const menuReducer = (state:menu = initialState, action:Action) =>{
    switch(action.type) {
        case NEW_MENU:
            initialState = action.payload;
            return{
                ...initialState
            }
        default:
            return state;
    }
}
