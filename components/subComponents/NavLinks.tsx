import React from 'react'

const NavLinks = () => {


  return (
    <>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <span>About Me</span>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <span>Resume</span>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <span>Projects</span>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
        <div className='group uppercase flex'>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out -translate-x-8 absolute group-hover:-translate-x-4'>&lt;</span>
            </div>
            <span>Contact</span>
            <div className='relative'>
                <span className='opacity-0 group-hover:opacity-100 transition ease-in-out translate-x-8 absolute group-hover:translate-x-2'>/&gt;</span>
            </div>
        </div>
    </>
  )
}

export default NavLinks