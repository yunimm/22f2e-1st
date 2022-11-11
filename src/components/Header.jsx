import { LOGO_header } from './AllPng';
const Header = () => {
  return (
    <div className="px-10 flex items-center justify-between" id="header">
      <img className="" src={LOGO_header} alt="logo on screen" />
      <div className="text-white tex-xl flex gap-4 items-center">
        <a href="#question">關卡資訊</a>
        <a href="#info">活動說明</a>
        <a href="#crown">獎項設計</a>
      </div>
    </div>
  );
};
export default Header;
