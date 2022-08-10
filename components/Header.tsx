import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '../pages/_app';
import NavLinks from './subComponents/NavLinks';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    
    const navRef = useRef<HTMLDivElement>(null);
    
    const getDivWidth = () => navRef.current?.clientWidth;
    
    const [windowSize, setWindowSize] = useState(getDivWidth());

    const context = useContext(themeContext);
    const handleTheme = context?.handleDark;
    const dark = context?.dark;
    
    useEffect(() => {

        const handleWindowResize = () => {
            setMenuOpened(false);
            setWindowSize(getDivWidth());
        }
    
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    const handleDarkMode = () => {
        handleTheme?.()
    }

    const handleMenu = () => {
        setMenuOpened(!menuOpened)
    }

  return (
    <div ref={navRef} className='fixed w-full z-10 lg:h-screen lg:w-52'>

        <div className="flex lg:flex-col relative h-full items-center justify-between py-1 px-6 text-white bg-white/80 backdrop-blur
        lg:justify-start lg:items-center lg:px-5 lg:py-8 overflow-scroll scrollbar-thin scrollbar-thumb-orange-700 scrollbar-track-red-300
        lg:bg-[rgba(145,13,13,.8)] shadow-md">

            {/* Portrait */}
            <div className='w-full h-32 hidden lg:block'>
                <div className='relative w-32 h-32 mx-auto'>
                    <Image
                        src={"https://drive.google.com/uc?id=102ARiQ6PWCPGjsp1NWg_aLLLoycxaZeg"}
                        layout="fill"
                        objectFit='cover'
                        className='rounded-full'
                    />
                </div>
            </div>

            <div className='flex justify-center lg:my-3'>
                <span className='font-script text-3xl mr-3 hidden lg:block'>Mario</span>
                <span className='font-script text-3xl text-[rgba(145,13,13,.8)] lg:text-white'>Moya</span>
            </div>
            
            <p className='uppercase text-lg text-center hidden lg:block serif-pro'>front end web developer</p>

            <div className='font-extralight hidden lg:flex flex-col mt-7'>
                
                <NavLinks />

            </div>

            {/* theme icon */}
            <div className='lg:block absolute lg:w-fit lg:h-fit lg:top-3 lg:left-3 top-0 bottom-0 right-[72px] flex items-center'>
                {
                (dark)
                    ?   <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 stroke-[rgba(145,13,13,.8)] lg:stroke-white hover:scale-110 transition ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    :   <svg onClick={handleDarkMode} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-[rgba(145,13,13,.8)] lg:stroke-white hover:scale-110 transition ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                }
            </div>

            {/* Menu button */}
            <div onClick={handleMenu} className='w-7 h-7 relative justify-center lg:hidden group hover:scale-110'>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[5px] left-[2px] bg-[rgba(145,13,13,.8)] transition ease-in-out origin-right rounded-full `
                    + (menuOpened ? "-rotate-45 w-[23px]" : "rotate-0") }
                >
                </div>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[13px]  left-[2px] bg-[rgba(145,13,13,.8)]  transition ease-in-out rounded-full `
                    + (menuOpened ? "opacity-0" : "opacity-100") }
                >
                </div>
                <div onClick={handleMenu}
                className={`w-6 h-[2px] absolute top-[21px]  left-[2px] bg-[rgba(145,13,13,.8)] transition ease-in-out origin-right rounded-full `
                    + (menuOpened ? "rotate-45 w-[23px]" : "rotate-0") }
                >
                </div>
            </div>
        </div>

        {/* Floating menu items */}
        <div className={`flex text-white font-light flex-col absolute top-16 transition ease-in-out text-lg p-2 items-center right-6 rounded w-52 bg-[rgba(145,13,13,.9)] backdrop-blur-sm shadow-lg `
                + (menuOpened ? "opacity-100 -translate-y-4" : "opacity-0 pointer-events-none") }
        >
            <div className='group flex'>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
                </div>
                <a onClick={handleMenu} href="#about-me" >About Me</a>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
                </div>
            </div>
            <div className='group flex'>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
                </div>
                <a onClick={handleMenu} href="#resume" >Resume</a>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
                </div>
            </div>
            <div className='group flex'>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
                </div>
                <a onClick={handleMenu} href="#projects" >Projects</a>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
                </div>
            </div>
            <div className='group flex'>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
                </div>
                <a onClick={handleMenu} href="#contact" >Contact</a>
                <div className='relative'>
                    <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
                </div>
            </div>
        </div>
        
    </div>
  )

}



export default Header