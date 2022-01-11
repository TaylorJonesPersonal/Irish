import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { checkoutBasketReducer } from './checkoutBasketReducer';
import { userReducer } from "./userReducer";

export default combineReducers({
    menu: menuReducer,
    checkoutBasketBadge: checkoutBasketReducer,
    user: userReducer,
    
})