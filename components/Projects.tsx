import React, { useContext } from 'react'
import { themeContext } from '../pages/_app';
import ProjectItem from './subComponents/ProjectItem'


const Projects = () => {

    const context = useContext(themeContext);
    const dark = context?.dark;

    const bg = dark ? 'bg-slate-800/90' : 'bg-gray-200/90';
    const title = dark ? 'text-white' : 'text-slate-900';
    const bar = dark ? 'bg-orange-500' : 'bg-red-800';


  return (

    <div id='projects' className={`w-full box top-container lg:top-container-lg backdrop-blur-lg ${bg}`}>

        <div className='px-2 pt-16 pb-20 sm:px-8 lg:pt-32 lg:pb-52 lg:ml-52'>
            <div className='mb-14'>
                <h2 className={`fade sec-animation -translate-y-4 opacity-0 text-5xl mb-1 mx-auto w-fit  serif-pro ${title}
                text-shadow-sm` }>PROJECTS</h2>
                <div className={`bar transition-all duration-700 h-1 w-0 mx-auto rounded-full ${bar} `}></div>
            </div>

            <div className='projects grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] sm:grid-cols-2 sm:mx-4 md:mx-12 lg:mx-auto
            w-fit lg:grid-cols-3 sm:p-px 2xl:grid-cols-4 3xl:grid-cols-5 gap-4'>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/weatherappss.png'
                        appName="Forecast"
                        tecs="React JS / Tailwindcss"
                        description="Simple forecast app, my first experience requesting API data"
                        webPage='https://mmolguin.betawebdeveloper.net/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Forecast'
                        
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/salem-theme.png'
                        appName="Web Theme"
                        tecs="Next JS / Tailwindcss"
                        description='Fully responsive Web Theme with several functionalities, inspired by a WordPress theme'
                        webPage='https://nextjs-salem-theme.vercel.app/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Web-theme'
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/movies-app.png'
                        appName="Movie App"
                        tecs="Next JS / Tailwindcss / Firebase"
                        description='Movie Web Application with a design similar to Netflix, fetches data from The Movie Data Base'
                        webPage='https://netflix-design.vercel.app/'
                        gitUrl='https://github.com/MarioMoyaOlguin/Movies-App'
                    />
                </div>

                <div className='translate-y-6 opacity-0 transition-all'>
                    <ProjectItem
                        bgUrl='/portfolio.png'
                        appName="Certification Portfolio"
                        tecs="HTML / CSS"
                        description='Portfolio designed as part of FreeCodeCamp HTML / CSS certification'
                        webPage='https://codepen.io/SSMoya/full/oNwqJYK'
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects