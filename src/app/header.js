"use client"
import Link from "next/link"
import { useState } from "react"


export default function Header(){
    const [open, setOpen] = useState(false);
    const onClickMenu = () => {
        const navbar = document.getElementById('navbar');
        if(open){
            const hide = () => navbar.style.display = 'none';
            setTimeout(hide, 1000)
            navbar.style.animationName = 'desappear-menu'
            navbar.style.animationDuration = '1s'
            setOpen(()=> false)
            document.getElementById('line-2').style.transform = 'translateX(0)'
            document.getElementById('line-2').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
            document.getElementById('line-1').style.transform = 'rotate(0deg)'
            document.getElementById('line-3').style.transform = 'rotate(0deg)'
            document.getElementById('line-1').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
            document.getElementById('line-3').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
        }
        else {
            navbar.style.display = 'flex'
            navbar.style.animationName = 'appear-menu'
            navbar.style.animationDuration = '0.5s'
            setOpen(()=> true)
            document.getElementById('line-2').style.transform = 'translateX(-50px)'
            document.getElementById('line-2').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
            document.getElementById('line-1').style.transform = 'rotate(-30deg)'
            document.getElementById('line-1').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
            document.getElementById('line-3').style.transform = 'rotate(30deg)'
            document.getElementById('line-3').style.transition = '0.4s cubic-bezier(0, 0, 0, 1)'
            document.getElementById('line-3').style.transformOrigin = 'right'
            document.getElementById('line-1').style.transformOrigin = 'right'
        }
    }
    return (
        <header className='h-2/5 w-screen p-4 md:p-8 flex justify-between'>
          {/* switch music button only for dektop */}
          <label class="relative items-center cursor-pointer hidden md:block w-40">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  dark:bg-teal-800"></div>
          </label>
          {/* Desktop menu */}
          <nav className='hidden md:flex'>
            <p className='text-orange-400 text-xl text-center'><Link className='text-amber-50' href='/'>Home</Link> | <Link className='text-amber-50' href='/'>Work</Link> | <Link className='text-amber-50' href='/'>About</Link> | <Link className='text-amber-50' href='/'>Contact</Link></p>
          </nav>
          {/* Mobile menu */}
          <nav className='md:hidden'>
            <button onClick={onClickMenu} type='button' data-collapse-toggle="navbar" >
            <svg width="50" height="50" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line id='line-1' x1="1.5" y1="1.5" x2="23.5" y2="1.5" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
              <line id='line-2' x1="1.5" y1="8.5" x2="23.5" y2="8.5" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
              <line id='line-3' x1="1.5" y1="15.5" x2="23.5" y2="15.5" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
            </svg>
            </button>
            <div id='navbar' className="text-3xl hidden text-center backdrop-blur-2xl bg-slate-900 bg-opacity-5 absolute flex-col h-3/6 justify-around w-screen top-20 left-0">
              <Link href="/">Home</Link>
              <Link href="/">Work</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </nav>
          {/* Logo */}
          <svg className='md:w-40' width="120" height="auto" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" width="15" height="15" rx="1" fill="#FB923C"/>
            <path d="M2.90625 3.85547H2.95312C3.46875 3.85547 3.72656 3.97656 3.72656 4.21875C3.72656 4.35938 3.625 4.48828 3.42188 4.60547L3.05859 4.55859H2.54297V5.69531C2.54297 8.75781 2.67969 11.4414 2.95312 13.7461V13.8984C2.95312 14.6016 2.68359 15.0469 2.14453 15.2344L1.83984 15.2695C1.13672 15.2695 0.671875 14.6758 0.445312 13.4883L0.363281 13.0898C0.433594 12.8633 0.558594 12.75 0.738281 12.75C0.941406 12.75 1.08984 13.082 1.18359 13.7461C1.33203 14.1758 1.51562 14.4453 1.73438 14.5547H1.98047C2.16016 14.4688 2.25 14.2617 2.25 13.9336V13.8164C2.02344 11.4727 1.91016 10.0352 1.91016 9.50391C1.86328 8.59766 1.83984 7.38281 1.83984 5.85938V4.66406H1.80469L0.914062 4.73438H0.808594C0.511719 4.70312 0.363281 4.58203 0.363281 4.37109C0.402344 4.15234 0.550781 4.04297 0.808594 4.04297H0.996094L2.90625 3.85547ZM5.67188 10.957C6.34375 11.1992 6.69922 11.9414 6.73828 13.1836V13.2539C6.70703 14.293 6.4375 14.9297 5.92969 15.1641L5.60156 15.2109C4.76562 15.0078 4.34766 14.3789 4.34766 13.3242V13.2891C4.34766 12.1484 4.71484 11.3867 5.44922 11.0039L5.67188 10.957ZM5.03906 13.1836V13.4414C5.125 14.1758 5.35156 14.543 5.71875 14.543C5.92969 14.3086 6.03516 13.8555 6.03516 13.1836V13.1133C5.99609 12.2773 5.86328 11.8203 5.63672 11.7422C5.23828 11.9219 5.03906 12.4023 5.03906 13.1836ZM7.82812 3.65625C8 3.65625 8.10156 3.79297 8.13281 4.06641V4.72266C8.13281 6.30859 8.12109 8.41797 8.09766 11.0508C8.38672 10.7617 8.65625 10.6172 8.90625 10.6172C9.53906 10.6172 9.94922 11.3047 10.1367 12.6797C10.1602 13.7031 10.2188 14.5898 10.3125 15.3398C10.3125 15.4727 10.1875 15.5938 9.9375 15.7031C9.67188 15.5703 9.53906 15.4258 9.53906 15.2695L9.58594 15.2344V15.1875C9.46875 12.8281 9.34375 11.6484 9.21094 11.6484C9.11719 11.4609 9.03125 11.3516 8.95312 11.3203H8.83594C8.44531 11.6641 8.25 12.082 8.25 12.5742L8.27344 15.0938C8.17969 15.3203 8.05859 15.4336 7.91016 15.4336C7.65234 15.4336 7.48828 15.0742 7.41797 14.3555C7.47266 13.8789 7.5 13.4688 7.5 13.125V13.0898L7.47656 13.0547L7.5 13.0195V12.7266L7.57031 7.37109C7.47656 6.49609 7.42969 5.63672 7.42969 4.79297V4.08984C7.44531 3.80078 7.57812 3.65625 7.82812 3.65625ZM12.9023 10.8516C13.6914 10.9141 14.0117 11.8633 13.8633 13.6992L13.7695 14.7422C13.7227 15.0234 13.5859 15.1562 13.3594 15.1406C13.1484 15.125 13.0547 14.9844 13.0781 14.7188L13.1602 13.582C13.2695 12.2461 13.1523 11.5664 12.8086 11.543C12.4414 11.5117 12.1758 12.207 12.0117 13.6289L12.0586 14.8945C12.043 15.0586 11.9102 15.1445 11.6602 15.1523C11.3711 15.1289 11.2617 14.7148 11.332 13.9102L11.0508 11.2266C11.0664 11.0469 11.2109 10.9492 11.4844 10.9336C11.6484 10.9414 11.7461 11.1172 11.7773 11.4609L11.8242 11.4727C12.1758 11.0352 12.5352 10.8281 12.9023 10.8516ZM20.0977 3.75C20.8008 3.8125 21.2227 4.45312 21.3633 5.67188V6.16406C21.2695 7.14062 20.7773 8.12109 19.8867 9.10547C20.0586 9.47266 20.4141 10.6523 20.9531 12.6445L21.9375 14.8945C21.8359 15.1055 21.7031 15.1992 21.5391 15.1758C21.3281 15.168 21 14.5625 20.5547 13.3594C20.25 12.7578 19.9141 11.6484 19.5469 10.0312C19.4531 9.75 19.3789 9.60547 19.3242 9.59766L18.5391 10.0078C18.5547 11.7188 18.625 13.332 18.75 14.8477C18.7344 14.9727 18.6367 15.0859 18.457 15.1875L18.3398 15.1758C18.1211 15.1602 18.0117 14.918 18.0117 14.4492C17.8008 10.1758 17.7734 7.17969 17.9297 5.46094C17.7734 5.32031 17.7031 5.17969 17.7188 5.03906C17.7266 4.98438 17.8125 4.87891 17.9766 4.72266C18 4.40234 18.1367 4.25781 18.3867 4.28906L18.5625 4.37109C19.2188 3.91797 19.7305 3.71094 20.0977 3.75ZM18.6328 5.19141C18.5469 6.90234 18.5195 8.23438 18.5508 9.1875L18.6562 9.19922C19.4219 8.83984 20.0586 7.99609 20.5664 6.66797L20.6484 6.16406L20.6602 6.05859C20.7305 5.34766 20.5703 4.8125 20.1797 4.45312L19.9922 4.44141C19.7266 4.41797 19.2734 4.66797 18.6328 5.19141ZM23.6367 10.8164C24.0742 10.8164 24.3711 11.2109 24.5273 12C24.3242 12.8828 23.9062 13.3242 23.2734 13.3242H23.2266V13.3594C23.3516 14.0703 23.6836 14.4258 24.2227 14.4258C24.6367 14.4258 24.9727 14.0703 25.2305 13.3594L25.4883 13.2539C25.6602 13.2539 25.7695 13.3867 25.8164 13.6523C25.8164 14.1367 25.4375 14.5938 24.6797 15.0234L24.1172 15.1289C23.4453 15.1289 22.9414 14.6484 22.6055 13.6875C22.5117 13.3047 22.4648 12.9883 22.4648 12.7383V12.5859C22.4648 11.7891 22.7969 11.2109 23.4609 10.8516L23.6367 10.8164ZM23.2031 12.293V12.3164L23.4609 12.5859C23.5781 12.5859 23.6875 12.4258 23.7891 12.1055V11.918C23.75 11.6758 23.6992 11.5547 23.6367 11.5547H23.5664C23.4492 11.5547 23.3281 11.8008 23.2031 12.293ZM31.4297 10.8516C32.2188 10.9141 32.5391 11.8633 32.3906 13.6992L32.2969 14.7422C32.25 15.0234 32.1133 15.1562 31.8867 15.1406C31.6758 15.125 31.582 14.9844 31.6055 14.7188L31.6875 13.582C31.7969 12.2461 31.6797 11.5664 31.3359 11.543C30.9688 11.5117 30.7031 12.207 30.5391 13.6289L30.5859 14.8945C30.5703 15.0586 30.4375 15.1445 30.1875 15.1523C29.8984 15.1289 29.7891 14.7148 29.8594 13.9102L29.5781 11.2266C29.5938 11.0469 29.7383 10.9492 30.0117 10.9336C30.1758 10.9414 30.2734 11.1172 30.3047 11.4609L30.3516 11.4727C30.7031 11.0352 31.0625 10.8281 31.4297 10.8516ZM34.5234 10.957C35.1953 11.1992 35.5508 11.9414 35.5898 13.1836V13.2539C35.5586 14.293 35.2891 14.9297 34.7812 15.1641L34.4531 15.2109C33.6172 15.0078 33.1992 14.3789 33.1992 13.3242V13.2891C33.1992 12.1484 33.5664 11.3867 34.3008 11.0039L34.5234 10.957ZM33.8906 13.1836V13.4414C33.9766 14.1758 34.2031 14.543 34.5703 14.543C34.7812 14.3086 34.8867 13.8555 34.8867 13.1836V13.1133C34.8477 12.2773 34.7148 11.8203 34.4883 11.7422C34.0898 11.9219 33.8906 12.4023 33.8906 13.1836ZM36.8438 4.61719C36.9609 4.625 37.0703 4.72266 37.1719 4.91016C37.1172 4.99609 37.082 5.15234 37.0664 5.37891L37.0547 5.53125L37.125 10.1484C37.0859 12.2422 37.1094 13.7773 37.1953 14.7539L37.2188 14.8477C37.1484 14.9961 37.0352 15.0664 36.8789 15.0586C36.5273 15.0352 36.3867 14.5508 36.457 13.6055C36.4102 13.0898 36.3867 10.7188 36.3867 6.49219C36.3398 6.23438 36.3281 5.89453 36.3516 5.47266V5.42578C36.3906 4.87109 36.5547 4.60156 36.8438 4.61719ZM40.3711 5.02734C40.4648 5.02734 40.5664 5.09766 40.6758 5.23828V6.11719C40.6758 8.71094 40.8867 11.5195 41.3086 14.543L41.5547 15.3164C41.5 15.5117 41.3789 15.6094 41.1914 15.6094C40.9492 15.6094 40.7773 15.3164 40.6758 14.7305H40.5938C40.3047 14.9961 40.0195 15.1289 39.7383 15.1289C39.0977 15.1289 38.6211 14.7148 38.3086 13.8867C38.207 13.6133 38.1562 13.2891 38.1562 12.9141C38.1562 12.0234 38.4531 11.4062 39.0469 11.0625L39.3047 11.0391H39.3398C39.5742 11.0391 39.8555 11.1484 40.1836 11.3672H40.2305V11.332C40.0586 9.31641 39.9727 7.66797 39.9727 6.38672V5.60156C39.9727 5.21875 40.1055 5.02734 40.3711 5.02734ZM38.8594 12.8789V13.1484C38.8594 13.7266 39.0703 14.1445 39.4922 14.4023L39.7383 14.4258C40.1133 14.4258 40.3008 14.0586 40.3008 13.3242V12.9961C40.3008 12.332 39.957 11.9141 39.2695 11.7422C38.9961 11.9062 38.8594 12.2852 38.8594 12.8789ZM43.5234 10.5469C43.9297 10.5469 44.1758 10.7188 44.2617 11.0625C44.2617 11.2266 44.1523 11.3281 43.9336 11.3672H43.8281C43.7266 11.2969 43.6367 11.2617 43.5586 11.2617H43.4531C42.9375 11.4805 42.6797 11.8086 42.6797 12.2461V12.3516C42.7188 12.6094 42.8398 12.7383 43.043 12.7383H43.1484L43.957 12.5859C44.3555 12.6328 44.5547 12.8281 44.5547 13.1719C44.5547 13.6797 44.2461 14.2227 43.6289 14.8008C43.3398 15.0195 43.0469 15.1289 42.75 15.1289C42.2109 15.0117 41.9414 14.7891 41.9414 14.4609C42.0195 14.2656 42.1523 14.168 42.3398 14.168L42.7031 14.4258H42.8906C43.4609 14.207 43.7461 13.8516 43.7461 13.3594L43.6992 13.3125C43.5039 13.3828 43.2852 13.418 43.043 13.418C42.4648 13.418 42.1094 13.043 41.9766 12.293C41.9766 11.6133 42.3555 11.0586 43.1133 10.6289L43.5234 10.5469Z" fill="#3F646A"/>
            <path d="M26.5078 10.8984C26.75 10.8984 26.8711 11.2656 26.8711 12V12.7148C26.8711 13.6445 27.0703 14.1094 27.4688 14.1094H27.5039C27.7773 13.8359 27.9141 13.4688 27.9141 13.0078V11.6367C27.9141 11.3555 28.0859 11.1602 28.4297 11.0508H28.5703C28.7422 11.1836 28.8281 11.293 28.8281 11.3789L28.6172 13.0781L28.6523 16.0195V16.582C28.6523 19.4883 28.1484 21.1602 27.1406 21.5977L26.8477 21.6797C26.2695 21.6797 25.7773 21.2617 25.3711 20.4258L24.9609 19.1719C25.0312 18.9688 25.1406 18.8672 25.2891 18.8672H25.3945C25.543 18.8672 25.7539 19.3359 26.0273 20.2734C26.3008 20.7344 26.5586 20.9648 26.8008 20.9648C27.4648 20.9648 27.8594 19.5273 27.9844 16.6523V15.9141L27.9375 14.6953L27.4219 14.8125C26.6953 14.8125 26.2773 14.0977 26.168 12.668L26.1328 11.1562C26.2031 10.9844 26.3281 10.8984 26.5078 10.8984Z" fill="#FB923C"/>
          </svg>

      </header>
    )
}