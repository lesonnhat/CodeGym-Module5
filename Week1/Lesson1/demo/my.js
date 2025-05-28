// // Ví dụ: Lập trình bất đồng bộ với Callback
//
// // Hàm giả lập lấy dữ liệu từ một API
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: 'John Doe' }; // Dữ liệu giả lập
//         callback(data); // Gọi callback với dữ liệu
//     }, 2000); // Giả lập độ trễ 2 giây
// }
//
// // Sử dụng hàm fetchData
// fetchData((result) => {
//     console.log('Dữ liệu đã được lấy:', result);
// });

// -------------------------------------------------------------

// Ví dụ Callback Hell

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: 'John Doe' };
//         callback(data);
//     }, 1000);
// }
//
// fetchData((user) => {
//     console.log('User:', user);
//     fetchData((userDetails) => {
//         console.log('User Details:', userDetails);
//         fetchData((userPosts) => {
//             console.log('User Posts:', userPosts);
//             // Lồng nhiều callback, khó đọc
//             fetchData((userComments) => {
//                 console.log('User Comments:', userComments);
//             });
//         });
//     });
// });

// -------------------------------------------------------------

// Promises

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'John Doe' };
//             resolve(data); // Đưa dữ liệu vào resolve
//         }, 2000);
//     });
// }
//
// fetchData().then((result) => {
//     console.log('Dữ liệu đã được lấy:', result);
// });
//
// // -------------------------------------------------------------
//
// Async/Await

async function getData() {
    const data = await fetchData(); // Gọi hàm fetchData
    console.log('Dữ liệu đã được lấy:', data);
}

getData();