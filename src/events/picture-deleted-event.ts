import { Subjects } from './subjects';

export interface PictureDeletedEvent {
    subject: Subjects.PictureDeleted;
    data: {
        id: string;
        version: number;
        image?: string;
        toolId: string;
    };
}