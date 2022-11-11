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
  spotlight,
  box,
  diamond,
  elf_b,
  sponsor_1_1,
  sponsor_1_2,
  sponsor_2_1,
  sponsor_2_2,
  sponsor_3_1,
  sponsor_3_2,
} from './AllPng';
import { et, elf, ufo_gif, B1, Y1, P1 } from './AllGif';
import { ufo_sm } from './AllSvg.js';

function App() {
  return (
    <div className="App">
      <div id="bg">
        <Header />
        <div className="shot1 h-[3840px]">
          <img id="sun" src={sun} alt="sun on screen" />
          <img id="logo_main" src={LOGO_main} alt="logo on screen" />
          <img id="cloud_sm" src={cloud_sm} alt="cloud on screen" />
          <img id="cloud_xl" src={cloud_xl} alt="cloud on screen" />

          <div id="ufo_wrapper">
            <div className="relative">
              <img id="ufo" src={ufo} alt="ufo on screen" />
              <img id="et" src={et} alt="et on screen" />
              <img id="elf" src={elf} alt="elf on screen" />
            </div>
          </div>
          <button type="button" id="button_sm" />
        </div>

        {/* shot2 */}
        <div className="shot2 bg-blue-500 bg-opacity-50">
          <div className="ufo_wrapper">
            <img id="ufo_sm" src={ufo_sm} alt="ufo on screen" />
            <img id="spotlight" src={spotlight} alt="spotlight on screen" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-30">
            <h2 id="pop-type-title">你是否也有以下困擾？</h2>
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
          <div className="popup_SL">
            <div className="flex items-center">
              <p className="w-[370px] h-[133px] bg-black rounded-xl text-white text-center leading-[133px] text-4xl">
                *&@&%#&#
              </p>
              <div className="triangle" />
            </div>
          </div>
          <div className="popup_SR">
            <div className="flex items-center">
              <p className="w-[370px] h-[133px] bg-black rounded-xl text-white text-center leading-[133px] text-4xl">
                *&@&%#&#
              </p>
              <div className="triangle" />
            </div>
          </div>
          <div className="ch">
            <div className="cube"></div>
            <img id="et" src={et} alt="et on screen" />
            <img id="elf" src={elf} alt="elf on screen" />
          </div>
        </div>

        {/* shot5 */}
        <div className="shot5">
          <div class="bg-img">
            <h2 id="pop-type-title">年度最強組合 三大主題來襲</h2>
          </div>
          <ul className="flex justify-center items-center bg-[#eeeeee]">
            <li className="card" id="question">
              <h3>Week1</h3>
              <img src={P1} alt="git on screen" />
              <div className="text-group">
                <h4>The F2E 活動網站設計</h4>
                <p className="bg-[#EA3BE5]">視差滾動</p>
                <h5># 版塊設計</h5>
                <a href="https://" className="text-[#EA3BE5]">
                  點我看更多
                </a>
              </div>
            </li>
            <li className="card">
              <h3>Week2</h3>
              <img src={Y1} alt="git on screen" />
              <div className="text-group">
                <h4>今晚，我想來點點簽</h4>
                <p className="bg-[#EFC263]">Canvas</p>
                <h5># 凱鈿行動科技</h5>
                <a href="https://" className="text-[#EFC263]">
                  點我看更多
                </a>
              </div>
            </li>
            <li className="card">
              <h3>Week3</h3>
              <img src={B1} alt="git on screen" />
              <div className="text-group">
                <h4>Scrum 新手村</h4>
                <p className="bg-[#2DC9FC]">JS draggable</p>
                <h5># 鈦坦科技</h5>
                <a href="https://" className="text-[#2DC9FC]">
                  點我看更多
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* shot6+7 */}
        {/* 3page 960*2 + 1643 */}
        <div className="shot6  bg-orange-500 bg-opacity-50" id="info">
          <div className="bg-img">
            <img id="ufo_sm" src={ufo_sm} alt="ufo on screen" />
            <div className="text-group-A">
              <h2 className="text-[#EA3BE5] inline-block">報</h2>
              <h2 className="inline-block">名時間10/13~10/30</h2>
              <p>截止前可修改報名組別</p>
            </div>

            <p></p>
            <div className="text-group-C">
              <h2 className="text-[#FFCC62] inline-block">登</h2>
              <h2 className="inline-block">錄作品10/31~11/28</h2>
              <p>
                依賽程登錄作品
                <br />
                10/31(一) UI、團體組開賽;11/7(一) 前端組開賽
              </p>
            </div>
            <div className="text-group-B">
              <h2 className="text-[#2DC9FC] inline-block">額</h2>
              <h2 className="inline-block">外競賽</h2>
              <p>
                主題豐厚獎金等著你
                <br />
                開賽時間
                <br />
                10/31(一) UI、團體組開賽 | 11/7(一) 前端組開賽
              </p>
            </div>
            <div className="blur-bg">
              <div className="flex flex-col justify-center items-center gap-[30px] pt-[144px]">
                <h2 id="pop-type-title">
                  區區修練已經無法滿足了嗎？還有比賽等著你
                </h2>

                <div className="flex justify-between items-center w-[1480px]">
                  <h3>評審機制</h3>
                  <div className=" bg-white rounded-xl w-[1280px] h-[206px] flex justify-center items-center gap-20">
                    {/* <div className="flex justify-center border"> */}

                    <div className="flex justify-center items-center flex-col gap-8 text-center p-10">
                      <h4>初選</h4>
                      <p>
                        將由六角學院前端、UI 評審進行
                        <br />
                        第一波篩選
                      </p>
                    </div>
                    <div className="w-[3px] h-[124px] bg-[#B6B6B6]"></div>
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center flex-col gap-8 text-center p-10">
                        <h4>決選</h4>
                        <p>
                          由六角學院與贊助廠商討論，進行最後篩選，
                          <br />
                          並於 12/30(五) 由評審進行直播公布名單！
                        </p>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>
                </div>

                <div
                  id="crown"
                  className="flex justify-between items-center w-[1480px]"
                >
                  <h3>獎項</h3>
                  <div className="bg-white rounded-xl w-[1280px] h-[306px] flex justify-center items-center">
                    <div className="flex justify-center items-center gap-12">
                      <div className="text-center flex justify-center items-center flex-col gap-3">
                        <div>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                          <span className="text-[32px] text-[#6a00e8] font-bold">
                            數位獎狀
                          </span>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                        </div>
                        <img
                          src={box}
                          className="w-[172.5px]"
                          alt="box on screen"
                        />
                        <div>
                          <span className="text-[#EA3BE5] text-2xl">初 </span>
                          <span className="text-black text-2xl">
                            選佳作 | 共六十位
                          </span>
                        </div>
                      </div>

                      <img src={diamond} alt="diamond on screen" />

                      <div className="text-center flex justify-center items-center flex-col gap-3">
                        <div>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                          <span className="text-[32px] text-[#6a00e8] font-bold">
                            數位獎狀
                          </span>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                        </div>
                        <img
                          src={box}
                          className="w-[172.5px]"
                          alt="box on screen"
                        />
                        <div>
                          <span className="text-[#EA3BE5] text-2xl">初 </span>
                          <span className="text-black text-2xl">
                            選佳作 | 共六十位
                          </span>
                        </div>
                      </div>

                      <img src={diamond} alt="diamond on screen" />

                      <div className="text-center flex justify-center items-center flex-col gap-3">
                        <div>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                          <span className="text-[32px] text-[#6a00e8] font-bold">
                            數位獎狀
                          </span>
                          <span className="text-[32px] text-[#EA3BE5]">+</span>
                        </div>
                        <img
                          src={box}
                          className="w-[172.5px]"
                          alt="box on screen"
                        />
                        <div>
                          <span className="text-[#EA3BE5] text-2xl">初 </span>
                          <span className="text-black text-2xl">
                            選佳作 | 共六十位
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-w-[1920px] relative">
                  <img className="elf" src={elf_b} alt="elf on screen" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end */}
        <div className="shot-end">
          <h2 id="pop-type-title">贊助單位</h2>
          <ul className="flex justify-center items-center gap-14 mt-[100px]">
            <button className="type1" />
            <button className="type2" />
            <button className="type3" />
          </ul>
          <div className="min-w-[1920px] h-[1200px] relative">
            <img id="elf" src={elf} alt="elf on screen" />
            <button type="button" id="button_xl" />
            <img id="et" src={et} alt="et on screen" />
          </div>
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
