import React from 'react';
import BigCity from './BigCity';

import newyork from '../resources/img/NewYork.jpg';
import hongkong from '../resources/img/HongKong.jpg';
import london from '../resources/img/London.jpg';
import bangkok from '../resources/img/Bangkok.jpg';
import beijing from '../resources/img/Beijing.jpg';
import paris from '../resources/img/Paris.jpg';
import instabul from '../resources/img/Istanbul.jpg';
import singapore from '../resources/img/Singapore.jpg';

const BigCities = ({searchTerm}) => {
    const cities = [
        {name:'New York, US', img:newyork},
        {name:'Hong Kong, China', img:hongkong},
        {name:'London, UK', img:london},
        {name:'Bangkok, Thailand', img:bangkok},
        {name:'Beijing, China', img:beijing},
        {name:'Paris, France', img:paris},
        {name:'Istanbul, Turkey', img:instabul},
        {name:'Singapore', img:singapore},
    ];

    return (
        <section className="BigCities" id="bigcities">
            <h2>BIG CITIES</h2>
            <div className="row mt-3">
                {
                    cities.map(city => {
                        return (
                            <div className="col-6 col-lg-3 p-0" key={city.name}>
                                <BigCity city={city.name} image={city.img} onclick={searchTerm} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default BigCities;