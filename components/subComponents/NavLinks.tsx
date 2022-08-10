import React from 'react'

const NavLinks = () => {


  return (
    <>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <a className='links' href="#about-me">About Me</a>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex my-2'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <a className='links' href='#resume'>Resume</a>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex mb-2'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <a className='links' href='#projects'>Projects</a>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <a className='links' href='#contact'>Contact</a>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
    </>
  )
}

export default NavLinks