"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectShowModal } from "../../redux/selectors"



export default function Modal(){
    let showModal = useSelector(selectShowModal);
    useEffect(()=> {
        if(showModal){
            document.getElementById('modal').style.display = 'block'

        }
        else{
            document.getElementById('modal').style.display = 'none'

        }
    })

    return (
        <div id='modal' className='h-screen md:h-500px w-screen fixed z-10  md:rounded-xl'>
            <div className='grid p-8 bg-white sm:h-full sm:w-full md:grid-cols-2 md:grid-rows-[50px_100px_100px] gap-4 md:w-4/5 md:h-3/5 fixed md:left-36 md:top-[250px] md:rounded-xl'>
                <button className='text-black md:col-start-2'>X</button>
                <Image className="h-[200px] w-auto md:rounded-xl" src={require('../../imgs/one.jpg')} />
                <div className='text-black'>
                    <p>titulo</p>
                    <p>precio</p>
                    <p>id number</p>
                    <p>date</p>
                    <p>something else</p>
                </div>
                <div className='text-black md:col-span-2'>
                    <p>ed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laud
                        antium, totam rem aperiam, eaque ipsa quae ab illo invent
                        ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        m quia dolor
                         sit amet, consectetur, adipisci </p>
                </div>
            </div>
        </div>
    )
}