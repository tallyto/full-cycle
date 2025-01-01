import { Sequelize } from "sequelize-typescript";
import Address from "../../customer/value-object/address";
import Customer from "../../customer/entity/customer";
import Product from "../../product/entity/product";
import CustomerModel from "../../../infra/db/sequelize/model/customer.model";
import OrderItemModel from "../../../infra/db/sequelize/model/order-item.model";
import OrderModel from "../../../infra/db/sequelize/model/order.model";
import ProductModel from "../../../infra/db/sequelize/model/product.model";
import CustomerRepository from "../../customer/repository/customer.repository";
import OrderItem from "@checkout/entity/order_item";
import Order from "@checkout/entity/order";
import OrderRepository from "./order.repository";
import ProductRepository from "@product/repository/product.repository";

describe("Customer repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        })

        sequelize.addModels([OrderModel, CustomerModel, OrderItemModel, ProductModel])

        await sequelize.sync()
    })

    afterEach(async () => {
        await sequelize.close()
    })

    it("should create a new order", async () => {

        const customerRepository = new CustomerRepository()
        const customer = new Customer("1", "Customer 1")
        const address = new Address("Street 1", 1, "Zipcode 1", "City 1")
        customer.changeAddress(address)

        await customerRepository.create(customer)

        const productRepository = new ProductRepository()
        const product = new Product("1", "Product 1", 10)
        await productRepository.create(product)

        const orderItem = new OrderItem("1", product.name, product.price, product.id, 2)

        const order = new Order("1", "1", [orderItem])
        const orderRepository = new OrderRepository()
        await orderRepository.create(order)

        const orderModel = await OrderModel.findOne({
            where: { id: order.id },
            include: ["items"]
        })

        expect(orderModel.toJSON()).toStrictEqual({
            id: "1",
            customer_id: "1",
            total: order.total(),
            items: [
                {
                    id: orderItem.id,
                    name: orderItem.name,
                    price: orderItem.price,
                    product_id: orderItem.productId,
                    quantity: orderItem.quantity,
                    order_id: "1"
                }
            ]
        })

    })


})