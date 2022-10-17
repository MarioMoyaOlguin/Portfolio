import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';
import ProjectItem from './subComponents/ProjectItem'


const Projects = () => {

    const context = useContext(themeContext);
    const dark = context?.dark;

    const bg = dark ? 'bg-slate-900/50' : 'bg-white/60';
    const title = dark ? 'text-white' : 'text-slate-900';
    const bar = dark ? 'bg-orange-500' : 'bg-red-800';


  return (

    <div id='projects' className={`w-full sm:px-2 pt-16 pb-40 lg:pl-64 box top-container lg:top-container-lg backdrop-blur-xl ${bg}`}>

        <div className='mb-8'>
            <h2 className={`fade sec-animation -translate-y-4 opacity-0 text-5xl mb-1 mx-auto w-fit  serif-pro ${title}
            text-shadow-sm` }>PROJECTS</h2>
            <div className={`bar transition-all duration-700 h-1 w-0 mx-auto rounded-full ${bar} `}></div>
        </div>

        <div className='projects grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:grid-cols-2 sm:mx-4 md:mx-12 lg:mx-auto
        w-fit lg:grid-cols-3 sm:p-px 2xl:grid-cols-4 3xl:grid-cols-5 gap-2'>

            <div className='translate-y-6 opacity-0 transition-all'>
                <ProjectItem
                    bgUrl='13ACNPSwIKBG32GWD7KetzB0ffMIN9GnA'
                    appName="Forecast"
                    tecs="React JS / Tailwindcss"
                    description="Simple forecast app, my first experience requesting API data"
                    webPage='https://mmolguin.betawebdeveloper.net/'
                    gitUrl='https://github.com/MarioMoyaOlguin/Forecast'
                    
                />
            </div>

            <div className='translate-y-6 opacity-0 transition-all'>
                <ProjectItem
                    bgUrl='1KGfKeBRF400Yrge_p_qzhBJFw0KSvp8s'
                    appName="Web Theme"
                    tecs="Next JS / Tailwindcss"
                    description='Fully responsive Web Theme with several functionalities, inspired by a WordPress theme'
                    webPage='https://nextjs-salem-theme.vercel.app/'
                    gitUrl='https://github.com/MarioMoyaOlguin/Web-theme'
                />
            </div>

            <div className='translate-y-6 opacity-0 transition-all'>
                <ProjectItem
                    bgUrl='1xcO-rdb493G4bn-wQ9lcNvOlBlR4rIUd'
                    appName="Movie App"
                    tecs="Next JS / Tailwindcss / Firebase"
                    description='Movie Web Application with a design similar to Netflix, fetches data from The Movie Data Base'
                    webPage='https://netflix-design.vercel.app/'
                    gitUrl='https://github.com/MarioMoyaOlguin/Movies-App'
                />
            </div>

            <div className='translate-y-6 opacity-0 transition-all'>
                <ProjectItem
                    bgUrl='11TCmhOO3qx4rL4RpFkZ3gt9PAzPpZeYF'
                    appName="Certification Portfolio"
                    tecs="HTML / CSS"
                    description='Portfolio designed as part of FreeCodeCamp HTML / CSS certification'
                    webPage='https://codepen.io/SSMoya/full/oNwqJYK'
                />
            </div>

        </div>
    </div>
  )
}

export default Projects