/* eslint-disable @typescript-eslint/no-unused-vars */
import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit tests', ()=> {
    it("Should throw error when id is empty", ()=> {
        expect(()=> {
            const order = new Order("", "123", []);
        }).toThrow("Id is required");
    })
    
    it("Should throw error when customerId is empty", ()=> {
        expect(()=> {
            const order = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    })

    it("Should throw error when items is empty", ()=> {
        expect(()=> {
            const order = new Order("123", "123", []);
        }).toThrow("Items are required");
    })

    it("Should calculate total", ()=> {
        const order = new Order("123", "123", [
            new OrderItem("1", "Item 1", 100),
            new OrderItem("2", "Item 2", 200),
            new OrderItem("3", "Item 3", 300)
        ]);

        const total = order.total();

        expect(total).toBe(600);
    })
})