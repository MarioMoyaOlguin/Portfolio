import Image from 'next/image'
import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';

const AboutMe = () => {

  const context = useContext(themeContext);
  const dark = context?.dark;

  const chevron = dark ? "text-white bg-slate-900" : "text-slate-900 bg-white";
  const text = dark ? "text-white" : "text-slate-900";

  return (
    <div id="about-me" className='relative flex justify-end items-center w-full h-screen text-white ts lg:pt-11'>

        <Image
          src={"https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
          layout="fill"
          objectFit='cover'
          className='-z-10 grayscale-[0.6]'
        />

      <div className='flex flex-col w-screen text-center lg:pl-64 lg:pr-12'>

        <div className='relative mx-auto mb-5 lg:hidden'>
          <Image
            src={"https://drive.google.com/uc?id=102ARiQ6PWCPGjsp1NWg_aLLLoycxaZeg"}
            width={150}
            height={150}
            className='rounded-full transition ease-in-out'
          />
        </div>
        
        <div className={`${text} `}>
          <h1 className="fade sec-animation -translate-y-4 opacity-0 text-3xl md:text-5xl lg:text-7xl lg:w-full" >Greetings, I'm
            <span className="text-red-500" > Mario Moya</span>
          </h1>
          <h2 className='fade sec-animation -translate-y-4 opacity-0 delay-500 text-xl md:text-4xl lg:text-5xl lg:w-full font-light lg:mt-5 serif-pro'>Freelance front-end web developer.</h2>
        </div>

        {/* Go down */}
        <a className={`w-16 h-16 mt-8 mx-auto overflow-hidden relative transition-all ease-in-out rounded-full animate-pulse ${chevron}
        hover:animate-none cursor-pointer`} href='#resume' >
          <div className='w-16 absolute hover:down-chevron transition-transform ease-linear -translate-y-16'>
            <div className='w-16 h-16 flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </div>
            <div className='w-16 h-16 flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default AboutMe