import { useLayoutEffect, useRef } from 'react';
// import logo from '../assets/logo.svg';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Box = ({ children, className }) => {
  return <div className={'box ' + className}>{children}</div>;
};

function Container({ children }) {
  return (
    <div>
      <Box>Don't Animate Me</Box>
    </div>
  );
}
function App() {
  const comp = useRef();

  // useLayoutEffect =
  //   (() => {
  //     //animation here
  //     let ctx = gsap.context(() => {
  //       gsap.to('.box', { rotation: '+=360' });
  //     }, comp);

  //     return () => ctx.revert();
  //   },
  //   []);
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to('.animate', {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
      gsap.to('.animate2', {
        x: 150,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
      gsap.to('.animate3', {
        scrollTrigger: {
          trigger: '.animate3',
          toggleActions: 'restart pause reverse pause',
          //play pause resume reverse restart reset complete none
          // start: 'top center',
          // markers: true,
        },
        x: 400,
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);
  return (
    <div className="App">
      <div className="app" ref={app}>
        <Box className="animate">Box</Box>
        <Container></Container>
        <Box className="animate2">Box</Box>
        <Box className="animate3">Box3</Box>
      </div>
    </div>
  );
}
export default App;
