import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-around">
      <div className="w-[150px]">
        <img src="logo.png" alt="logo" className="w-[100%]" />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
