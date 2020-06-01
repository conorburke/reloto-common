import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        version: number;
        status?: OrderStatus;
        customerId?: string;
        // use a string for now even though datetime
        expiresAt?: string;
        tool: {
            id: string;
        }
    }
}