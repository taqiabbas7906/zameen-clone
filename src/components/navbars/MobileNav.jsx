import urdu from "../../assets/urdu.png";
import setting from "../../assets/setting.png";

const MobileNav = () => {
  return (
    <nav className="bg-black w-[67vw] sm:hidden">
        <div className="navTop flex justify-between items-center">
          <button className="text-neutral-100 text-[1.3rem] h-[4rem] w-[8rem] uppercase border-neutral-100 border-[1px]">Login</button>
          <div className="settings cursor-pointer">
            <img src={setting} className="h-[2.5rem]" alt="setting" />
          <img
            src={urdu}
            className="w-[4.2rem] invert  cursor-pointer"
            alt=""
          />
          </div>
        </div>
    </nav>
  )
}

export default MobileNav