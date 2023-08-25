export enum ProductStatus {
    IN_STOCK = 'In Stock',
    OUT_STOCK = 'Out of stock',
}

export interface Review {
    review: string;
    name: string;
    email: string;
    image: string;
}

export interface Product {
    _id: string;
    image: string;
    name: string;
    category: string;
    price: number;
    status: ProductStatus;
    key_features: string[];
    inv_rating: number;
    avg_rating: number;
    description: string;
    reviews: Review[];
}
