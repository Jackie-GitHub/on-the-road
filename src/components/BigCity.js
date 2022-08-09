import React from 'react';

const BigCity = (props) => {
    return(
        <div className="BigCities-image" >
            <div className="BigCities-city" style={{backgroundImage:`url(${props.image})`}} ></div>
            <div className="BigCities-link"><div className="BigCities-text" onClick={()=>{props.onclick(props.city,props.city.split(',')[0])}} >{props.city}</div></div>
        </div>        
    );
};

export default BigCity;