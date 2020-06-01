import { Subjects } from './subjects';

export interface ToolDeletedEvent {
    subject: Subjects.ToolDeleted;
    data: {
        id: string;
        version: number;
        title?: string;
        category?: string;
        description?: string;
        price?: number;
        address1?: string;
        address2?: string;
        city?: string;
        region?: string;
        zipcode?: string;
        ownerId?: string;
        orderId?: string;
    };
}