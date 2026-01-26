import React from 'react'
import './CustomButton01.css'

const CustomButton01 = ({ text, url, nextwindows, index }) => {
    return (
        <>
            <a className="home-sci" href={url} target={nextwindows} style={{ "--i":  index  }}>{text}</a>
        </>
    )
}

export default CustomButton01
