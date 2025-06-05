import React from "react";
import {
    Card, CardContent, CardHeader, Box, TextField, Button
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import ProductService from "../../service/product.service.js"; // Bạn cần tạo file này

function ProductCreate() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: "",
            category: "",
            name: "",
            stock: "",
            price: ""
        },
        validationSchema: Yup.object({
            id: Yup.string().required("ID là bắt buộc"),
            category: Yup.string().required("Loại sản phẩm là bắt buộc"),
            name: Yup.string().required("Tên sản phẩm là bắt buộc").min(2, "Tên sản phẩm phải có ít nhất 2 ký tự"),
            stock: Yup.number().required("Số lượng tồn kho là bắt buộc").integer("Phải là số nguyên").min(0, "Không thể nhỏ hơn 0"),
            price: Yup.number().required("Giá là bắt buộc").min(0, "Giá không thể âm"),
        }),
        onSubmit: values => {
            const productData = { ...values };

            ProductService.createProduct(productData).then(() => {
                toast.success("Tạo sản phẩm thành công");
                navigate("/products");
            }).catch(() => {
                toast.error("Tạo sản phẩm thất bại");
            });
        }
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ width: 500, p: 3 }}>
                <CardHeader title="Create Product" sx={{ textAlign: "center" }} />
                <CardContent>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            label="ID"
                            name="id"
                            fullWidth
                            required
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            error={formik.touched.id && Boolean(formik.errors.id)}
                            helperText={formik.touched.id && formik.errors.id}
                        />

                        <TextField
                            label="Loại sản phẩm"
                            name="category"
                            fullWidth
                            required
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            helperText={formik.touched.category && formik.errors.category}
                        />

                        <TextField
                            label="Tên sản phẩm"
                            name="name"
                            fullWidth
                            required
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <TextField
                            label="Tồn kho"
                            name="stock"
                            fullWidth
                            required
                            type="number"
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            error={formik.touched.stock && Boolean(formik.errors.stock)}
                            helperText={formik.touched.stock && formik.errors.stock}
                        />

                        <TextField
                            label="Giá (VND)"
                            name="price"
                            fullWidth
                            required
                            type="number"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Create Product
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductCreate;
