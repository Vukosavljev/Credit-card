import React from 'react'
import './card.scss'
import discovercard from '../../assets/img/discovercard.png'
import chip from '../../assets/img/chip.png'

export default function card() {
    return (
        <div className="card-container"  >
            <div className="card-logo" >
                <img className="logo-img" src={discovercard} alt="card-logo"/>
            </div>

            <div className="card-chip">
                <img className="chip-img" src={chip} alt="chip"/>
            </div>

            <div className="card-number" >
                123456789
            </div>

            <div className="card-name-and-date">
                <div>User Name</div>
                <div>02/22</div>
            </div>
        </div>
    )
}
