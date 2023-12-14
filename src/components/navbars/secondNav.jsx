import logo from "../../assets/logo.png"
import { secondNav } from "../../../content"
import { NavLink } from "react-router-dom"
import arrow2 from "../../assets/arrow2.png"
import  {useState}  from "react"


const SecondNav = () => {
const [secondNavDropDown, setSecondNavDropDown] = useState(true)
  return (
    <nav className="secondNav flex items-center bg-accent-150 h-16">
        <div className="navContainer flex items-center">
        <img src={logo} alt="zameen" className="h-[2.7rem]" />
        <ul className="flex font-primary text-accent-280 text-[1.4rem] uppercase relative font-medium">
            {secondNav.map((item)=>{
                if(item.more == true){
                    return(
                        <li onClick={()=>{setSecondNavDropDown(!secondNavDropDown)}} className="cursor-pointer flex px-[1.5rem] items-center">
                            {item.name}<img className="w-[1.2rem] ml-1 h-[1.2rem]" src={arrow2}/>
                            <ul className="flex">
                                {item.dropDown.map((item)=>{
                                    return(
                                        <li className="px-[1.5rem]">
                                            <NavLink >{item.name}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                }
            })}
        <ul className={`flex font-primary  w-[30rem] bg-accent-150 text-accent-280 text-[1.4rem] uppercase font-medium absolute transition-all duration-300 ${secondNavDropDown?"left-[6.5rem]":"left-[34rem]"}`}>
            {secondNav.map((item)=>{
                if(item.more==false){
                        return(
                            <li className="">
                                <NavLink>
                                    <span className="px-[1.5rem] border-accent-100 border-l-[1px]">{item.name}</span>
                                </NavLink>
                            </li>
                        )
                }
            })
            }
        </ul>
        </ul>
        </div>
    </nav>
  )
}

export default SecondNav