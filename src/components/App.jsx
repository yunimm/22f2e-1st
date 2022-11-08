import './App.css';
import { sun, LOGO_main, LOGO_header, cloud_sm, cloud_xl, ufo } from './AllPng';
import { et, elf } from './AllGif';
function App() {
  return (
    <div className="App">
      <div id="bg">
        <div className="px-10 flex items-center justify-between" id="header">
          <img className="" src={LOGO_header} alt="logo on screen" />
          <div className="text-white tex-xl flex gap-8">
            <a href="http://">關卡資訊</a>
            <a href="http://">活動說明</a>
            <a href="http://">獎項設計</a>
          </div>
        </div>
        <img id="sun" src={sun} alt="sun on screen" />
        <img id="logo_main" src={LOGO_main} alt="logo on screen" />
        <img id="cloud_sm" src={cloud_sm} alt="cloud on screen" />
        <img id="cloud_xl" src={cloud_xl} alt="cloud on screen" />
        <div id="ufo_wrapper">
          <div className="relative">
            <img id="ufo" src={ufo} alt="ufo on screen" />
            <img id="et" src={et} alt="et on screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
