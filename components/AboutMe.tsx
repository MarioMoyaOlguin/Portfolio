import Image from 'next/image'
import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';

const AboutMe = () => {

  const context = useContext(themeContext);

  const dark = context?.dark;


  console.log();

  return (
    <div className='relative flex justify-end items-center w-full h-screen text-slate-700 ts'>

        {/* <Image
          src={"https://drive.google.com/uc?id=1pAI6VimlJZUJ-haoRhRWAS8BGDQtjbkM"}
          layout="fill"
          objectFit='cover'
          className='-z-10 grayscale'
        /> */}

      <div className='flex flex-col w-screen gap-y-2 text-center lg:pl-64 lg:pr-12 lg:gap-y-4'>

        <div className='relative mx-auto lg:hidden'>
          <Image
            src={"https://drive.google.com/uc?id=102ARiQ6PWCPGjsp1NWg_aLLLoycxaZeg"}
            width={150}
            height={150}
            className='rounded-full'
          />
        </div>
        
        <h1 className='text-3xl md:text-5xl lg:text-7xl lg:w-full'>Greetings, I'm
          <span className="text-orange-500" > Mario Moya</span>
        </h1>
        <h2 className='text-xl md:text-4xl lg:text-5xl lg:w-full font-light lg:mt-5'>Freelance front-end web developer.</h2>

        <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto rotate-0 hover:scale-105 hover:rotate-90 fill-transparent hover:fill-[rgba(145,13,13,.7)] transition ease-in-out
          mt-5 hover:stroke-red-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default AboutMe