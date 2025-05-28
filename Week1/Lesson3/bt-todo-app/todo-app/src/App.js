import {Component} from "react";
import Title from "./Title";

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      list: [],
      item: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    })
  }

  handleAddItem = () => {
    const { item, list } = this.state;
    if (item.length > 0) {
      this.setState({
        list: [...list, item], // Thêm item vào list
        item: '' // Reset input sau khi thêm
      })
    }
  }

  render() {
    return (
        <div className="App">
          <Title />
          <input
              type="text"
              value={this.state.item}
              onChange={this.handleChange} // Lắng nghe sự thay đổi của input
              placeholder="Add a new item"
          />
          <button onClick={this.handleAddItem}>Add</button> {/* Nút Add */}
          <ul>
            {this.state.list.map((item, index) => ( // Tạo danh sách từ list
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    );
  }
}

export default App;