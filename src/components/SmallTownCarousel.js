import React from 'react';
import SmallTown from './SmallTown';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import smalltown1 from '../resources/img/st-Rothenburg ob der Tauber, Germany.jpg';
import smalltown2 from '../resources/img/st-Shirakawa-go, Japan.jpg';
import smalltown3 from '../resources/img/st-Luang Prabang, Laos.jpg';
import smalltown4 from '../resources/img/st-Port Fairy, Australia.jpg';
import smalltown5 from '../resources/img/st-Zhouzhuang, China.jpg';

import street01 from '../resources/img/street01.jpg';
import street02 from '../resources/img/street02.jpg';
import street03 from '../resources/img/street03.jpg';
import street04 from '../resources/img/street04.jpg';
import street05 from '../resources/img/street05.jpg';

function SmallTownCarousel({searchTerm}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop2: {
          breakpoint: { max: 3000, min: 1200 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 992, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const towns = [
        {name:'Luang Prabang, Laos', img:smalltown3, street:street01 },
        {name:'Zhouzhuang, China', img:smalltown5, street: street02},
        {name:'Rothenburg, Germany', img:smalltown1, street:street03 },
        {name:'Port Fairy, Australia', img:smalltown4, street:street04 },
        {name:'Shirakawa, Japan', img:smalltown2, street:street05 },
    ]
    return (
        <section className="SmallTowns" id="smalltowns">
            <h2 className="text-center">SMALL TOWNS</h2>
            <Carousel responsive={responsive} infinite={true}>
                {towns.map((town, idx) => {
                    return (
                        <SmallTown key={idx} name={town.name} img={town.img} street={town.street} onclick={searchTerm}/>
                    )
                })}
            </Carousel>;
        </section>
    );
};

export default SmallTownCarousel;