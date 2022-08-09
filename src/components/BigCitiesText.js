import React from 'react';
import { IoBookOutline } from "react-icons/io5";

const BigCitiesText = (props) => {
    return (
        <div className="col-lg-4 BigCitiesTextChild">
            <div className="BigCitiesTextChild-Top">
                <div className="BigCitiesTextChild-title" onClick={()=>{props.onclick(props.cityname,props.cityname)}} >{props.cityname}</div>
                <p>{props.description}</p>
            </div>
            
            <div className="bookInfowrap">
                <img src={props.img} alt={props.author} />
                <div className="bookInfotext">
                    <h5>{props.author}</h5>
                    <a href={props.booklink} target="_blank" rel="noopener noreferrer">
                        <IoBookOutline />
                        <h5>{props.book}</h5>
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default BigCitiesText;