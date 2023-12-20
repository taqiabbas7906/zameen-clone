import NavContext from "./NavContext";
import { useState } from "react";

const NavState = (props) => {
    const [value , setValue] = useState(false)
  return (
    <NavContext.Provider value={{value, setValue}}>
    {props.children}
    </NavContext.Provider>
  )
}

export default NavState