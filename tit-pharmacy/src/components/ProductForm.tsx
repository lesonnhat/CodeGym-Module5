import React, { useState, useEffect } from 'react';
import { addProduct, getCategories } from '../configs/axios.config';
import type { Product } from '../interfaces';
import './ProductForm.css'; // Import CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductForm: React.FC<{ onProductAdded: () => void }> = ({ onProductAdded }) => {
    const navigate = useNavigate(); // Khởi tạo useNavigate
    const [product, setProduct] = useState<Product>({
        id: '',
        name: '',
        category: '',
        quantity: 0,
        price: 0,
        dateAdded: '',
        description: '' // Khởi tạo description
    });
    const [categories, setCategories] = useState<string[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getCategories();
                const categoryNames = categoryData.map((cat: { name: string }) => cat.name);
                setCategories(categoryNames);
                console.log('Categories fetched:', categoryNames); // Debug
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Không thể tải danh sách thể loại!');
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!/PROD-\d{4}/.test(product.id)) {
            setError('Mã sp không đúng định dạng!');
            return;
        }

        if (new Date(product.dateAdded) > new Date()) {
            setError('Ngày nhập không được lớn hơn ngày hiện tại!');
            return;
        }

        if (product.quantity <= 0) {
            setError('Số lượng phải lớn hơn 0!');
            return;
        }

        try {
            await addProduct(product);
            onProductAdded();
            setProduct({ id: '', name: '', category: '', quantity: 0, price: 0, dateAdded: '', description: '' }); // Reset form
        } catch (error) {
            setError('Lỗi khi thêm sản phẩm!');
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Thêm mới sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Mã sản phẩm</label>
                    <input type="text" name="id" placeholder="Mã sp" required onChange={handleChange} value={product.id} />
                </div>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" name="name" placeholder="Tên sp" required onChange={handleChange} value={product.name} />
                </div>
                <div className="form-group">
                    <label>Thể loại</label>
                    <select name="category" onChange={handleChange} required value={product.category}>
                        <option value="">Chọn thể loại</option>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))
                        ) : (
                            <option value="" disabled>Đang tải...</option>
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label>Giá</label>
                    <input type="number" name="price" placeholder="Giá" required onChange={handleChange} value={product.price} />
                </div>
                <div className="form-group">
                    <label>Số lượng</label>
                    <input type="number" name="quantity" placeholder="Số lượng" required onChange={handleChange} value={product.quantity} />
                </div>
                <div className="form-group">
                    <label>Ngày nhập sản phẩm</label>
                    <input type="date" name="dateAdded" required onChange={handleChange} value={product.dateAdded} />
                </div>
                <div className="form-group">
                    <label>Mô tả sản phẩm</label>
                    <textarea name="description" placeholder="Mô tả sản phẩm" value={product.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-actions">
                    <button type="submit" className="submit-btn">Thêm mới</button>
                    <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Hủy</button> {/* Quay về trang danh sách sản phẩm */}
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default ProductForm;