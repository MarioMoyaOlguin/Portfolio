import React from 'react'
import ResumeItem from './subComponents/ResumeItem'

const Resume = () => {


  return (

    <div className='px-8 lg:pl-64 lg:pr-16 pb-7'>
        
        <h2 className='text-5xl mb-1 mx-auto w-fit pb-2 text-[#1D3557]'>RESUME</h2>
        <div className='h-1 w-24 bg-[#1D3557] mb-16 mx-auto'></div>

        <div className=''>

          <div className='mb-8 pl-4'>
            <span className='text-3xl border-b-2 border-sky-900'>Education</span>
          </div>

          <ResumeItem
            year="2021"
            college="Tangamanga University"
            degree="Computer Networks Bachelor's Degree"
            collegeDetails='Tangamanga University, Axtla de Terrazas, S.L.P. Mexico'
            link="https://www.utan.edu.mx/campus/huasteca"
          />

          <div className='my-8 pl-4'>
            <span className='text-3xl border-b-2 border-sky-900'>Experience</span>
          </div>

          <ResumeItem
            year="Now"
            college=""
            degree="Freelance Front End Web Development"
            details="For the last 8 months I've been dabbling on web developement and React JS technologies, finding out in the process that
              writting code is quite gratifying for me and that overall web development is a noble job."
            projects="See my progress"
          />

          <ResumeItem
            year="2016 - 2017"
            college="NUVO Systems"
            collegeDetails="NUVO Systems, Monterrey N. L. Mexico."
            degree="Technical Support"
            details="As an employee, I was trained to provide technical support to OXXO Company and to install sales outlet software for the same company in several states in Mexico"
          />

          <ResumeItem
            year="2014 - 2016"
            college="Universo Computacional"
            collegeDetails="Universo Computacional, Ciudad Valles S. L. P. Mexico."
            degree="Technical Support"
            details="During this time I provided hardware and software solutions to clients regarding computer hardware, software and
              Windows OS and maintenence on the aforementioned"
          />

        </div>
    </div>
  )
}

export default Resume