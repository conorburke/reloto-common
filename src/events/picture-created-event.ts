import { Subjects } from './subjects';

export interface PictureCreatedEvent {
    subject: Subjects.PictureCreated;
    data: {
        id: string;
        version: number;
        image: string;
        toolId: string;
    };
}