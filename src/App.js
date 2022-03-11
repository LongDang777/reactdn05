import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent.js';
import ClassComponent from './Components/ClassComponent.js'
import HomeComponent from './Components/BaiTapComponent/HomeComponent.js';
import DataBinding from './DataBinding/DataBinding.js';
import HandleEvent from './HandleEvent/HandleEvent.js';
import StyleComponent from './StyleComponent/StyleComponent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import DemoCar from './StateDemo/DemoCar/DemoCar';
import HomePage from './Props/HomePage';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import ShoesStore from './Props/ShoesStore/ShoesStore';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import BTGioHang from './Props/BTGioHang/BTGioHang';
import BTGioHangRedux from './Redux/BTGioHang/BTGioHangRedux';

//App là component chính của dự án
//các component khác sẽ được thêm thông qua App
function App() {
  return (
    <div className="App container">
      {/* hello dn05
      <FunctionComponent/>
      <FunctionComponent/>
      <FunctionComponent/>
      <FunctionComponent></FunctionComponent>
      <ClassComponent/> */}
      {/* <HomeComponent/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}

      {/* <StyleComponent/>
      <p>Ahhihihi</p>
      <h1 className='styleText'>Demo style Component App</h1> */}

      {/* <StateDemo/>
      <ChangeFontSize/> */}

      {/* <DemoCar/> */}

      {/* <HomePage/> */}

      {/* <RenderWithMap/> */}

      {/* <ShoesStore/> */}
      {/* <BTXemChiTiet/> */}

      {/* <ExerciseCarStore/> */}

      {/* <BTGioHang/> */}

     <BTGioHangRedux/>

    </div>
  );
}

export default App;
