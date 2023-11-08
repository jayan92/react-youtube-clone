import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className={`w-[250px] overflow-y-auto h-screen py-4 bg-black z-10 fixed transition-transform duration-300 transform ${
          mobileMenu ? "translate-x-0" : "-translate-x-[250px]"
        }`}
      >
        <div className="flex h-5 items-center pl-5">
          <div
            className="flex md:mr-5 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? <CgClose className="text-white text-xl" /> : <SlMenu className="text-white text-xl" />}
          </div>
          <Link to="/" className="flex h-5 items-center">
            <img className="h-full hidden md:block" src={ytLogo} alt="Youtube" />
            <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
          </Link>
        </div>
        <div className="flex pt-5 px-5 flex-col">
          {categories.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  className={`${selectedCategory === item.name ? "bg-white/[0.15]" : ""}`}
                />
                {item.divider && <hr className="my-5 border-white/[0.2]" />}
              </React.Fragment>
            );
          })}
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">Clone by: Jayan Chinthaka</div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
