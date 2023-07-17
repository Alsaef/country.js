import React, { useEffect, useState }  from 'react';
import Country from './country/Country';

import './Countrys.css';

const Countrys = () => {
    const[countryies,setCountry]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
           <h2 className='country-name'>Country Data</h2> 
        
        <div className='countrys-container'>
        {
            countryies.map(country => <Country 
                country={country} 
                key={country.cca3}
                ></Country>)
           }
        </div>
        </div>
    );
};

export default Countrys;