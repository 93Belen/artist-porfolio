"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectShowModal } from "../../redux/selectors"



export default function Modal(){
    const showModal = useSelector(selectShowModal)
    useEffect(()=> {
        if(showModal){
            document.getElementById('modal').style.display = 'block'
            document.body.style.overflow ='hidden';
        }
        else{
            document.getElementById('modal').style.display = 'none'
            document.body.style.overflow = '';
        }
    })

    return (
        <div id='modal' className='fixed m-auto w-full md:w-4/5 h-full md:h-4/5 bg-white md:rounded-2xl z-10 md:ml-36'>
            <p>X</p>
        </div>
    )
}