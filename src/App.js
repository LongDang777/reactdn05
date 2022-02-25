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

      <StateDemo/>
      <ChangeFontSize/>
    </div>
  );
}

export default App;
