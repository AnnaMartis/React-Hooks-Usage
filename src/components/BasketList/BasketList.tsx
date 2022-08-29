import { BasketListProps } from "../../common/Types";

import BasketItem from "../BasketItem/BasketItem";

import './BasketList.css'

const BasketList = (props: BasketListProps) => {

  const totalPrice = props.orders.reduce((aggr, order) => aggr + order.quantity * order.price, 0);

  return (
    <div className='BasketList'>
      <span className='Close' onClick = {()=>props.handleBasketShow()}>X</span>
      <h2>Cart</h2>
      {
        props.orders.map(order => (
          <BasketItem key={order.id} 
            order={order} incQuantity = {props.incQuantity} 
            decrQuantity = {props.decrQuantity} 
            removeOrder = {props.removeOrder}
          />
        ))
      }
      <h2>Total Price : {totalPrice}</h2>
    </div>
  );
};

export default BasketList