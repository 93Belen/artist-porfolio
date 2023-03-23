"use client"

import { useDispatch, useSelector } from "react-redux"
import { selectCart, selectItems } from "../../redux/selectors"
import Image from "next/image";
import { remove } from "../../redux/cart";



export default function CartModal(){
    const cart = useSelector(selectCart);
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
    
    const displayItems = () => {
        const arr = [];
        for(const id of cart){
            const [url, size, date, description] = items[id].description.split(" - ")
                arr.push(
                <div className='w-full h-[200px] flex md:flex-row flex-col justify-evenly text-black'>
                    <p>{items[id].name}</p>
                    <p>{size}</p>
                    <p>price</p>
                    <Image width={50} height={70} className='rounded-md h-[70px]' src={url} />
                    <button onClick={()=> {
                        removeFromCart(id)
                    }}>Delete</button>
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
                <button id='closing-modal-button' onClick={closeModal} className='text-white md:justify-self-end md:hover:rotate-[360deg] md:active:rotate-[360deg] duration-700 col-start-2'><svg id='close-modal-svg' width="25" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(-0.642788 0.766044 0.766044 0.642788 18.5348 2.42444)" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    <line x1="17.4215" y1="19.3907" x2="3.28021" y2="2.5377" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </button>
                <div className='w-full h-fit flex flex-col gap-2 col-span-2'>
                    {displayItems()}
                </div>
                <button className='text-2xl text-white p-1 bg-orange-400 h-[50px] m-2 md:m-4 w-[70px] md:bg-orange-400 rounded-xl hover:bg-orange-300 md:hover:text-black duration-700  md:justify-self-end col-start-2'>Buy</button>
            </div>
        </div>
    )
}