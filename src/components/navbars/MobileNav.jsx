import { useState, useContext } from "react";
import urdu from "../../assets/urdu.png";
import setting from "../../assets/setting.png";
import { mobileNav } from "../../../content";
import arrow2 from "../../assets/arrow2.png";
import hamburger from "../../assets/hamburger.png";
import NavContext from "../../contexts/NavContext";

const MobileNav = () => {
  const [toolsDropDown, setToolsDropDown] = useState(true);
  const [countryDropDown, setCountryDropDown] = useState(true);
  const { value, setValue } = useContext(NavContext);
  return (
    <div
      className={`absolute z-99 w-[28rem] sm:hidden transition-all duration-500   ${value ? "left-0" : "-left-[24rem]"
        }`}
    >
      <nav className="bg-accent-300 text-[1.5rem] overflow-x-hidden overflow-scroll uppercase text-accent-220 w-[24rem] sm:hidden h-full fixed">
        <div className="navTop flex justify-between items-center px-[1rem] pt-[1.5rem] m-0">
          <button className="text-neutral-100 text-[1.3rem] px-[2rem] h-[3.2rem] rounded-[2px] uppercase border-neutral-100 border-[1px]">
            Login
          </button>
          <div className="settings flex cursor-pointer items-center">
            <img src={setting} className="h-[3rem]" alt="setting" />
            <img
              src={urdu}
              className="w-[3.5rem] invert  cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <ul className="pt-[3.5rem]">
          {mobileNav.map((item, index) => {
            if (item.more & (item.name != "Select Country")) {
              return (
                <>
                  <li
                    onClick={() => {
                      setToolsDropDown(!toolsDropDown);
                    }}
                    className={`mobileNavItem ${toolsDropDown ? "" : "active"}`}
                    key={index}
                  >
                    {item.name}
                    <img
                      className={`w-[2rem] ml-1 h-[2.3rem] ${toolsDropDown ? "rotate-90" : "-rotate-90"
                        }`}
                      src={arrow2}
                    />
                  </li>
                  <ul
                    className={`bg-accent-290 capitalize text-[1.4rem] px-[2rem] py-[1.5rem] text-accent-220 ${toolsDropDown ? "hidden" : ""
                      }`}
                  >
                    {item.moreItem.map((item, index) => {
                      return (
                        <li className="mb-[1rem]" key={index}>
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            } else if (item.more & (item.name == "Select Country")) {
              return (
                <>
                  <li
                    onClick={() => {
                      setCountryDropDown(!countryDropDown);
                    }}
                    className={`mobileNavItem ${countryDropDown ? "" : " active"
                      }`}
                    key={index}
                  >
                    {item.name}
                    <img
                      className={`w-[2rem] ml-1 h-[2.3rem] ${countryDropDown ? "rotate-90" : "-rotate-90"
                        }`}
                      src={arrow2}
                    />
                  </li>
                  <ul
                    className={`bg-accent-290 capitalize text-[1.4rem] px-[2rem] py-[1.5rem] text-accent-220 ${countryDropDown ? "hidden" : ""
                      }`}
                  >
                    {item.moreItem.map((item, index) => {
                      return (
                        <li className="flex mb-[1rem] gap-[0.5rem]" key={index}>
                          <img
                            className="h-[2rem]"
                            src={item.flag}
                            alt={item.name}
                          />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            } else {
              const [toggle, setToggle] = useState(true);
              return (
                <li
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className={`mobileNavItem ${toggle ? "" : " active"} `}
                  key={index}
                >
                  {item.name}
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <img
        className="absolute z-99 top-8 right-4 w-[2.5rem] h-[2rem]"
        onClick={() => {
          setValue(!value);
        }}
        src={hamburger}
        alt="menu"
      />
    </div>
  );
};

export default MobileNav;
