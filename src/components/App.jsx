import './App.scss';
import Header from './Header';
import {
  sun,
  LOGO_main,
  cloud_sm,
  cloud_xl,
  ufo,
  q_black,
  q_color,
  coin_black,
  coin_color,
  tree_black,
  tree_color,
  window,
} from './AllPng';
import { et, elf, ufo_gif } from './AllGif';
import { ufo_sm } from './AllSvg.js';
import ufo_inside1 from '../assets/SVG/ufo_inside.svg';
function App() {
  return (
    <div className="App">
      <div id="bg">
        <Header />
        <div className="shot1 h-[3840px] bg-red-500 bg-opacity-50">
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
          <button type="button" id="button_sm" />
        </div>
        {/* shot2 */}
        <div className="shot2 bg-blue-500 bg-opacity-50">
          <div className="ufo_wrapper">
            <img id="ufo_sm" src={ufo_sm} alt="ufo on screen" />
          </div>
          <div className="card_wrapper">
            {/*  FIXME:預設為黑色*/}
            <div className="img_wrapper">
              <img src={q_black} alt="question img on screen" />
              {/* <img src={q_color} alt="question img on screen" /> */}
              <p>羨慕別人的酷酷網頁動畫？</p>
            </div>
            <div className="img_wrapper">
              <img src={coin_black} alt="coin img on screen" />
              {/* <img src={coin_color} alt="coin img on screen" /> */}
              <p>滿足不了同事的許願？</p>
            </div>
            <div className="img_wrapper">
              <img src={tree_black} alt="tree img on screen" />
              {/* <img src={tree_color} alt="tree img on screen" /> */}
              <p>動畫技能樹太雜無從下手？</p>
            </div>
          </div>
        </div>
        {/* shot3 */}
        <div className="shot3 bg-green-500 bg-opacity-50 ">
          <div className="text-bg">
            <span>互動式網頁設計</span>
          </div>
          <div className="w-full px-12 flex justify-between">
            <img src={window} alt="window on screen" />
            <img src={window} alt="window on screen" />
          </div>
        </div>
        {/* shot4 */}
        <div className="shot4">
          <div className="w-full px-12 flex justify-between">
            <img src={window} alt="window on screen" />
            <img src={window} alt="window on screen" />
          </div>
          <div className="flex items-center">
            <p className="w-[370px] h-[133px] bg-black rounded-xl text-white text-center leading-[133px] text-4xl">
              *&@&%#&#
            </p>
            <div className="triangle" />
          </div>
        </div>
        {/* end */}
        <div className="shot-end">
          <button type="button" id="button_xl" />
          <a href="#bg" id="ufo_backbtn" className="w-[149px] h-[122px]">
            <img src={ufo_sm} alt="ufo on screen" />
            <span className="text-xl text-white">BACK TO TOP</span>
          </a>
        </div>
        <footer id="footer">
          <span>Copyright ©2022 炙燒三重奏.All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
export default App;
