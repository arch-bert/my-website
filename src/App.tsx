import React from 'react';
import NavBar from './components/nav-bar';
import Hero from './components/hero';
import ProjectCard from './components/project-card';
import { FaGithub, FaImdb, FaGoodreads } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <body className='bg-black pb-[1500px] text-white'>
        <NavBar />
        <Hero />
        <section className="flex flex-col pt-[60px] px-8">
          <h1 className="text-5xl">My Projects</h1>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </body>
      <footer>
        <div className="flex flex-col items-center p-4 bg-secondary text-white text-center">
          <div className="flex space-x-4 mb-2">
            <a href="https://github.com/ryan-bert" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.imdb.com/user/ur58431544/ratings/?sort=top_rated%2Cdesc" target="_blank" rel="noopener noreferrer">
              <FaImdb size={30} />
            </a>
            <a href="https://www.goodreads.com/user/show/155746857-ryan-bertschinger" target="_blank" rel="noopener noreferrer">
              <FaGoodreads size={30} />
            </a>
          </div>
          <p>© 2021 My Portfolio</p>
        </div>
      </footer>
    </>
  );
}