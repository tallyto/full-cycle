/* eslint-disable @typescript-eslint/no-unused-vars */
import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit tests', () => {
    it("Should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("", "123", []);
        }).toThrow("Id is required");
    })

    it("Should throw error when customerId is empty", () => {
        expect(() => {
            const order = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    })

    it("Should throw error when items is empty", () => {
        expect(() => {
            const order = new Order("123", "123", []);
        }).toThrow("Items are required");
    })

    it("Should calculate total", () => {

        const orderItem1 = new OrderItem("1", "Item 1", 100, "p1", 2);
        const orderItem2 = new OrderItem("2", "Item 2", 200, "p2", 2);

        const order = new Order("123", "123", [
            orderItem1
        ]);

        expect(order.total()).toBe(200);

        const order2 = new Order("order2", "customer2", [orderItem1, orderItem2])

        expect(order2.total()).toBe(600)
    })

    
    it("Should throw error if the item qtd is less or equal than zero", () => {
        expect(() => {
            const orderItem1 = new OrderItem("1", "Item 1", 100, "p1", 0);
            const order = new Order("123", "123", [orderItem1]);
        }).toThrow("Quantity must be greater than 0")
    })
})