// -----------------------------------------------------
// Sử dụng Props

// import React from 'react';
//
// class App extends React.Component {
//   render() {
//     return (
//         <div>
//           <h1>{this.props.headerProp}</h1>
//           <h2>{this.props.contentProp}</h2>
//         </div>
//     );
//   }
// }
//
// export default App;

// -----------------------------------------------------
// Truyền một biến

// import React from 'react';
//
// function App(props) {
//     return (
//         <div>
//             <h1>{props.headerProp}</h1>
//             <h2>{props.contentProp}</h2>
//         </div>
//     );
// }
//
// export default App;

// -----------------------------------------------------
// Truyền một đối tượng

// import React from "react";
//
// const article = {
//     headerProp: "",
//     contentProp: ""
// };
//
// function App(props) {
//     return (
//         <div>
//             <h1>{props.article.headerProp}</h1>
//             <h2>{props.article.contentProp}</h2>
//         </div>
//     );
// }
//
// export default App;

// -----------------------------------------------------
// Props mặc định

// import React from 'react';
//
// function App(props) {
//     return (
//         <div>
//             <h1>{props.headerProp}</h1>
//             <h2>{props.contentProp}</h2>
//         </div>
//     );
// }
//
// App.defaultProps = {
//     headerProp: "Header from props...",
//     contentProp:"Content from props..."
// }
//
// export default App;

// -----------------------------------------------------
// Xác thực Props

// import React from "react";
// import PropTypes from "prop-types";
//
// function App(props) {
//     return (
//         <div>
//             <h3>Array: {props.propArray}</h3>
//             <h3>Bool: {props.propBool ? "True..." : "False..."}</h3>
//             <h3>Func: {props.propFunc(3)}</h3>
//             <h3>Number: {props.propNumber}</h3>
//             <h3>String: {props.propString}</h3>
//             <h3>Object: {props.propObject.objectName1}</h3>
//             <h3>Object: {props.propObject.objectName2}</h3>
//             <h3>Object: {props.propObject.objectName3}</h3>
//         </div>
//     );
// }
//
// App.propTypes = {
//     propArray: PropTypes.array.isRequired,
//     propBool: PropTypes.bool.isRequired,
//     propFunc: PropTypes.func,
//     propNumber: PropTypes.number,
//     propString: PropTypes.string,
//     propObject: PropTypes.object
// };
//
// App.defaultProps = {
//     propBool: true,
//     propFunc: function(e) {
//         return e;
//     },
//     propNumber: 1,
//     propString: "String value...",
//
//     propObject: {
//         objectName1: "objectValue1",
//         objectName2: "objectValue2",
//         objectName3: "objectValue3"
//     }
// };
//
// export default App;

// -----------------------------------------------------
// Thao tác với state trong ReactJS

// import React from 'react';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             header: "Header from state...",
//             content: "Content from state..."
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.header}</h1>
//                 <h2>{this.state.content}</h2>
//             </div>
//         );
//     }
// }
// export default App;

// -----------------------------------------------------
// Ví dụ File App.js

import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber() {
        this.setState({ data: this.state.data + 1 });
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    UNSAFE_componentWillMount() {
        console.log("Component WILL MOUNT!");
    }
    componentDidMount() {
        console.log("Component DID MOUNT!");
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        console.log("Component WILL RECIEVE PROPS!");
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Component WILL UPDATE!");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component DID UPDATE!");
    }
    componentWillUnmount() {
        console.log("Component WILL UNMOUNT!");
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default App;