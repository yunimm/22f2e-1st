import "./App.scss";
import Header from "./Header";
import {sun, LOGO_main, cloud_sm, cloud_xl, ufo} from "./AllPng";
import {et, elf, ufo_gif} from "./AllGif";
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
				<div className="shot2 h-[960px] bg-blue-500 bg-opacity-50"></div>
				{/* end */}
				<div className="shot-end">
					<button type="button" id="button_xl" />
					<a href="#bg" id="ufo_backbtn" className="w-[149px] h-[122px]">
						<img src={ufo_gif} alt="ufo on screen" />
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
