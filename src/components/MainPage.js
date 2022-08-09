import React from 'react';

import bigcityM from '../resources/img/newyorkcitystreet.jpg';
import smallTownsM from '../resources/img/smalltown.jpg';
import natureM from '../resources/img/nature.jpg';
import sunlight from '../resources/img/sunlight.png';
import sunlight2 from '../resources/img/sunlight2.png';
import sunlight3 from '../resources/img/sunlight3.png';

function MainPage() {
    return (
        <section className="MainPage" id="mainpage">
            <a className="bigcities" href="#bigcities">
                <div className="MainPage-Image">
                    <img src={bigcityM} alt = 'big city img'></img>
                </div>
                <div className="MainPage-Sunlight">
                    <img src={sunlight2} alt = 'sunlight'></img>
                </div>
                <div className="MainPage-Text">
                    <h4>big cities</h4>
                </div>                    
            </a>
            <a className="smalltowns" href="#smalltowns">
                <div className="MainPage-Image">
                    <img src={smallTownsM} alt = 'small town img'></img>
                </div>
                <div className="MainPage-Sunlight">
                    <img src={sunlight3} alt = 'sunlight'></img>
                </div>
                <div className="MainPage-Text">
                    <h4>small towns</h4>
                </div>                
            </a>
            <a className="nature" href="#nature">
                <div className="MainPage-Image">
                    <img src={natureM} alt = 'nature img'></img>
                </div>
                <div className="MainPage-Sunlight">
                    <img src={sunlight} alt = 'sunlight'></img>
                </div>
                <div className="MainPage-Text">
                    <h4>nature</h4>
                </div>
            </a>            
        </section>
        
    );
}

export default MainPage;