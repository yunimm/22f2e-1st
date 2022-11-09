import './App.scss';
import Header from './Header';
import { sun, LOGO_main, cloud_sm, cloud_xl, ufo } from './AllPng';
import { et, elf } from './AllGif';
function App() {
  return (
    <div className="App">
      <div id="bg">
        <Header />
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

        {/* end */}
        <div>
          <button type="button" id="button_sm" />
        </div>
        <footer id="footer">
          <span>Copyright ©2022 炙燒三重奏.All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
export default App;
