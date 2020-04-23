import React from 'react'
import './card.scss'
import logo from '../../assets/img/discovercard.png'

export default function card() {
    return (
        <div className="card-container"  >
            <div className="card-logo" >
                <img src={logo} alt="card-logo"/>
            </div>
        </div>
    )
}
