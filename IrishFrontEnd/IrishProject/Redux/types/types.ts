export type AppState = {
    user: IUser,
    menu: any
    checkoutBasketBadge: any
}

export interface IUser {
    id: number,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    gender: String,
    cart: cart,
    favorites: Array<object>
}

export interface menu {
    restaurantName: string,
    menuNumber: number
}

export interface cart {
    numberOfItems: number,
    totalPrice: number,
}

