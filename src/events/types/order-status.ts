export enum OrderStatus {
    //When the order has been created but the tool it is trying to order has not been reserved
    Created = 'create',
    //When the tool the order is trying to reserve has been reserved or when the user cancel's the order or runs out of time
    Cancelled = 'cancelled',
    //When the order has reserved the tool
    AwaitingPayment = 'awaiting:payment',
    //When the order reserved the tool and the user provided payment
    Complete = 'complete'
}