import './App.scss';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  popup_SL,
  popup_et,
  popup_SR,
  popup_elf,
} from './AllPng';
import { et, elf, ufo_gif, B1, B2, B3, Y1, Y2, Y3, P1, P2, P3 } from './AllGif';
import { ufo_sm } from './AllSvg.js';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bg = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sun',
          start: 'top',
          end: '+=1200',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.shot4',
          start: 'top 20%',
          end: '+=900',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.shot4_popup_SL',
          start: 'top 60%',
          end: '+=100',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.card1st',
          start: 'top 50%',
          end: '+=400',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      // 關卡卡片飛走
      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.shot5_p1',
          start: 'top 15%',
          end: '+=100',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      // 關卡背景顏色
      let tl5_2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.shot5_p1',
          start: 'top 15%',
          end: '+=500',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      // shot6地圖位移
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: '.shot6-ufo',
          start: 'top 85%',
          end: '+=450',
          // markers: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // 1飛碟往上
      tl.to('.ufo', {
        y: () => -500, // calculate your value
        duration: 1,
        // ease: 'bounce.out',
      })
        // 2飛碟縮小
        .to(
          '.ufo',
          {
            scale: () => 0.5, // calculate your value
            duration: 1,
            // ease: 'bounce.out',
          },
          '>1',
        )
        // 2飛碟縮小
        .to(
          ['.logo', '.sun', '.cloud_sm', '.cloud_xl'],
          {
            scale: () => 0.7, // calculate your value
            duration: 1,
            // ease: 'bounce.out',
          },
          '<',
        )
        // 3飛碟縮更小
        .to(
          '.ufo',
          {
            scale: () => 0.2, // calculate your value
            duration: 1,
            y: () => -500,
            // ease: 'bounce.out',
          },
          '<1',
        )
        //3背景物件飛走
        .to(
          ['.logo', '.sun', '.cloud_sm', '.cloud_xl'],
          {
            scale: () => 0.5, // calculate your value
            y: () => -500,
            duration: 1,
            // ease: 'bounce.out',
          },
          '>3',
        )
        // 4轉場
        .to(
          '.ufo',
          {
            scale: () => 0.2,
            duration: 1,
            y: () => -1000,
          },
          '>2',
        )
        // shot2
        .to(
          '.shot2-ufo',
          {
            scale: () => 1.2,
            duration: 1,
            y: () => -800,
            // ease: 'bounce.out',
          },
          '<3',
        )
        .to(
          '.title',
          {
            scale: () => 1,
            duration: 1,
            opacity: 1,
          },
          '<4',
        )
        .to(
          '.spotlight',
          {
            scaleY: () => 0.2,
            scaleX: () => 0.2,
          },
          '<4',
        )
        .to(
          '.title',
          {
            xPercent: 200,
            duration: 1,
            opacity: 1,
          },
          '<5',
        )
        .to(
          ['.shot2-ufo', '.spotlight'],
          {
            duration: 1,
            x: () => -400,
            // ease: 'bounce.out',
          },
          '<6',
        )
        .to(
          '.spotlight',
          {
            // scale: () => 1,
            duration: 1,
            scaleY: () => 1,
            scaleX: () => 1,
            y: () => 250,
          },
          '<6',
        )
        .to(
          '.card_wrapper',
          {
            x: () => -2170,
            duration: 1,
          },
          '<6',
        )
        .to(
          '.spotlight',
          {
            duration: 1,
            scaleY: () => 0.9,
          },
          '<7',
        )
        .set('.card1-1', { attr: { src: q_color } })
        .to(
          '.ufo_wrapper',
          {
            x: () => 450,
            duration: 1,
          },
          '<8',
        )
        .set('.card2-1', { attr: { src: coin_color } })
        .to(
          '.ufo_wrapper',
          {
            x: () => 920,
            duration: 1,
          },
          '<9',
        )
        .set('.card3-1', { attr: { src: tree_color } })
        .to(
          '.ufo_wrapper',
          {
            x: () => 1800,
            duration: 1,
          },
          '<10',
        )
        .to(
          '.card_wrapper',
          {
            x: () => -4500,
            duration: 1,
          },
          '<',
        )
        // shot2轉場
        .to(
          '.shot2-ufo',
          {
            duration: 4,
            x: () => -1800,
            y: () => 1200,
            scale: 20,
            filter: 'blur(1px)',
            // ease: 'bounce.out',
          },
          '<11',
        )
        .to(
          '.shot2-ufo',
          {
            duration: 3,
            opacity: 0,
            // ease: 'bounce.out',
          },
          '<12',
        )
        .to(
          '.shot4',
          {
            duration: 1,
            opacity: 1,
            // ease: 'bounce.out',
          },
          '<',
        );

      tl2.to('.bg-2', {
        y: () => -3000,
        duration: 2,
        // ease: 'bounce.out',
      });

      tl3
        .to('.shot4_et', {
          y: () => -100,
          x: () => 100,
          duration: 1,
          scale: () => 1.5,
        })
        .to('.shot4_et', {
          y: () => -100,
          x: () => 100,
          duration: 1,
          scale: () => 1.5,
        })
        .to(
          '.shot4_popup_et',
          {
            duration: 1,
            display: 'block',
          },
          '<',
        )
        .to(
          '.shot4_elf',
          {
            y: () => 0,
            x: () => 100,
            scale: () => 0.8,
            duration: 1,
          },
          '<',
        )
        .to(
          '.shot4_et',
          {
            y: () => 0,
            x: () => -150,
            duration: 1,
            scale: () => 0.8,
          },
          '<2',
        )
        .to(
          ['.shot4_popup_et', '.shot4_popup_SL'],
          {
            display: 'none',
            duration: 1,
          },
          '<',
        )
        .to(
          '.shot4_elf',
          { y: () => -150, x: () => -100, duration: 1, scale: () => 2.2 },
          '<',
        )
        .to(
          '.shot4_popup_elf',
          {
            duration: 1,
            display: 'block',
          },
          '<',
        );

      tl4
        .set('.shot5_p1', { attr: { src: P2 } }, '+=3')

        .set('.shot5_Y1', { attr: { src: Y2 } }, '+=3')

        .set('.shot5_B1', { attr: { src: B2 } }, '+=3');

      // 卡片飛走
      tl5
        .to('.card1st', {
          duration: 1,
          y: () => -1500,
        })
        .to(
          '.card2nd',
          {
            duration: 5,
            y: () => 1500,
          },
          '+=5',
        )
        .to(
          '.card3rd',
          {
            duration: 5,
            display: 'none',
            y: () => -1500,
          },
          '+=5',
        )
        .to('.card1st', {
          opacity: () => 0,
        })
        .to('.card2nd', {
          opacity: () => 0,
        })
        .to('.card3rd', {
          opacity: () => 0,
        });
      // 背景透明

      tl5_2
        .to('.card_bg', {
          duration: 2,
          backgroundColor: () => 'rgba(0, 0, 0, 0)',
        })
        .to('.shot6_position', { duration: 1, opacity: 1 }, '<');

      tl6
        .to('.shot6-ufo', {
          duration: 1,
          // y: () => -100,
          // opacity: 1,
        })
        .to('.shot6_position', {
          duration: 1,
          y: () => -300,
        })
        .to(
          '.text-group-A',
          {
            duration: 1,
            x: () => 200,
            display: 'block',
          },
          '+=.5',
        )
        .to(
          '.shot6_position',
          {
            duration: 5,
            y: () => -690,
          },
          '+=5',
        )
        .to(
          '.text-group-C',
          {
            duration: 1,
            display: 'block',
            left: 200,
          },
          '+=.5',
        )
        .to(
          '.shot6_position',
          {
            duration: 5,
            y: () => -1150,
          },
          '+=10',
        )
        .to(
          '.text-group-B',
          {
            duration: 1,
            display: 'block',
            left: 1050,
          },
          '+=.5',
        );
    }, bg);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <div id="bg" ref={bg}>
        <Header />
        <div className="shot1 h-[1500px]">
          <div className="bg-props">
            <img class="sun" id="sun" src={sun} alt="sun on screen" />
            <img
              class="logo"
              id="logo_main"
              src={LOGO_main}
              alt="logo on screen"
            />
            <img
              className="cloud_sm"
              id="cloud_sm"
              src={cloud_sm}
              alt="cloud on screen"
            />
            <img
              className="cloud_xl"
              id="cloud_xl"
              src={cloud_xl}
              alt="cloud on screen"
            />
          </div>
          <div className="ufo" id="ufo_wrapper">
            <div className="relative">
              <img data-speed="0.25" id="ufo" src={ufo} alt="ufo on screen" />
              <img id="et" src={et} alt="et on screen" />
              <img id="elf" src={elf} alt="elf on screen" />
            </div>
          </div>
          <button class="shot1-btn" type="button" id="button_sm" />
        </div>
        {/* shot2 */}
        <div className="shot2">
          <div className="ufo_wrapper">
            <img
              className="shot2-ufo"
              id="ufo_sm"
              src={ufo_sm}
              alt="ufo on screen"
            />
            <img
              className="spotlight"
              id="spotlight"
              src={spotlight}
              alt="spotlight on screen"
            />
          </div>
          <div className="title">
            <h2 id="pop-type-title">你是否也有以下困擾？</h2>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img class="card1-1" src={q_black} alt="question img on screen" />
              <p>羨慕別人的酷酷網頁動畫？</p>
            </div>
            <div className="img_wrapper">
              <img class="card2-1" src={coin_black} alt="coin img on screen" />
              <p>滿足不了同事的許願？</p>
            </div>
            <div className="img_wrapper">
              <img class="card3-1" src={tree_black} alt="tree img on screen" />
              <p>動畫技能樹太雜無從下手？</p>
            </div>
          </div>
        </div>
        {/* shot3 */}
        <div className="shot3"></div>
        {/* shot4 */}
        <div className="shot4_5">
          <div className="shot4">
            <div className="bg-2">
              <div className="text-bg">
                <span>互動式網頁設計</span>
              </div>
            </div>
            <img
              className="shot4_popup_SL"
              src={popup_SL}
              id="popup_SL"
              alt="info on screen"
            />
            <img
              className="shot4_popup_et"
              src={popup_et}
              id="popup_et"
              alt="info on screen"
            />
            <img
              className="shot4_popup_SR"
              src={popup_SR}
              id="popup_SR"
              alt="info on screen"
            />
            <img
              className="shot4_popup_elf"
              src={popup_elf}
              id="popup_elf"
              alt="info on screen"
            />

            <div className="ch">
              <div className="cube"></div>
              <img className="shot4_et" id="et" src={et} alt="et on screen" />
              <img
                className="shot4_elf"
                id="elf"
                src={elf}
                alt="elf on screen"
              />
            </div>
          </div>

          {/* shot5 */}
          <div className="shot5">
            <div class="shot5-bg-img">
              <h2 id="pop-type-title">年度最強組合 三大主題來襲</h2>
            </div>
            <ul className="card_bg">
              <li className="card1st card" id="question">
                <h3>Week1</h3>

                <img className="shot5_p1" src={P1} alt="git on screen" />

                <div className="text-group">
                  <h4>The F2E 活動網站設計</h4>
                  <p className="bg-[#EA3BE5]">視差滾動</p>
                  <h5># 版塊設計</h5>
                  <a href="https://" className="text-[#EA3BE5]">
                    點我看更多
                  </a>
                </div>
              </li>
              <li className="card2nd card">
                <h3>Week2</h3>
                <img className="shot5_Y1" src={Y1} alt="git on screen" />
                <div className="text-group">
                  <h4>今晚，我想來點點簽</h4>
                  <p className="bg-[#EFC263]">Canvas</p>
                  <h5># 凱鈿行動科技</h5>
                  <a href="https://" className="text-[#EFC263]">
                    點我看更多
                  </a>
                </div>
              </li>
              <li className="card3rd card">
                <h3>Week3</h3>
                <img className="shot5_B1" src={B1} alt="git on screen" />
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
          <div className="relative h-[750px]">
            <img
              className="shot6-ufo"
              id="map_ufo_sm"
              src={ufo_sm}
              alt="ufo on screen"
            />
          </div>
          <div className="shot6_position">
            <div className="shot6" id="info">
              <div className="shot6-bg-img">
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
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                              <span className="text-[32px] text-[#6a00e8] font-bold">
                                數位獎狀
                              </span>
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                            </div>
                            <img
                              src={box}
                              className="w-[172.5px]"
                              alt="box on screen"
                            />
                            <div>
                              <span className="text-[#EA3BE5] text-2xl">
                                初{' '}
                              </span>
                              <span className="text-black text-2xl">
                                選佳作 | 共六十位
                              </span>
                            </div>
                          </div>

                          <img src={diamond} alt="diamond on screen" />

                          <div className="text-center flex justify-center items-center flex-col gap-3">
                            <div>
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                              <span className="text-[32px] text-[#6a00e8] font-bold">
                                數位獎狀
                              </span>
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                            </div>
                            <img
                              src={box}
                              className="w-[172.5px]"
                              alt="box on screen"
                            />
                            <div>
                              <span className="text-[#EA3BE5] text-2xl">
                                初{' '}
                              </span>
                              <span className="text-black text-2xl">
                                選佳作 | 共六十位
                              </span>
                            </div>
                          </div>

                          <img src={diamond} alt="diamond on screen" />

                          <div className="text-center flex justify-center items-center flex-col gap-3">
                            <div>
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                              <span className="text-[32px] text-[#6a00e8] font-bold">
                                數位獎狀
                              </span>
                              <span className="text-[32px] text-[#EA3BE5]">
                                +
                              </span>
                            </div>
                            <img
                              src={box}
                              className="w-[172.5px]"
                              alt="box on screen"
                            />
                            <div>
                              <span className="text-[#EA3BE5] text-2xl">
                                初
                              </span>
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
          </div>
        </div>
        {/* end */}
        <div className="shot-end">
          <h2 id="pop-type-title">贊助單位</h2>
          <div className="flex justify-center items-center gap-14 mt-[100px]">
            <button className="type1" />
            <button className="type2" />
            <button className="type3" />
          </div>

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
        </footer>{' '}
        */
      </div>
    </div>
  );
}
export default App;
