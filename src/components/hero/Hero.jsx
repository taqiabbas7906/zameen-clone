import heroImg from "../../assets/heroBackground.webp"
import Wrapper from "../Wrapper"

const Hero = () =>{
  return (
    <Wrapper>
    <section className={`flex justify-center relative flex-col`}>
      <div className="img w-[100vw] max-w-[192rem] absolute -z-10 top-0 bg-center md:bg-bottom-4 bg-cover sm:h-[52rem] h-[25rem] bg-hero"></div>
      <div className="container">
      </div>
    </section>
    </Wrapper>
  )
}

export default Hero