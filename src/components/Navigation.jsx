import Logo from './navigation/Logo';
import UserInfo from "./navigation/UserInfo";
import Links from "./navigation/Links";
import dots from '/images/dots.svg'

const Navigation = () => {
  return (
    <section className='flex flex-col items-center relative h-screen pt-10 min-h-full border-r-2'>
        <Logo/>
        <Links/>
        <div className='flex gap-2 mt-48 relative'>
           <UserInfo username="Mathew Perry" useremail="mathewperry@xyz.com"/>
           <img src={dots} className='absolute right-0 top-2 h-[.35rem]' />
        </div>
    </section>
  )
}

export default Navigation