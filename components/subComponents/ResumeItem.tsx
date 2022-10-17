import React, { useContext } from 'react'
import { themeContext } from '../../pages/_app';

interface ResumeData {
    year?:string,
    college?:string,
    degree?:string,
    collegeDetails?:string,
    link?:string,
    details?:string,
    projects?:string,
}


const ResumeItem = ( {year, college, degree, collegeDetails, link, details, projects}:ResumeData ) => {
  
  const context = useContext(themeContext);
  const dark = context?.dark;

  const degreeText = dark ? 'text-orange-300' : 'text-orange-800';
  const projectsLinkText = dark ? 'text-cyan-400' : 'text-cyan-600';

  const handleScrollToProjects = () => {
    const projects = document.getElementById('projects');
    projects?.scrollIntoView();
  }


  return (

    <div className='border-l border-sky-400 pl-4 text-sm relative sm:border-none sm:flex fade opacity-0 translate-x-8 transition ease-in-out
    !duration-500'>

        <div className='sm:text-right relative sm:border-r border-cyan-500 sm:pr-4 sm:w-40'>
            <div className='h-3 w-3 bg-white border-2 border-cyan-500 absolute -left-[23px] top-2 sm:hidden rotate-45'></div>
            <div className='h-3 w-3 hidden sm:block bg-white border-2 border-cyan-500 absolute -right-0 top-[6px] rotate-45 translate-x-1/2'></div>
            <p className='font-semibold text-lg'>{year}</p>
            <p className='hidden sm:block'>{college}</p>
        </div>

        <div className='mt-0 sm:mt-0 sm:pl-5 w-full text-lg'>
            <p className={`font-semibold text-xl ${degreeText} `}>{degree}</p>
            <p className='sm:mb-2 serif-pro  '>{collegeDetails}</p>
            {
              link && <div className='w-7 h-7 '>
                <a href={link} target="_blank" className="w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            }
            <p className=' serif-pro'>
                {details} <span className={` font-semibold text-lg hover:cursor-pointer ${projectsLinkText} `}
                onClick={handleScrollToProjects}>
                  {projects}
                </span>
            </p>
            <div className='h-8'></div>
        </div>

    </div>
  )
}

export default ResumeItem