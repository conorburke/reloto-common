// subject is the name of a channel

export enum Subjects {
    ExpirationComplete = 'expiration:complete',
    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',
    PaymentCreated = 'payment:created',
    PictureCreated = 'picture:created',
    PictureDeleted = 'picture:deleted',
    ReviewCreated = 'review:created',
    ToolCreated = 'tool:created',
    ToolDeleted = 'tool:deleted',
    ToolUpdated = 'tool:updated',
}