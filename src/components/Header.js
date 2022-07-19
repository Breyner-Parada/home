import React from 'react'
import '../styles/Header.css';

export const Header = () => {
  return (
    <div className='Header'>
        <div className='Logo-header'>BP ...</div>
        <nav className='Nav-header'>
          <ul className='Header-list'>
            <li><a href="#1">About me</a></li>
            <li><a href="#2">Skills</a></li>
            <li><a href="#3">Projects</a></li>
            <li><a href="#4">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1gEp5IdtQaNhJeKLBZW7AdKC5evPSNBwv/view?usp=sharing" download={"CVBREYNER"}>CV</a></li>
          </ul>
        </nav>
    </div>
  )
}
