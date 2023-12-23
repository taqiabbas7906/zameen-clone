import NavContext from "../contexts/NavContext";
import { useContext } from "react";

const Wrapper = (props) => {
const { value, setValue } = useContext(NavContext);
  return (
    <div className={`relative sm:static transition-all duration-500 ${!value ? "right-0" : "-right-[24rem]"}`}>
        {props.children}
    </div>
  )
}

export default Wrapper