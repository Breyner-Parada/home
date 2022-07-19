import React from 'react';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import '../styles/Main.css';

export const Main = () => {
  return (
    <div className='Main'>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}
