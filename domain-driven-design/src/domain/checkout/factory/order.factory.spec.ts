import { v4 as uuid } from "uuid";
import OrderFactory from "./order.factory";
describe("Order factory unit test", () => {
    it("should create an order", () => {
        const orderProps = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    name: "Product 1",
                    productId: uuid(),
                    price: 100,
                    quantity: 1
                },
                {
                    id: uuid(),
                    name: "Product 2",
                    productId: uuid(),
                    price: 200,
                    quantity: 2
                }
            ]
        }

        const order = OrderFactory.create(orderProps);
        expect(order.id).toBe(orderProps.id);
        expect(order.customerId).toBe(orderProps.customerId);
        expect(order.items.length).toBe(2);
    })

})