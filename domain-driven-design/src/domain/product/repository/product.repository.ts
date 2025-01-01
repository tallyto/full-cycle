import ProductModel from "@infra/db/sequelize/model/product.model"
import ProductRepositoryInterface from "./product-repository.interface"
import Product from "@product/entity/product"


export default class ProductRepository implements ProductRepositoryInterface {
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price
        })
    }

    async find(id: string): Promise<Product> {

        const productModel = await ProductModel.findOne({
            where: { id: id }
        })

        return new Product(productModel.id, productModel.name, productModel.price)

    }

    async findAll(): Promise<Product[]> {

        const foundProducts = await ProductModel.findAll()
        return foundProducts.map(product => new Product(product.id, product.name, product.price))

    }

    async update(entity: Product): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price
        }, {
            where: {
                id: entity.id
            }
        })
    }
}