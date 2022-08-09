import React from 'react';
import BigCitiesText from './BigCitiesText';
import aynRand from '../resources/img/AynRand.jpg';
import hemingway from '../resources/img/ErnestHemingway.jpg';
import linyutang from '../resources/img/LinYutang.jfif';

const BigCitiesTextes = (props) => {
    const cities =[
        {
            name:'New York',
            description:"I would give the greatest sunset in the world for one sight of New York’s skyline. Particularly when one can’t see the details. Just the shapes. The shapes and the thought that made them. The sky over New York and the will of man made visible. What other religion do we need?",
            author:'Ayn Rand(1905-1982)',
            img:aynRand,
            book:'The Fountainhead',
            booklink:'https://en.wikipedia.org/wiki/The_Fountainhead',
        },
        {
            name:'Beijing',
            description:'Peking is a city clearly marked by the seasons,each perfect in its own way and each different from the others. In that city, man lives in civilization and yet in nature, where the maximum comforts of the city and the beauties of rural life are perfectly blended and preserves, where, as in the ideal city, man finds both stimulation for his mind and repose for his soul.',
            author:'Lin Yutang(1895-1976)',
            img:linyutang,
            book:'Moment in Peking',
            booklink:'https://en.wikipedia.org/wiki/Moment_in_Peking',
        },
        {
            name:'Paris',
            description:'If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast.',
            author:'Ernest Hemingway(1899-1961)',
            img:hemingway,
            book:'A Moveable Feast',
            booklink:'https://en.wikipedia.org/wiki/A_Moveable_Feast',
        },
    ]

    return (
        <section className="BigCitiesText">
        <div className="container">
        <div className="row">
            {
                cities.map((city,idx) => {
                    return (
                        <BigCitiesText key={idx}
                            cityname={city.name} 
                            description={city.description}
                            author={city.author}
                            book={city.book}
                            img={city.img}
                            booklink={city.booklink}
                            onclick={props.searchTerm}
                        />
                    )
                })
            }
        </div>
        </div>
        </section>
    );
};

export default BigCitiesTextes;