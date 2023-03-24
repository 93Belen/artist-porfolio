"use client"
import Image from "next/image";
import { useEffect } from "react";
import './styles.css';




export default function About() {

  function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 50;
      if(revealtop < windowheight - revealpoint){
        if(reveals[i].id === 'nine-element'){
          document.getElementById(`${reveals[i].id}`).style.opacity = '1';
          document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2s'
        }
        else {
          document.getElementById(`${reveals[i].id}`).style.transform = 'translateY(0px)'
          document.getElementById(`${reveals[i].id}`).style.opacity = '1';
          document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2s'
        }
      }
      else{
        document.getElementById(`${reveals[i].id}`).style.transform = 'translateY(50px)'
        document.getElementById(`${reveals[i].id}`).style.opacity = '0';
        document.getElementById(`${reveals[i].id}`).style.transitionDuration = '2s'
      }
    }
  }

  useEffect(() => {
    reveal();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', reveal);
  })

 

  return (
    <div className='w-screen grid md:grid-cols-[55%_45%] md:grid-rows-[repeat(6, fit-content)] box-border gap-6 md:gap-4 justify-items-center h-fit'>
    <p id='second-element' className='reveal text-3xl m-12 md:p-10 font-sans'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Image id='third-element' height={500} className=' reveal rounded-xl justify-self-center self-center m-4 md:m-5' src={require('../../../imgs/seven.jpg')} />
      <p id='fourth-element' className='reveal md:col-span-2 text-3xl m-12 md:p-10 font-sans'>ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Image id='fith-element' width={2000} className='reveal rounded-xl self-center justify-self-center m-auto md:col-span-2' src={require('../../../imgs/mountains-2.png')} />
      <p id='six-element' className='reveal text-3xl m-12 md:col-span-2 md:p-10 font-sans'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Image id='seven-element' height={500} className='reveal rounded-xl justify-self-center self-center m-4 md:m-5' src={require('../../../imgs/three.jpg')} />
      <p id='eight-element' className='reveal text-3xl m-12 md:p-10 font-sans'>ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p id='ten-element' className='reveal text-3xl m-12 md:col-span-2 md:p-10 font-sans'>ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Image id='nine-element' width={12000} className='reveal rounded-xl self-center justify-self-center md:col-span-2 p-0 m-auto' src={require('../../../imgs/trees.png')} />
    </div>
  )
}
