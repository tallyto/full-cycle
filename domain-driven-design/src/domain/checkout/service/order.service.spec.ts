import Customer from "../../customer/entity/customer"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"
import Order from "@checkout/entity/order"

describe("Order service unit test", () => {

    it("should place an order", () => {
        const customer = new Customer("customer1", "customer1");
        const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

        const order = OrderService.placeOrder(customer, [item1])

        expect(customer.rewardPoints).toBe(5)
        expect(order.total()).toBe(10)
    })
    it("Should get total of all orders", () => {

        const item1 = new OrderItem("orderItem1", "orderItem1", 10, "product1", 1)
        const item2 = new OrderItem("orderItem2", "orderItem2", 20, "product2", 2)

        const order = new Order("order1", "customer1", [item1])

        const order2 = new Order("order1", "customer1", [item2])

        const total = OrderService.total([order, order2])

        expect(total).toBe(50)

    })
})