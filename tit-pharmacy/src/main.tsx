import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import ProductForm from './components/ProductForm';
import ReactDOM from 'react-dom/client';
import React from "react";

const AddProductPage: React.FC = () => {
    const navigate = useNavigate();

    const handleProductAdded = () => {
        navigate('/'); // Quay lại trang chính để làm mới danh sách
    };

    return <ProductForm onProductAdded={handleProductAdded} />;
};

const Main: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add" element={<AddProductPage />} />
        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);