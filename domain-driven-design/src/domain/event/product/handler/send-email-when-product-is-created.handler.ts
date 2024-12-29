import EventHandlerInterface from "../../shared/event-handler.interface";
import ProductCreatedEvent from "../producted-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log("Sending email to ....");
    }

}