// function AddComponent(props) {
//     return (
//         <h1>Total: {props.firstNumber + props.secondNumber}</h1>
//     );
// }
//
// export default AddComponent;

import {Component} from "react";

class AddComponent extends Component {
    render() {
        const {firstNumber, secondNumber} = this.props;
        return (
            <h1>Total: {firstNumber + secondNumber}</h1>
        );
    }
}

export default AddComponent;