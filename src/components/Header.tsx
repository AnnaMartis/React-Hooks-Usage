import React from 'react';
import {useContext} from 'react';
import {BasketContext} from '../pages/Home'




const Header = () => {

  const value = useContext(BasketContext);

  return (
    <div >
        <button className = {value.isBasketShow ? "Favorites active" : "Favorites"}
            onClick = {value.handleBasketShow}
        >Favorites</button>
    </div>
  )
}

export default Header