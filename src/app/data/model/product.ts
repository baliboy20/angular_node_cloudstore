export interface Product {
    id?: string;
    description?: string;
    price?: number;
    group?: string;
    categories?: string[];
    note?: string;
    color: string;
}

export class ProductFactory {
    static clone(existing: Product): Product {
        const newTrans: Product = {} as Product;
        newTrans.id = existing.id;
        newTrans.description = existing.description;
        newTrans.group = existing.group;
        newTrans.categories = existing.categories;
        newTrans.price = existing.price;
        newTrans.note = existing.note;
        newTrans.color = existing.color;
        return newTrans as Product;
    }
    static instOf(id?: string, description?: string, group?: string, price?: number, categories?: string[], note?: string) {
        const newTrans: Product = {} as Product;
        newTrans.id = id || '';
        newTrans.description = description || '';
        newTrans.group = group || '';
        newTrans.categories = categories || [];
        newTrans.price = price || null;
        newTrans.note = note || '';
        newTrans.color = '#fffb00';
        return newTrans as Product;
    }
}
