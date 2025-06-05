export interface Product {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    dateAdded: string;
    description?: string; // Thêm tùy chọn
}

export interface Category {
    name: string;
    description: string;
}