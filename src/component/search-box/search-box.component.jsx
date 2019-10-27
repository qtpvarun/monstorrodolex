import React from 'react';

import './search-box.style.css';


export const SearchBox =({handleChange, placeHolder}) => {
    return <input onChange={handleChange} type="search" placeholder={placeHolder}></input>;
}

