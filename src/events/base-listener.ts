import { Message, Stan } from 'node-nats-streaming';

import { Subjects } from './subjects';
import { Event } from './event';

export abstract class Listener<T extends Event> {
    // abstract subject: string;
    abstract subject: T['subject']
    abstract queueGroupName: string;
    // abstract onMessage(data: any, msg: Message): void;
    abstract onMessage(data: T['data'], msg: Message): void;

    // changed this from private to protected so that subclasses can change it
    protected client: Stan;
    // subclass can define protected if wanted
    protected ackWait = 5 * 1000;

    constructor(client: Stan) {
        this.client = client;
    }

    subscriptionOptions() {
        return this.client 
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }

    listen() {
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupName,
            this.subscriptionOptions()
        );

        subscription.on('message', (msg: Message) => {
            console.log(
                `Message received: ${this.subject} / ${this.queueGroupName}`
            );

            const parsedData = this.parseMessage(msg);
            this.onMessage(parsedData, msg);
        })
    }

    parseMessage(msg: Message) {
        const data = msg.getData();
        return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf8'));
    }
}

