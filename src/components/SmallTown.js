import React from 'react';

const SmallTown = ({name,img,street,onclick}) => {
    return (
        <div className="SmallTowns-building" onClick={()=>{onclick(name.split(",")[0],name)}} >
            <div className="SmallTowns-street">
                <img src={street} alt={name}/>
            </div>
            <h5>{name}</h5>
            <div className="SmallTowns-imageFrame">
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export default SmallTown;