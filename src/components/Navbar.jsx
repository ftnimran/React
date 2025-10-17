import React from 'react'
import logoIcon from '../assets/image/icon_01.png'

const Navbar = () => {
    return (
        <>
            <header>
                <img src={logoIcon} class="logo" alt="Logo"></img>
                <button class="menu-btn" id="menu-btn">☰</button>
                <nav id="sidebar">
                    <button class="close-btn" id="close-btn">✖</button>
                    <a href="#home" style={{ "--i": 1 }}>Home</a>
                    <a href="#about" style={{ "--i": 2 }}>About</a>
                    <a href="#skills" style={{ "--i": 3 }}>Skills</a>
                    <a href="#projects" style={{ "--i": 4 }}>Projects</a>
                    <a href="#contact" style={{ "--i": 5 }}>Contact</a>
                    <a href="#resume" style={{ "--i": 6 }}>Resume</a>
                </nav>
            </header>
        </>
    )
}

export default Navbar