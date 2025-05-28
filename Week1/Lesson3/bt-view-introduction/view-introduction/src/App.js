// import './App.css';
// import {Component} from "react";
// import Title from "./components/Title";
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpand: true
//     };
//   }
//
//   handler = () => {
//     if (this.state.isExpand) {
//       this.setState({ isExpand: false });
//     }
//     else {
//       this.setState({ isExpand: true });
//     }
//   }
//
//   render() {
//     if (this.state.isExpand) {
//       return (
//           <>
//               <Title />
//               <button onClick={this.handler}>Xem giới thiệu</button>
//           </>
//       )
//     } else {
//       return (
//           <>
//               <Title />
//               <button onClick={this.handler}>Đóng giới thiệu</button>
//               <p>Nguyễn Thanh Tùng, thường được biết đến với nghệ danh Sơn Tùng M-TP, là một nam ca sĩ kiêm nhạc sĩ
//                   sáng tác bài hát, nhà sản xuất thu âm, rapper và diễn viên người Việt Nam.</p>
//               <img src={'https://byvn.net/hsGa'} alt={'Ảnh Sơn Tùng M-TP'} style={{ width: '100%' }} />
//           </>
//       )
//     }
//   }
// }
//
// export default App;

import './App.css';
import { useState } from "react";
import Title from "./components/Title";

function App() {
    const [isExpand, setIsExpand] = useState(true);

    const handler = () => {
        setIsExpand((prev) => !prev);
    };

    return (
        <>
            <Title />
            <button onClick={handler}>
                {isExpand ? 'Xem giới thiệu' : 'Đóng giới thiệu'}
            </button>
            {!isExpand && (
                <>
                    <p>
                        Nguyễn Thanh Tùng, thường được biết đến với nghệ danh Sơn Tùng M-TP, là một nam ca sĩ kiêm nhạc sĩ
                        sáng tác bài hát, nhà sản xuất thu âm, rapper và diễn viên người Việt Nam.
                    </p>
                    <img src={'https://byvn.net/hsGa'} alt={'Ảnh Sơn Tùng M-TP'} style={{ width: '100%' }} />
                </>
            )}
        </>
    );
}

export default App;