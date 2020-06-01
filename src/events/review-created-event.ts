import { Subjects } from './subjects';

export interface ReviewCreatedEvent {
    subject: Subjects.ReviewCreated;
    data: {
        id: string;
        version: number;
        title: string;
        comment: string;
        rating: number;
        creatorId: string;
        reviewedId: string;
    };
}