export default class CartDTO {
    constructor(cart) {
        if(!cart) {
            throw new Error("El objeto cart es requerido");
        }
        this.products = Array.isArray(cart.products) ? cart.products : [];
    }
}




// export default class CartDTO {
//     constructor(cart) {
//         this.products = cart.products
//     }
// }