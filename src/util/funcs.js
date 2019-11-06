export const getCartFromLocalStorage = () => {
    const cartString = localStorage.getItem('cart')
    return JSON.parse(cartString)
}