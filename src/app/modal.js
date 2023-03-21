"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectShowModal } from "../../redux/selectors"



export default function Modal(){
    const showModal = useSelector(selectShowModal)
    useEffect(()=> {
        if(showModal){
            document.getElementById('modal').style.display = 'block'
        }
        else{
            document.getElementById('modal').style.display = 'none'
        }
    })

    return (
        <div id='modal' className='fixed m-auto w-4/5 h-4/5 bg-white rounded-2xl left-36 z-10'>
            <p>X</p>
        </div>
    )
}