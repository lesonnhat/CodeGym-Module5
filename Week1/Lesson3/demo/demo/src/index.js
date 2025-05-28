// -----------------------------------------------------
// Sử dụng Props

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Car from './Car';
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<Car />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.js';
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>);

// -----------------------------------------------------
// Truyền một biến

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";
//
// const headerProp = "Header from props...";
// const contentProp = "Content from props...";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<App headerProp={headerProp} contentProp={contentProp} />);

// -----------------------------------------------------
// Truyền một đối tượng

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";
//
// const article = {
//     headerProp: "Header from props...",
//     contentProp: "Content from props..."
// };
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<App article={article} />);

// -----------------------------------------------------
// Props mặc định

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.js';
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<App />);

// -----------------------------------------------------
// Xác thực Props

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.js';
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<App />);

// -----------------------------------------------------
// Ví dụ File App.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

setTimeout(() => {
    root.unmount();
}, 10000);