import axios from 'axios';
import type { Product, Category } from '../interfaces';

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3000'
});

interface DataResponse {
    products: Product[];
    categories: Category[];
}

export const getProducts = async (): Promise<DataResponse> => {
    const response = await instanceAxios.get('/products');
    return { products: response.data, categories: [] }; // Backend chỉ trả về products, categories có thể cần API riêng
};

export const getCategories = async (): Promise<Category[]> => {
    const response = await instanceAxios.get('/categories');
    return response.data;
};

export const addProduct = async (product: Product): Promise<Product[]> => {
    await instanceAxios.post('/products', product);
    const response = await instanceAxios.get('/products');
    return response.data;
};

export default instanceAxios;