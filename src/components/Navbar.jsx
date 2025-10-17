import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header>
                <img src="image/icon_01.png" class="logo" alt="Logo"></img>
                <button class="menu-btn" id="menu-btn">☰</button>
                <nav id="sidebar">
                    <button class="close-btn" id="close-btn">✖</button>
                    <a href="#home" style="--i:1">Home</a>
                    <a href="#about" style="--i:2">About</a>
                    <a href="#skills" style="--i:3">Skills</a>
                    <a href="#projects" style="--i:4">Projects</a>
                    <a href="#contact" style="--i:5">Contact</a>
                    <a href="#resume" style="--i:6">Resume</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar