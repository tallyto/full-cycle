import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"

describe("Order service unit test", ()=> {
    it("Should get total of all orders", ()=> {

        const item1 = new OrderItem("orderItem1", "orderItem1", 10, "product1", 1)
        const item2 = new OrderItem("orderItem2", "orderItem2", 20, "product2", 2)

        const order = new Order("order1", "customer1", [item1])
        
        const order2 = new Order("order1", "customer1", [item2])
        
        const total = OrderService.total([order, order2])

        expect(total).toBe(50)

    })
})