"use client"

import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateitemChosen } from '../../../redux/itemChosen';
import { selectIdsUrls } from '../../../redux/selectors'
import Loading from './loading';
import myloader from '../loader';
import { changeStatePrice } from '../../../redux/price';


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
            <Image loader={myloader} id={idsUrls[0].id} width={200} height={300} onClick={() => {openModal(idsUrls[0].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[0].url} />
            <Image loader={myloader} id={idsUrls[1].id} width={200} height={300} onClick={() => {openModal(idsUrls[1].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[1].url} />
            <Image loader={myloader} id={idsUrls[2].id} width={200} height={300} onClick={() => {openModal(idsUrls[2].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[2].url} />
 
            <Image loader={myloader} id={idsUrls[3].id} width={200} height={300} onClick={() => {openModal(idsUrls[3].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[3].url} />
            <Image loader={myloader} id={idsUrls[4].id} width={200} height={300} onClick={() => {openModal(idsUrls[4].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[4].url} />
            <Image loader={myloader} id={idsUrls[5].id} width={200} height={300} onClick={() => {openModal(idsUrls[5].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[5].url} />            

            <Image loader={myloader} id={idsUrls[6].id} width={200} height={300} onClick={() => {openModal(idsUrls[6].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[6].url} />
            <Image loader={myloader} id={idsUrls[7].id} width={200} height={300} onClick={() => {openModal(idsUrls[7].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[7].url} />
            <Image loader={myloader} id={idsUrls[8].id} width={200} height={300} onClick={() => {openModal(idsUrls[8].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[8].url} />            

            <Image loader={myloader} id={idsUrls[9].id} width={200} height={300} onClick={() => {openModal(idsUrls[9].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[9].url} />
            <Image loader={myloader} id={idsUrls[10].id} width={200} height={300} onClick={() => {openModal(idsUrls[10].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[10].url} />
            <Image loader={myloader} id={idsUrls[11].id} width={200} height={300} onClick={() => {openModal(idsUrls[11].id)}} className='h-auto w-full md:w-auto md:h-64 rounded-md md:hover:rotate-[-10deg] duration-500 cursor-pointer' src={idsUrls[11].url} />            
        </div>
    )
}