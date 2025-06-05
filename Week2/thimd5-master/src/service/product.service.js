    import {axiosInstance} from "../configs/axios.config.js";

    class ProductService {
        static async getAllProducts() {
            return await axiosInstance.get("/products")
        }
        static async deleteProductById(id) {
            return await axiosInstance.delete(`/products/${id}`)
        }
        static async searchProductsByName(name) {
            return await axiosInstance.get(`/products?name_like=${name}`)
        }
        static async createProduct(data) {
            return await axiosInstance.post(`/products`, data)
        }
        static async getProductById(id) {
            return await axiosInstance.get(`/products/${id}`);
        }

        static async updateProduct(data, id) {
            return await axiosInstance.put(`/products/${id}`, data);
        }
    }
    export default ProductService;