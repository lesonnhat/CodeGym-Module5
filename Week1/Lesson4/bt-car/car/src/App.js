import {useState} from "react";

const carList = ["Mercedes S600", "BMW 330i Sport", "Audi A7"];
const colorList = ["Black", "White", "Grey"];

function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],      // Phần tử đầu tiên trong danh sách xe
    color: colorList[0],  // Phần tử đầu tiên trong danh sách màu sắc
  });

  // Hàm xử lý sự kiện chọn xe
  const handleCarChange = (event) => {
    setSelectedCar(prevState => ({
      ...prevState,
      car: event.target.value,
    }));
  };

  // Hàm xử lý sự kiện chọn màu
  const handleColorChange = (event) => {
    setSelectedCar(prevState => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>Select your car</h1>
        <label>
          Select a car:
          <select value={selectedCar.car} onChange={handleCarChange}>
            {carList.map((car, index) => (
                <option key={index} value={car}>{car}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select a color:
          <select value={selectedCar.color} onChange={handleColorChange}>
            {colorList.map((color, index) => (
                <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <h2>
          You selected a {selectedCar.color} – {selectedCar.car}
        </h2>
      </div>
  );
}

export default App;