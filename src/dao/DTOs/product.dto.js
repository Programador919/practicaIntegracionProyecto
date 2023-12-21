export default class ProductDTO {
    constructor(product) {
        this.title = product.title
        this.description = product.description
        this.image = product.image
        this.price = product.price
        this.stock = product.stock
        this.category = product.category
        this.availability = product.availability
    }
}
