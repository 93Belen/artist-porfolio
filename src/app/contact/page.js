"use client"
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
    const [state, handleSubmit] = useForm("myyadqdy");
  if (state.succeeded) {
      return (
        <div className='md:p-6 h-fit md:h-screen w-screen text-center p-4 self-center justify-self-center'>
            <p className='text-lg'>Thanks for your message! I will get back to you shortly!</p>
        </div>
      );
  }

  return (
    <div className='w-screen md:p-6 h-fit md:h-screen' >
        <form onSubmit={handleSubmit} method='POST' action='https://formspree.io/f/myyadqdy' className='flex flex-col gap-10 md:w-3/6 w-full p-10'>
            <input name='name' placeholder='name' className='rounded-md md:w-4/5 w-full h-fit p-2 text-black' type='text' required />
            <input placeholder='email' className='rounded-md md:w-4/5 w-full h-fit p-2 text-black' type='email' required />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea placeholder='message' className='rounded-md w-full h-fit p-2 text-black' rows='8' required />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type='submit' className='bg-orange-400 w-[90px] h-[50px] rounded-md' disabled={state.submitting}>Send!</button>
        </form>
    </div>
  )
}


