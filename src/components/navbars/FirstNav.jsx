import { NavLink, Link } from "react-router-dom";
import house from "../../assets/houseIcon.png";
import arrow from "../../assets/arrow.png";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import urdu from "../../assets/urdu.png";
import setting from "../../assets/setting.png";
import user from "../../assets/user.png";
import { firstNav } from "../../../content";
import { countries } from "../../../content";
import { useState } from "react";

const DropDown = (props) => {
  const [dropDown, setDropdown] = useState(false);
  return (
    <li
      tabIndex={0}
      className="relative px-[0.5rem] flex flwx md:px-[1rem]"
      onBlur={() => {
        setDropdown(false);
      }}
      onClick={() => {
        setDropdown(!dropDown);
      }}
    >
      {props.nav.name}
      <span>
        <img
          className={`inline-block w-[1.2rem] mx-[0.4rem]  ${
            dropDown ? "rotate-180" : ""
          }`}
          src={arrow}
          alt="arrow"
        />
      </span>
      <ul
        className={`absolute white rounded-[0.5rem] z-50 bg-white shadow-dropdown text-black top-[3.2rem] text-left py-[1rem]  right-0 font-medium capitalize ${
          dropDown ? "block" : "hidden"
        }`}
      >
        {props.nav.more.map((item) => {
          return (
            <li
              key={item.name}
              className=" text-accent-300 md:hover:underline w-[15rem] text-[1.4rem] my-[1rem] mx-[1rem]"
            >
              <Link to={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
const FirstNav = () => {
  const [propertyId, setPropertyID] = useState("");
  const [flagDropDown, setFlagDropDown] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(countries[0].flag);
  const [currentCountryName, setCurrentCountryName] = useState(
    countries[0].name
  );
  return (
    <nav className="firstNav hidden sm:flex items-center bg-primary-300 h-16">
      <div className="navContainer flex justify-between">
        <div className="leftNav  flex items-center">
          <div className="homeBtn">
            <Link to="/">
              <img className="w-[20px]" src={house} alt="home" />
            </Link>
          </div>
          <ul className="flex font-primary cursor-pointer text-white uppercase font-semibold md:text-[1.4rem] text-[1.1rem] break-normal">
            {firstNav.map((item) => {
              if (item.dropDown == true) {
                return <DropDown key={item.name} nav={item} />;
              } else {
                return (
                  <li key={item.name} className=" px-[0.5rem] md:px-[1.5rem]">
                    <NavLink to={item.to}>{item.name}</NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="rightNav flex items-center gap-4 w-[45rem] justify-between text-[1.2rem]">
          <div className="searchId flex relative items-center border-white border-[1px] w-[12rem] h-[2.5rem] rounded-[0.4rem] p-[1rem]">
            <input
              type="text"
              value={propertyId}
              onChange={(i) => {
                setPropertyID(i.target.value);
              }}
              className="propertyId bg-transparent text-white  outline-none w-[8rem] placeholder-white"
              placeholder="Property ID"
            />
            <img
              src={search}
              alt="search"
              className="w-[1.2rem] absolute right-[1rem]"
            />
          </div>
          <button className="addProperty  w-[12rem] px-[1rem] rounded-[0.4rem] justify-center flex items-center text-black bg-white hover:bg-accent-200 h-[2.5rem]">
            <img className="w-[1.5rem] mr-[1rem]" src={plus} alt="" />
            Add Property
          </button>
          <img
            src={urdu}
            className="w-[4.2rem] invert  cursor-pointer"
            alt=""
          />
          <div title={currentCountryName} className="countrySelector relative cursor-pointer">
            <img
              onClick={() => {
                setFlagDropDown(!flagDropDown);
              }}
              className="w-[21px]"
              src={currentCountry}
              alt={currentCountryName}
            />
            <ul
              className={`absolute min-w-[18.5rem] top-[3.2rem] right-0 bg-white shadow-dropdown p-4 rounded-[0.4rem] ${
                flagDropDown ? "" : "hidden"
              }`}
            >
              {countries.map((item) => {
                if (item.name == currentCountryName) {
                  return;
                } else {
                  return (
                    <li
                      onClick={() => {
                        setCurrentCountry(item.flag);
                        setCurrentCountryName(item.name);
                        setFlagDropDown(false);
                      }}
                      className="flex items-center pl-[0.5rem] cursor-pointer rounded-[0.4rem]  mb-4 bg-accent-200 h-[3.4rem] border-[1px] border-accent-250"
                    >
                      <img
                        className="w-[2.1rem] mr-[1.2rem]"
                        src={item.flag}
                        alt="flag"
                      />
                      <span className="text-[1rem]">{item.name}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="settings cursor-pointer">
            <img src={setting} className="h-[2.5rem]" alt="setting" />
          </div>
          <div className="login cursor-pointer">
            <img src={user} className="w-[2rem] h-[1.8rem] " alt="login" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FirstNav;
