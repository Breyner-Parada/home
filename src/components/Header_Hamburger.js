import React from 'react'
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import '../styles/Header_hamburger.css';

export const HeaderHamburger = () => {


  return (
    <div className="Main-container">
      <div className='Logo-header'>BP ...</div>
      <div className='respmenu'>
        <input type="checkbox"/>
        <i class="fas fa-bars"><FaBars /></i>
        <i class="fas fa-times"><MdClose /></i>
        <nav className='Nav-header-hamburger'>
          <ul>
            <li><a href="#1">About me</a></li>
            <li><a href="#2">Skills</a></li>
            <li><a href="#3">Projects</a></li>
            <li><a href="#4">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1gEp5IdtQaNhJeKLBZW7AdKC5evPSNBwv/view?usp=sharing" download>CV</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
