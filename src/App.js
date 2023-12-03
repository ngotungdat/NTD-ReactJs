import './TetCountdown.css'; // Tạo một file TetCountdown.css để chứa các kiểu CSS
import './App.css';
import React, { useState, useEffect } from 'react';



const TetCountdown = () => {
  // Thời gian Tết âm lịch năm 2024
  const tetDate = new Date('2024-02-10T00:00:00Z');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = tetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const months = Math.floor(days / 30); // Số ngày chia cho 30 để tính số tháng

      return { months, days: days % 30, hours, minutes, seconds };
    } else {
      // Nếu đã qua Tết, trả về thời gian 0
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    // Clear interval khi component unmount
    return () => clearInterval(timer);
  }, []);

  const backgroundStyles = {
    backgroundColor: 'black',
    backgroundImage: 'url("https://tienphuoc.quangnam.gov.vn/webcenter/documentContent?dDocName=PORTAL470982")',
    backgroundSize: 'contain', // Sử dụng background-size: contain
    backgroundRepeat: 'no-repeat', // Tránh lặp lại hình ảnh
    backgroundPosition: 'center center', // Canh chỉnh hình ảnh vào giữa
  };
  return (
    <div className="center-content" style={backgroundStyles}>
      {timeLeft.months === 0 && timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <p>Tết đã đến!</p>
      ) : (
        <p>
          Còn {timeLeft.months} tháng, {timeLeft.days} ngày, {timeLeft.hours} giờ, {timeLeft.minutes} phút, {timeLeft.seconds} giây đến Tết âm lịch năm 2024!
        </p>
      )}
    </div>
  );
};

export default TetCountdown;
