import React from 'react';
import type { Product } from '../interfaces';

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>Mã sp</th>
                <th>Tên sp</th>
                <th>Thể loại</th>
                <th>Giá</th> {/* Đổi chỗ */}
                <th>Số lượng</th> {/* Đổi chỗ */}
                <th>Ngày nhập</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td> {/* Đổi chỗ */}
                    <td>{product.quantity}</td> {/* Đổi chỗ */}
                    <td>{new Date(product.dateAdded).toLocaleDateString('en-GB')}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ProductList;