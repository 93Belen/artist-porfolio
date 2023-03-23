"use client"

import Image from 'next/image'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { selectItems } from '../../../redux/selectors'


export default function Page() {
let items = useSelector(selectItems);
const urls  = [];
if(items !== {}) {
    for(const item in items){
        const [url, size, date, description] = items[item].description.split(" - ");
        urls.push(url);
    }
}


    const openModal = () => {
        document.getElementById('modal').style.display = 'block'
        document.getElementById('modal').style.animationName = 'appear-menu'
        document.getElementById('modal').style.animationDuration = '1s'
        document.getElementById('modal').style.transform = 'scale(1)';
        window.scrollTo(0, 0)
}
    return (
        <div className='grid min-h-screen gap-9 md:grid-cols-3 md:grid-rows-2 p-7 justify-items-center w-screen md:w-3/4 justify-self-center m-auto'>
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/one.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/two.jpg')} /> 
            <Image width={200} height={300} onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={urls[0]} />

            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/four.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/five.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/six.jpg')} />   

            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/one.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/two.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/three.jpg')} />

            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/four.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/five.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/six.jpg')} />
        </div>
    )
}