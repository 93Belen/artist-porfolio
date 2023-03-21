"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectShowModal } from "../../redux/selectors"



export default function Modal(){
    let showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();
    useEffect(()=> {
        if(showModal){
            document.getElementById('modal').style.display = 'block'

        }
        else{
            document.getElementById('modal').style.display = 'none'

        }
    })
    const closeModal = () => {
        dispatch({type: 'showModal/changeState', payload: false})
    }

    return (
        <div id='modal' className='h-screen w-screen fixed z-10  md:rounded-xl'>
            <div className='grid p-8 bg-white sm:h-full sm:w-full md:grid-cols-2 md:grid-rows-[5%_50%_45%] gap-4 md:w-4/5 md:h-3/5 fixed md:left-36 md:rounded-xl'>
                <button onClick={closeModal} className='text-black md:col-start-2 md:self-start md:justify-self-end md:hover:rotate-180'>X</button>
                <div className='p-2 h-fit justify-items-center items-center'><Image height={250} className="md:rounded-xl md:rotate-[-10deg] m-auto" src={require('../../imgs/one.jpg')} /></div>
                <div className='text-black p-4'>
                    <p>titulo</p>
                    <p>precio</p>
                    <p>id number</p>
                    <p>date</p>
                    <p>something else</p>
                </div>
                <div className='text-black md:col-span-2 p-4'>
                    <p>ed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laud
                        antium, totam rem aperiam, eaque ipsa quae ab illo invent
                        ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        error sit voluptatem accusantium doloremque laud
                        antium, totam rem aperiam, eaque ipsa quae ab illo invent
                        ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o</p>
                </div>
            </div>
        </div>
    )
}