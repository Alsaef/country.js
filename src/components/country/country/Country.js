import React from 'react';
import './Country.css'
const Country = (props) => {
    
    const {name,population,area,flags}=props.country;
    return (
        <div className='Country'>
            <img src={flags.png} alt="" />
            <h2>Country name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
        </div>
    );
};

export default Country;