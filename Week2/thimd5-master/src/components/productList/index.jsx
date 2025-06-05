import {useEffect, useState} from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ProductService from "../../service/product.service.js";

function ProductList() {

    const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
    const [loading, setLoading] = useState(false);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?"))
        ProductService.deleteProductById(id).then(res=>{
            toast.success("Product deleted successfully.");
            setLoading(!loading);
        })
    }

    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
               ProductService.searchProductsByName(keyword) .then(res => {
            setProducts(res.data);
        });
    }

    useEffect(() => {
        ProductService.getAllProducts().then(ren =>{
            setProducts(ren.data);
        })
    }, [loading]);

    return(
        <>
            <div>

                <input
                    type="text"
                    placeholder="Tìm Kiếm"
                    onChange={handleSearch}
                />

                <Link to="/products/create">
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg"></i> Create
                    </button>
                </Link>

                <table className="table">

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">category</th>
                        <th scope="col">name</th>
                        <th scope="col">stock</th>
                        <th scope="col">price</th>
                        <th scope="col">action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.length > 0 && products.map((product, index) => (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.category}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.price.toLocaleString()}₫</td>
                            <td>
                                <Link to={`/products/${product.id}`}>
                                <button type="button" className="btn btn-primary">Edit</button>
                                </Link>

                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(product.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList;