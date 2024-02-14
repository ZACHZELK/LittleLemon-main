import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero-section.css";

export const Hero = () => {
  return (
    <div className='dhero'>
      <h1 className='h1hero'>Little Lemon</h1>
      <h3 className='h3hero'>Chicago</h3>
      <p className='phero'>We are a family owned<br></br>
        Mediterranean restaurant,<br></br>
        focused on traditional<br></br>
        recipes served with a modern<br></br>
        twist.</p>
      <Link to="/Reservations">  <button className='bhero'>Reserve a Table</button></Link>
      <img className='RFhero' src="./icons_assets/restauranfood.jpg" alt='RestaurantFood'></img>
    </div>
  )
};
