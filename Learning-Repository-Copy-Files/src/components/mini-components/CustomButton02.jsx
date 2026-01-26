import React from 'react'
import './CustomButton02.css'

const CustomButton02 = ({ text, url }) => {
    return (
        <>
            <a className="btn-box" href={url}>{text}</a>
        </>
    )
}

export default CustomButton02
