export interface Product {
    description?: string;
    price?: number;
    group?: string;
    category?: string;
    note?: string;
}

export class ProductFactory {
    static clone(existing: Product): Product {
        const newTrans: Product = {};
        newTrans.description = existing.description;
        newTrans.group = existing.group;
        newTrans.price = existing.price;
        return newTrans as Product;
    }
    static instOf(description?: string, group?: string, price?: number) {
        const newTrans: Product = {};
        newTrans.description = description;
        newTrans.group = group;
        newTrans.price = price;
        return newTrans as Product;
    }
}
