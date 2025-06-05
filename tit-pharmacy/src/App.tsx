import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import type { Product, Category } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { getProducts, getCategories } from './configs/axios.config';
import './App.css'; // Import CSS

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data.products);

                const categoryData: Category[] = await getCategories();
                setCategories(categoryData.map(cat => cat.name));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? product.category === selectedCategory : true)
    );

    return (
        <div className="container">
            <h1>Quản lý sản phẩm</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Chọn thể loại</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button className="search-btn">Tìm kiếm</button>
            </div>
            <button className="add-button" onClick={() => navigate('/add')}>Thêm mới</button>
            <ProductList products={filteredProducts.length > 0 ? filteredProducts : products} />
        </div>
    );
};

export default App;