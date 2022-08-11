import React from 'react'

interface ResumeData {
    year?:string,
    college?:string,
    degree?:string,
    collegeDetails?:string,
    link?:string,
    details?:string,
    projects?:string,
    li?:string,
    li2?:string,
    li3?:string,
    li4?:string,
    li5?:string
}

const ResumeItem = ( {year, college, degree, collegeDetails, link, details, projects, li, li2, li3, li4, li5}:ResumeData ) => {
  return (
    <div className='border-l border-sky-500 pl-4 text-sm relative sm:border-none sm:flex fade opacity-0 translate-x-8 transition ease-in-out
    !duration-500'>

        <div className='sm:text-right relative sm:border-r border-cyan-500 sm:pr-4 sm:w-40'>
            <div className='h-3 w-3 bg-white border-2 border-sky-500 absolute -left-[23px] top-2 sm:hidden'></div>
            <div className='h-3 w-3 hidden sm:block bg-white border-2 border-sky-500 absolute -right-[7px] top-2'></div>
            <p className='font-semibold text-lg'>{year}</p>
            <p className='hidden sm:block'>{college}</p>
        </div>

        <div className='mt-2 sm:pl-5 w-full'>
            <p className='font-semibold text-orange-600 text-lg'>{degree}</p>
            <p className='sm:mb-2 serif-pro'>{collegeDetails}</p>
            {
              link && <div className='w-6 h-6'>
                <a href={link} target="_blank" className="w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            }
            <p>{details} <span>
              <a href="#projects" className='text-cyan-600 font-medium text-[1rem]' >{projects}</a></span>
            </p>
            <ul className='mt-2'>
              {li && <li className='list-disc ml-5'>{li}</li>}
            </ul>
            <div className='h-8'></div>
        </div>

    </div>
  )
}

export default ResumeItem