import React from 'react';

import './card.style.css'

export const Card =(props) => {
    return <div className='card-container'>
        <img alt="user" src={`https://robohash.org/${props.user.id}`} ></img>
        <h1>{props.user.name}</h1>
        <p>{props.user.email}</p>
        <p>{props.user.website}</p>
    </div>;
}
