import React from 'react';
import trophy from '../img/trophy.svg';


const Header = () =>{
    return(
        <div className="container">            
            <div className="header-title">
                <h1>Ping Pong Score</h1>
                <img src={trophy} alt="trophy" />
            </div>
            <div className="header-name">
                <p>by Jordi Mesas del Rio</p>
            </div>
        </div>
    );
}

export default Header;
