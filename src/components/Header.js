import React, { useState } from 'react';
import { IoMenu,IoSearchOutline } from 'react-icons/io5';
import logoImage from '../resources/img/logo.png'; 

function Header ({searchTerm}) {
    const [inputText, setInputText] = useState('');
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const submitFrom = (e) => {
        e.preventDefault();
        searchTerm(inputText,inputText);
        setInputText('');
    }
    return (
        <header>
            <a className="navLogo" href="#mainpage"><img src={logoImage} alt="OnTheRoad logo"/></a>
            <nav className="navBarL">
                <div className="container navBarLCon">
                    <ul>
                        <li className="navItem"><a className="nav-link" href="#description">ABOUT</a></li>
                        <li className="navItem"><a className="nav-link" href="#bigcities">BIG CITIES</a></li>
                        <li className="navItem"><a className="nav-link" href="#smalltowns">SMALL TOWNS</a></li>
                        <li className="navItem"><a className="nav-link" href="#nature">NATURE</a></li>
                        <li className="navItem">
                            <form className="input-group" role="search" onSubmit={submitFrom}>
                                <input 
                                    className="form-control" 
                                    type="search" 
                                    placeholder="Search Place"
                                    value={inputText || ''}
                                    onChange={e => { setInputText(e.target.value) }}
                                />
                                <button className="btn btn-outline-secondary" type="submit"><IoSearchOutline /></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navBarS">
                <div className="container navBarSCon">
                    <div className="navBarSConN">
                        <div className="navMenuIcon" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                            <IoMenu size="40px"/>
                        </div>
                        <ul className={ isNavExpanded ? "show" : "hide"}>
                            <li className="navItem"><a className="nav-link" href="#description">ABOUT</a></li>
                            <li className="navItem"><a className="nav-link" href="#bigcities">BIG CITIES</a></li>
                            <li className="navItem"><a className="nav-link" href="#smalltowns">SMALL TOWNS</a></li>
                            <li className="navItem"><a className="nav-link" href="#nature">NATURE</a></li>
                            <li className="navItem">
                            <form className="input-group" role="search" onSubmit={submitFrom}>
                                <input 
                                    className="form-control" 
                                    type="search" 
                                    placeholder="Search Place"
                                    value={inputText || ''}
                                    onChange={e => { setInputText(e.target.value) }}
                                />
                                <button className="btn btn-outline-secondary" type="submit"><IoSearchOutline /></button>
                            </form>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;