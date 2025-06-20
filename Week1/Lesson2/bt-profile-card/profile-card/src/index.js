import ReactDOM from 'react-dom/client';
import './index.css';

// Tạo element div với nội dung
const element = (
    <div className="container">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Ruma Khan</p>
                    <p className="text-sub">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);

// Khai báo biến root và khởi tạo
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render element vào UI
root.render(element);