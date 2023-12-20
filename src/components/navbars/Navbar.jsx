import SecondNav from "./SecondNav";
import FirstNav from "./FirstNav";
import MobileNav from "./MobileNav";


const Navbar = () => {
  return (
    <header className="relative">
    <FirstNav/>
    <SecondNav/>
    <MobileNav/>
    </header>
  )
}

export default Navbar