import { NavLink , Link } from "react-router-dom"
import house from "../../assets/houseIcon.png"
import arrow from "../../assets/arrow.png"
import { firstNav } from "../../../content"
import { useState } from "react"

const DropDown = (props) =>{
const [dropDown, setDropdown] = useState(false)
  return(
    <li tabIndex={0} className="relative px-[1rem]" onBlur={()=>{setDropdown(false)}} onClick={()=>{setDropdown(!dropDown)}}>
        {props.nav.name}<span><img className={`inline-block w-[12px] mx-[4px]  ${dropDown?"rotate-180":""}`} src={arrow} alt="arrow" /></span>
        <ul className={`absolute white rounded-[5px] shadow-dropdown text-black top-[3.2rem] text-left py-[1.5rem]  right-0 font-medium capitalize ${dropDown?"block":"hidden"}`}>
        {props.nav.more.map((item)=>{
          return(
            <li key={item.name} className=" text-accent-300 md:hover:underline w-[150px] my-[1rem] mx-[1rem]">
              <Link to={item.to}>{item.name}</Link>
            </li>
          )
        })}
        </ul>
    </li>
  )
}
const FirstNav = () => {
  return (
    <nav className="firstNav flex items-center bg-primary-300 h-16">
    <div className="navContainer">
      <div className="leftNav flex items-center">
      <div className="homeBtn">
      <Link to="/"><img className="w-9" src={house} alt="home" /></Link>
      </div>
      <ul className="flex font-primary cursor-pointer text-white uppercase font-bold text-[1.4rem]">
        {firstNav.map((item)=>{
          if(item.dropDown == true){
            return(
              <DropDown key={item.name} nav = {item}/>
            )
          }
          else{
            return(
              <li key={item.name} className="px-[1.5rem]">
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            )
          }
        })}
      </ul>
      </div>
    </div>
    </nav>
  )
}

export default FirstNav