/* eslint-disable @typescript-eslint/no-unused-vars */
import Order from "@checkout/entity/order";
import OrderItemModel from "../../../infra/db/sequelize/model/order-item.model";
import OrderModel from "../../../infra/db/sequelize/model/order.model";
import OrderRepositoryInterface from "./order-repository.interface";

export default class OrderRepository implements OrderRepositoryInterface {
    update(entity: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(id: string): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Order[]> {
        throw new Error("Method not implemented.");
    }
    async create(entity: Order): Promise<void> {
        await OrderModel.create({
            id: entity.id,
            customer_id: entity.id,
            total: entity.total(),
            items: entity.items.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity
            }))
        },
            { include: [{ model: OrderItemModel }] })
    }


}

