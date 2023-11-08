import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import LeftNav from "./LeftNav";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  // const { pathname } = useLocation();
  // const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <>
      <LeftNav />
      <div className="sticky top-0 z-10 flex items-center justify-between h-14 px-4 py-2 md:px-5 bg-black">
        {loading && <Loader />}
        <div className="flex h-5 items-center">
          <div
            className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? <CgClose className="text-white text-xl" /> : <SlMenu className="text-white text-xl" />}
          </div>
          <Link to="/" className="flex h-5 items-center">
            <img className="h-full hidden md:block" src={ytLogo} alt="Youtube" />
            <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
          </Link>
        </div>
        <div className="group flex items-center rounded-r-3xl">
          <div className="relative flex h-8 md:h-10 border-0 rounded-l-3xl md:group-focus-within:border md:group-focus-within:border-[#1c62b9]">
            <div className="bg-[#303030] w-10 flex items-center justify-center rounded-l-3xl opacity-0 group-focus-within:md:opacity-100">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#303030] outline-none placeholder:text-white text-white rounded-l-3xl pr-2 pl-3 w-44 md:w-64 lg:w-[500px] group-focus-within:md:rounded-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
            <div
              className="flex absolute mr-1 p-2 right-0 top-[-2px] md:top-0.5 cursor-pointer items-center justify-center rounded-full hover:bg-[#ccc]/[0.1]"
              onClick={clearSearchQuery}
            >
              {searchQuery && <CgClose className="text-white text-xl" />}
            </div>
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl " />
          </button>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
