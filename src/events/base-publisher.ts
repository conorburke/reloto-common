import { Stan } from 'node-nats-streaming';

import { Subjects } from './subjects';

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Stan;

    constructor(client: Stan) {
        this.client = client;
    };

    // use Promise<void>becaue not really using resolve at all 
    publish(data: T['data']): Promise<void> {
        // incorporating a promise to use await in publisher class
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }

                console.log('Event published');
                resolve();
            });
        })

        
    };
}
