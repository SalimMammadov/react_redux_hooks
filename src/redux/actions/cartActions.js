import * as actionsType from './actionTypes'

export function addToCart(cartItem){
        return {
            type : actionsType.ADD_TO_CART,
            payload : cartItem,
        }
}

export function removeFromCart(cartItem){
    return {
        type : actionsType.REMOVE_FROM_CART,
        payload : cartItem,
    }
}