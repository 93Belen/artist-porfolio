
import Image from "next/image";
import Link from "next/link";
import { store } from "../../redux/store";


export default function Home() {

  return (
    <div className='w-screen md:p-8'>
    <div className='grid min-h-screen gap-9 md:grid-cols-3 md:grid-rows-2 p-7 justify-items-center w-screen md:w-3/4 justify-self-center m-auto'>
      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/one.jpg')} />
      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/two.jpg')} />
      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/three.jpg')} />

      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/four.jpg')} />
      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/five.jpg')} />
      <Image className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../imgs/six.jpg')} />   
      <Link className='justify-self-end md:justify-self-center md:col-start-3 hover:text-orange-400' href='/work'>See more...</Link>   
    </div>
    <p className='md:w-11/12 justify-self-center p-8 text-3xl md:text-2xl m-auto md:p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}
