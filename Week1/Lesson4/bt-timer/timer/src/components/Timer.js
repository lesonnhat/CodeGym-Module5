import React, { useState, useEffect } from 'react';

function Timer() {
    // Khởi tạo state timer với giá trị = 10
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        // Thiết lập interval để giảm giá trị timer mỗi giây
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval); // Dừng interval khi timer về 0
                    alert("Time's up"); // Hiển thị alert khi hết thời gian
                    return 0; // Đảm bảo timer không xuống dưới 0
                }
                return prevTimer - 1; // Giảm timer
            });
        }, 1000);

        // Clean up effect
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Count down from {timer}</h1>
        </div>
    );
}

export default Timer;