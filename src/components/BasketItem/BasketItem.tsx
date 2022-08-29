import { BasketItemProps } from '../../common/Types';

const BasketItem = (props: BasketItemProps) => {
  return (
    <div className='BasketItem'>
      <span>{props.order.title}</span>
      <button onClick = {()=>props.decrQuantity(props.order.id)}>-</button>
      <span>{props.order.quantity}</span>
      <button onClick = {()=>props.incQuantity(props.order.id)}>+</button>
      <span>=</span>
      <span>{props.order.price*props.order.quantity}</span>
      <img src={props.order.imgUrl} width = "25px" height = "25px" alt = "background"></img>
      <span onClick = {()=>props.removeOrder(props.order.id)}>&times;</span>
   </div>
  );
};

export default BasketItem;