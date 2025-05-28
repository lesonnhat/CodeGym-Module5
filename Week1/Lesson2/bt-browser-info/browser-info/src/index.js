import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const info = () => {
    root.render(
        <div>
            <h3>Browser's details: {navigator.userAgent}</h3>
        </div>
    )
}

// Gọi hàm info để render nội dung
info();