import { FaMagnifyingGlass } from "react-icons/fa6";

const HeroInput = () => {
  return (
    <div className="relative">
        <input type="text" placeholder="Search" className='pl-8 border py-2 px-4 rounded-lg text-baseGrey'/>
        <FaMagnifyingGlass className="absolute left-2 top-3 text-baseGrey" /> 
    </div>
  )
}

export default HeroInput