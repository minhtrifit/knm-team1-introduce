import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[100px] flex flex-col lg:flex-row items-center justify-around">
      <Link className="w-[150px]" to="/">
        <img src="logo.png" alt="logo" className="w-[100%]" />
      </Link>
      <div className="w-[350px] flex justify-between font-bold ">
        <Link to="/" className="hover:text-red-700">
          Home
        </Link>
        <Link to="/story" className="hover:text-red-700">
          Story
        </Link>
        <Link to="/performer" className="hover:text-red-700">
          Performer
        </Link>
        <Link to="/directorfilm" className="hover:text-red-700">
          Director/Film
        </Link>
      </div>
    </div>
  );
};

export default Header;
