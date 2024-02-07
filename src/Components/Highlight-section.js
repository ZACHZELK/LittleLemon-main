import React from 'react';
import { Link } from 'react-router-dom';
import "./Highlight-section.css";


export const Highlight = () => {
  return (
    <div className='Highlight'>
      <h1 className='SpHighlight'>This weeks specials!</h1>
      <button className='MHighlight'><Link to="/Menu">Online Menu</Link></button>

      <foodcards className="foodcards flex">
        <card className="card">
          <img className='img1Highlight' src='./icons_assets/greek salad.jpg' alt='Greek Salad'></img>
          <foodtitle className="foodtitle">Greek salad</foodtitle>
          <h2 className='price'>$ 12.99</h2>
          <p>The famous greek salad of
            crispy lettuce, peppers, oilves
            and our Chicago style feta
            cheese, garnished with
            crunchy garlic and rosemary
            croutons.</p>
          <button className='Dbutt'>Order a delivery</button>
          <img className='DeliveryIcon' src='./icons_assets/fast-delivery.png' alt='DeliveryIcon'></img>
        </card>

        <card className="card">
          <img className='img1Highlight' src='./icons_assets/bruchetta.svg' alt='Burchetta'></img>
          <foodtitle className="foodtitle">Bruchetta</foodtitle>
          <h2 className='price'>$ 5.99</h2>
          <p>Our Bruchetta is made from
            grilled bread that has been
            smeared with garlic and
            seasoned with salt and oilve
            oil.</p>
          <button className='Dbutt3' >Order a delivery</button>
          <img className='DeliveryIcon' src='./icons_assets/fast-delivery.png' alt='DeliveryIcon'></img>
        </card>

        <card className="card">
          <img className='img1Highlight' src='./icons_assets/lemon dessert.jpg' alt='Lemon Cake'></img>
          <foodtitle className="foodtitle">Lemon Dessert</foodtitle>
          <h2 className='price'>$ 5.00</h2>
          <p>This comes straight from
            grandma's recipes book, every
            last ingredient has been
            sourced and is as authentic
            as can be imagined.</p>
          <button className='Dbutt'>Order a delivery</button>
          <img className='DeliveryIcon' src='./icons_assets/fast-delivery.png' alt='DeliveryIcon'></img>
        </card>
      </foodcards>
    </div>
  );
};

