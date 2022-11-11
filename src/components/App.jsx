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
        </div>

        {/* shot4 */}
        <div className="shot4">
          <div className="flex items-center">
            <p className="w-[370px] h-[133px] bg-black rounded-xl text-white text-center leading-[133px] text-4xl">
              *&@&%#&#
            </p>
            <div className="triangle" />
          </div>
        </div>

        {/* shot5 */}
        <div className="shot5">
          <div class="bg-img" />
          <ul className="flex justify-center items-center bg-[#eeeeee]">
            <li className="card">
              <h3>Week1</h3>
              <img alt="git on screen" />
              <h4>The F2E 活動網站設計</h4>
              <button>視差滾動</button>
              <h4># 版塊設計</h4>
              <a href="https://">點我看更多</a>
            </li>
            <li className="card">
              <h3>Week1</h3>
              <img alt="git on screen" />
              <h4>The F2E 活動網站設計</h4>
              <button>視差滾動</button>
              <h4># 版塊設計</h4>
              <a href="https://">點我看更多</a>
            </li>
            <li className="card">
              <h3>Week1</h3>
              <img alt="git on screen" />
              <h4>The F2E 活動網站設計</h4>
              <button>視差滾動</button>
              <h4># 版塊設計</h4>
              <a href="https://">點我看更多</a>
            </li>
          </ul>
        </div>

        {/* shot6+7 */}
        {/* 3page 960*2 + 1643 */}
        <div className="shot6 bg-orange-500 bg-opacity-50">
          <div className="bg-img">
            <img id="ufo_sm" src={ufo_sm} alt="ufo on screen" />
            <p>報名時間10/13~10/30 截止前可修改報名組別</p>
            <p>
              登錄作品10/31~11/28 依賽程登錄作品 10/31(一)
              UI、團體組開賽;11/7(一) 前端組開賽
            </p>
            <p>
              額外競賽 主題豐厚獎金等著你 開賽時間 10/31(一) UI、團體組開賽 |
              11/7(一) 前端組開賽
            </p>
            <div className="blur-bg">
              <div className="flex flex-col justify-center items-center gap-[30px] pt-[144px]">
                <h2>區區修練已經無法滿足了嗎？還有比賽等著你</h2>

                <div className="flex justify-between items-center w-[1480px] border">
                  <h2>評審機制</h2>
                  <div className=" bg-white rounded-xl w-[1280px] h-[206px] flex justify-center items-center">
                    <div className="flex justify-center">
                      <div className="text-center">
                        <h3>初選</h3>
                        <p>將由六角學院前端、UI 評審進行 第一波篩選</p>
                      </div>
                      <div className="text-center">
                        <h3>決選</h3>
                        <p>
                          由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                          由評審進行直播公布名單！
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center  w-[1480px] border">
                  <h2>獎項</h2>
                  <div className="bg-white rounded-xl w-[1280px] h-[306px] flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      <div className="text-center">
                        <h3>+ 數位獎狀 +</h3>
                        <img className="w-[172.5px]" alt="box on screen" />
                        <sapn>初選佳作 | 共六十位</sapn>
                      </div>

                      <div className="text-center">
                        <h3>+ 數位獎狀 +</h3>
                        <img className="w-[172.5px]" alt="box on screen" />
                        <sapn>初選佳作 | 共六十位</sapn>
                      </div>

                      <div className="text-center">
                        <h3>+ 數位獎狀 +</h3>
                        <img className="w-[172.5px]" alt="box on screen" />
                        <sapn>初選佳作 | 共六十位</sapn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shot7 */}
        </div>

        {/* end */}
        <div className="shot-end">
          <h2 className="text-white">贊助單位</h2>
          <div className="flex justify-center">
            <img className="w-[360px] h-[360px]" alt="company info on screen" />
            <img className="w-[360px] h-[360px]" alt="company info on screen" />
            <img className="w-[360px] h-[360px]" alt="company info on screen" />
          </div>
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
