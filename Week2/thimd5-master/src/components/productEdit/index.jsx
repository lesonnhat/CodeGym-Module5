import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useFormik } from "formik";

import { toast } from "react-toastify";
import ProductService from "../../service/product.service.js";

function ProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const productForm = useFormik({
        initialValues: {
            category: "",
            name: "",
            stock: 0,
            price: 0,
        },
        onSubmit: (values) => {
            ProductService.updateProduct(values, id).then(() => {
                toast.success("Update product successfully");
                navigate("/products");  // sửa lại đường dẫn cho đúng
            });
        }
    });

    useEffect(() => {
        ProductService.getProductById(id).then((res) => {
            productForm.setValues({
                category: res.data.category,
                name: res.data.name,
                stock: res.data.stock,
                price: res.data.price,
            });
        });
    }, [id]);

    return (
        <>
            <Card>
                <CardHeader title="Update product" />
                <CardContent>
                    <Box
                        component="form"
                        sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
                        noValidate
                        autoComplete="off"
                        onSubmit={productForm.handleSubmit}
                    >
                        <div>
                            <TextField
                                required
                                label="Category"
                                name="category"
                                type="text"
                                value={productForm.values.category}
                                onChange={productForm.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Name"
                                name="name"
                                type="text"
                                value={productForm.values.name}
                                onChange={productForm.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Stock"
                                name="stock"
                                type="number"
                                value={productForm.values.stock}
                                onChange={productForm.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                label="Price"
                                name="price"
                                type="number"
                                value={productForm.values.price}
                                onChange={productForm.handleChange}
                            />
                        </div>
                        <Button type="submit" variant="contained">
                            Update
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}

export default ProductEdit;
