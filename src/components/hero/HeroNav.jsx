import Greet from "./Greet"
import HeroInput from "./HeroInput"
const HeroNav = () => {
  return (
    <div className='flex justify-between items-center'>
        <Greet name="Mathew"/>
        <HeroInput/>
    </div>
  )
}

export default HeroNav