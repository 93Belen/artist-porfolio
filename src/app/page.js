"use client"
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";



export default function Home() {
  const items = useSelector(selectItems);
  console.log(items);
  const openModal = () => {
            document.getElementById('modal').style.display = 'block'
            document.getElementById('modal').style.animationName = 'appear-menu'
            document.getElementById('modal').style.animationDuration = '1s'
            document.getElementById('modal').style.transform = 'scale(1)';
            window.scrollTo(0, 0)
  }


  return (
    <div className='w-screen md:p-6 h-fit md:h-screen'>
        <Image id='home-img' className='fixed hidden md:block left-0 md:mt-60 bottom-[-300px] md:bg-blend-screen' src={require('../../imgs/trees.png')} />
    <div className=' h-fit md:h-screen'>
      <p className='md:w-11/12 justify-self-center p-8 text-3xl md:text-4xl m-auto md:p-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
    <div className='grid gap-9 md:grid-cols-3 md:grid-rows-2 p-7 justify-items-center w-screen md:w-3/4 justify-self-center m-auto'>
      <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer]' src={require('../../imgs/one.jpg')} />
      <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/two.jpg')} />
      <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/three.jpg')} />

     
    </div>
    </div>
    </div>
  )
}
