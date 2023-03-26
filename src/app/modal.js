"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../../redux/cart"
import { selectCart, selectitemChosen, selectItems } from "../../redux/selectors"




export default function Modal(){
const item = useSelector(selectitemChosen)
const dispatch = useDispatch();
const cart = useSelector(selectCart);


useEffect(() => {
    if(cart.length> 0){
        localStorage.setItem('cart', cart);
    }
}, [cart])



    const closeModal = () => {
            const hide = () => document.getElementById('modal').style.display = 'none'
            setTimeout(hide, 500)
            document.getElementById('modal').style.animationName = 'desappear-modal'
            document.getElementById('modal').style.animationDuration = '0.7s'
            document.getElementById('modal').style.transform = 'scale(1,0)'
            document.getElementById('modal').style.transformOrigin = 'top'
            document.getElementById('modal').style.transitionDuration = '1s'


    }
    const addToCard = () => {
        const quantity = document.getElementById('quantity-input').value;
        dispatch(add([item, quantity]))
        closeModal()

    }

    return (
        <div id='modal' className='h-[100vh] w-screen absolute z-10  md:rounded-xl hidden box-border'>
            <div className='grid p-8 pb-10 h-fit sm:w-full grid-cols-1 md:grid-cols-2 md:grid-rows-[5%_40%_55%] gap-4 md:w-4/5 m-auto md:rounded-xl backdrop-blur-2xl'>
                <button id='closing-modal-button' onClick={closeModal} className='text-white md:col-start-2 md:self-start md:justify-self-end row-start-1 md:hover:rotate-[360deg] md:active:rotate-[360deg] duration-700'><svg id='close-modal-svg' width="25" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(-0.642788 0.766044 0.766044 0.642788 18.5348 2.42444)" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    <line x1="17.4215" y1="19.3907" x2="3.28021" y2="2.5377" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                </svg>
</button>
                <div className='p-1 h-fit justify-items-center items-center md:row-start-1 md:row-span-2'><Image className='h-auto w-full md:w-auto md:h-64 m-auto rounded-md md:rotate-[-10deg]' src={require('../../imgs/one.jpg')} /></div>
                <div className='p-4 text-black'>
                    <p className='text-3xl font-sans'>titulo</p>
                    <p className='text-3xl font-sans'>precio</p>
                    <p className='text-3xl font-sans'>id number</p>
                    <p className='text-3xl font-sans'>date</p>
                    <input min='1' max='30' placeholder='1' className='text-3xl font-sans text-black w-[60px] md:text-black rounded-sm' id='quantity-input' type='number' />
                    <button className='text-2xl text-white p-1 bg-orange-400 h-[60px] m-2 md:m-4 w-[140px] md:bg-orange-400 rounded-xl hover:bg-orange-300 md:hover:text-black duration-700' onClick={addToCard}>Add to Cart</button>
                </div>
                <div className='text-white md:col-span-2 md:p-10 md:pt-1 sm:p-4 h-fit w-auto'>
                    <p className='text-3xl font-sans'>ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        error sit voluptatem accusantium doloremque laud
                        ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        error sit voluptatem accusantium doloremque laud</p>
                </div>
            </div>
        </div>
    )
}