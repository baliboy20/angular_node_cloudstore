export interface Product {
    description?: string;
    price?: number;
    group?: string;
    categories?: string[];
    note?: string;
}

export class ProductFactory {
    static clone(existing: Product): Product {
        const newTrans: Product = {};
        newTrans.description = existing.description;
        newTrans.group = existing.group;
        newTrans.categories = existing.categories;
        newTrans.price = existing.price;
        newTrans.note = existing.note;
        return newTrans as Product;
    }
    static instOf(description?: string, group?: string, price?: number, categories?: string[], note?: string) {
        const newTrans: Product = {};
        newTrans.description = description || '';
        newTrans.group = group || '';
        newTrans.categories = categories || [];
        newTrans.price = price || null;
        newTrans.note = note || '';
        return newTrans as Product;
    }
}
