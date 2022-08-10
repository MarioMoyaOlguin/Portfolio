import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import projectsObserver, { barObserver, fadeObserver } from "../hooks/useObserver";



const Home: NextPage = () => {

  useRef(projectsObserver());
  useRef(fadeObserver());
  useRef(barObserver());
  

  useEffect(() => {
    
  }, []);
  

  return (

    <div className="spartan antialiased mx-auto max-w-[2560px]">
      <Head>
        <title>Mario Moya, freelance front-end web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">

        <Header />

        <AboutMe />

        <Resume />

        <Projects />

        <Contact />

      </main>


      <footer className="">
        
      </footer>
    </div>
  )
}





export default Home
