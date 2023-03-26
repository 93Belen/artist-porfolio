"use client"

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateitemChosen } from '../../../redux/itemChosen';
import { selectIdsUrls } from '../../../redux/selectors'
import Loading from './loading';
import myloader from '../loader';


export default function Page() {
const idsUrls = useSelector(selectIdsUrls);
const dispatch = useDispatch();
if(idsUrls.length === 0){
    return <Loading />
}



    const openModal = (id) => {
        document.getElementById('modal').style.display = 'block'
        document.getElementById('modal').style.animationName = 'appear-menu'
        document.getElementById('modal').style.animationDuration = '1s'
        document.getElementById('modal').style.transform = 'scale(1)';
        dispatch(changeStateitemChosen(id));

        window.scrollTo(0, 0)
}
    return (
        <div className='grid min-h-screen gap-9 md:grid-cols-3 md:grid-rows-2 p-7 justify-items-center w-screen md:w-3/4 justify-self-center m-auto'>
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/one.jpg')} />
            <Image onClick={openModal} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={require('../../../imgs/two.jpg')} /> 
            <Image loader={myloader} id={idsUrls[0].id} width={200} height={300} onClick={() => {openModal(idsUrls[0].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src='1TmJDqWgPIqn7tWTDZzYWg7Q25se90nMK' />

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