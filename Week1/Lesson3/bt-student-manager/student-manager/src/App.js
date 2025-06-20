import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      form: { name: "", phone: "", email: "" },
      isValid: false,
      indexSelected: -1
    }
  }

  handleChange = (event) => {
    this.setState((state) => {
      const form = { ...state.form, [event.target.name]: event.target.value };
      return { form };
    }, () => this.checkInvalidForm());
  }

  handleSelect = (studentSelected, index) => {
    this.setState({
      form: { ...studentSelected },
      indexSelected: index
    });
  }

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({ isValid: value });
  }

  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = [...this.state.students]; // Sao chép danh sách sinh viên
      if (this.state.indexSelected > -1) {
        // Cập nhật sinh viên
        newList[this.state.indexSelected] = this.state.form; // Cập nhật thông tin sinh viên
      } else {
        // Thêm sinh viên mới
        newList.push(this.state.form);
      }
      this.setState({
        students: newList,
        form: { name: "", phone: "", email: "" }, // Reset form
        indexSelected: -1
      });
    }
  }

  handleDelete = (index) => {
    const newList = this.state.students.filter((_, i) => i !== index);
    this.setState({ students: newList });
  }

  render() {
    const { students, form } = this.state;
    return (
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" value={form.email} onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                    <button onClick={() => this.handleDelete(index)}>Delete</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;