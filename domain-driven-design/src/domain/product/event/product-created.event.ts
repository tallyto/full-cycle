/* eslint-disable @typescript-eslint/no-explicit-any */

import EventInterface from "../../@shared/event/event.interface";

export default class ProductCreatedEvent implements EventInterface {
    dateTimeOccurred: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}