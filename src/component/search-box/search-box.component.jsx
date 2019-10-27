import React from 'react';

import './search-box.style.css';


export const SearchBox =({handleChange, placeHolder}) => {
    const searchEvents = (event) => this.setState({ searchText:event.target.value });
    return <input onChange={handleChange} type="search" placeholder={placeHolder}></input>;
}

