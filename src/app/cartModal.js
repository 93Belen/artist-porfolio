"use client"

import { useDispatch, useSelector } from "react-redux"
import { selectCart, selectItems } from "../../redux/selectors"
import Image from "next/image";
import { remove } from "../../redux/cart";
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'




export default function CartModal(){
    const cart = useSelector(selectCart);
    const items = useSelector(selectItems);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])



    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
    
    const displayItems = () => {
        const arr = [];
        for(const id of cart){
            const [url, size, date, description] = items[id].description.split(" - ")
            const randomKey = Math.random() * 12 + Math.random() * 24;
                arr.push(
                <div key={randomKey} className='box-border w-full md:h-[100px] sm:h-fit sm:text-center sm:justify-items-center md:flex sm:grid sm:grid-rows-5 md:flex-row flex-col gap-6 justify-evenly rounded-xl text-white font-sans'>
                    <p className='self-center text-3xl p-2 sm:m-auto md:m-0 text-center font-sans'>{items[id].name}</p>
                    <p className='self-center text-3xl p-2 sm:m-auto md:m-0 text-center font-sans'>{size}</p>
                    <p className='self-center text-3xl p-2 sm:m-auto md:m-0 text-center font-sans'>price</p>
                    <div className='flex flex-row gap-6 justify-items-center justify-around'>
                    <Image width={50} height={70} className='rounded-md h-[70px] self-center sm:m-auto mt-6 mb-6' src={url} />
                    <button id='delete-button' type='button' className='sm:m-auto justify-self-center self-center w-fit p-1 rounded hover:text-red-800 text-2xl text-slate-50' onClick={()=> {
                        removeFromCart(id)
                    }}>Delete</button>
                    </div>
                    
                </div>)
        }
        return arr;
    }



    const closeModal = () => {
            const hide = () => document.getElementById('modal').style.display = 'none'
            setTimeout(hide, 200)
            document.getElementById('cart-modal').style.animationName = 'desappear-modal'
            document.getElementById('cart-modal').style.animationDuration = '0.5s'
            document.getElementById('cart-modal').style.transform = 'scale(1,0)'
            document.getElementById('cart-modal').style.transformOrigin = 'top'
            document.getElementById('cart-modal').style.transitionDuration = '0.5s'


    }

    return (
        <div id='cart-modal' className='h-[100vh] w-screen absolute z-10  md:rounded-xl hidden box-border'>
            <div className='p-8 m-auto pb-10 h-fit sm:w-full md:w-4/5 md:rounded-xl backdrop-blur-2xl md:grid md:grid-cols-[70%_30%] md:grid-rows-[200px_fit-content_200px]'>
                <button id='closing-modal-button' onClick={closeModal} className='text-white md:justify-self-end md:hover:rotate-[360deg] md:active:rotate-[360deg] duration-700 md:col-start-2'><svg id='close-modal-svg' width="25" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(-0.642788 0.766044 0.766044 0.642788 18.5348 2.42444)" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    <line x1="17.4215" y1="19.3907" x2="3.28021" y2="2.5377" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </button>
                <div ref={parent} className='w-full h-fit flex flex-col gap-6 col-span-2'>
                    {displayItems()}
                </div>
                <button className='text-2xl text-white p-1 bg-orange-400 h-[50px] m-2 md:m-4 w-[70px] md:bg-orange-400 rounded-xl hover:bg-orange-300 md:hover:text-black duration-700  md:justify-self-end col-start-2'>Buy</button>
            </div>
        </div>
    )
}