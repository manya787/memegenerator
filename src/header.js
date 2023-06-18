import React from "react"
import logo from './troll-face.png'
import './App.css'

export default function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Head-logo" alt="Head-logo"/>
            <h2 className="Head">Meme Generator</h2>
        </header>
    )
}