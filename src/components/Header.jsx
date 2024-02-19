import React from "react"
import chemsImage from "./chems.jpg";

export default function Header() {
    
    return (
        <header className="header">
            <img 
                src={chemsImage} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">waaaaaaa</h4>
        </header>
    )
}