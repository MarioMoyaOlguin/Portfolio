import React from 'react'
import ProjectItem from './subComponents/ProjectItem'


const Projects = () => {

  return (

    <div className='w-full bg-slate-100 py-16 lg:pl-64 lg:pr-12'>

        <h2 className='text-5xl mb-1 mx-auto w-fit pb-2 text-[#1D3557]'>PROJECTS</h2>
        <div className='h-1 w-24 bg-[#1D3557] mb-16 mx-auto'></div>

        <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:grid-cols-2 sm:mx-4 md:mx-12 lg:mx-auto
        w-fit lg:grid-cols-3 sm:p-px 2xl:grid-cols-4 3xl:grid-cols-5'>

            <ProjectItem
                bgUrl='13ACNPSwIKBG32GWD7KetzB0ffMIN9GnA'
                appName="Forecast"
                tecs="React JS / Tailwindcss"
                description="Simple forecast app, my first experience requesting API data"
                webPage='https://mmolguin.betawebdeveloper.net/'
                gitUrl='https://github.com/MarioMoyaOlguin/Forecast'
            />

            <ProjectItem
                bgUrl='1KGfKeBRF400Yrge_p_qzhBJFw0KSvp8s'
                appName="Web Theme"
                tecs="Next JS / Tailwindcss"
                description='Fully responsive Web Theme with several functionalities, inspired by a WordPress theme'
                webPage='https://nextjs-salem-theme.vercel.app/'
                gitUrl='https://github.com/MarioMoyaOlguin/Web-theme'
            />

            <ProjectItem
                bgUrl='1xcO-rdb493G4bn-wQ9lcNvOlBlR4rIUd'
                appName="Movie App"
                tecs="Next JS / Tailwindcss / Firebase"
                description='Movie Web Application with a design similar to Netflix, fetches data from The Movie Data Base'
                webPage='https://netflix-design.vercel.app/'
                gitUrl='https://github.com/MarioMoyaOlguin/Movies-App'
            />

            <ProjectItem
                bgUrl='11TCmhOO3qx4rL4RpFkZ3gt9PAzPpZeYF'
                appName="Certification Portfolio"
                tecs="HTML / CSS"
                description='Portfolio designed as part of FreeCodeCamp HTML / CSS certification'
                webPage='https://codepen.io/SSMoya/full/oNwqJYK'
            />

        </div>
    </div>
  )
}

export default Projects