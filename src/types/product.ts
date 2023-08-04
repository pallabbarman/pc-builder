export enum ProductStatus {
    IN_STOCK = 'In Stock',
    OUT_STOCK = 'Out of stock',
}

export interface Product {
    _id: string;
    image: string;
    product_name: string;
    category: string;
    price: number;
    status: ProductStatus;
    rating: number;
}
