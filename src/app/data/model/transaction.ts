export interface Transaction {
   description?: string;
   quantity?: number;
   price?: number;
}



export class TransactionFactory {
    static clone(old: Transaction): Transaction {
        const newTrans: Transaction = {};
        newTrans.description = old.description;
        newTrans.quantity = old.quantity;
        newTrans.price = old.price;
        return newTrans as Transaction;
    }
    static instOf(description: string, quantity: number, price: number) {
        const newTrans: Transaction = {};
        newTrans.description = description;
        newTrans.quantity = quantity;
        newTrans.price = price;
        return newTrans as Transaction;
    }
}