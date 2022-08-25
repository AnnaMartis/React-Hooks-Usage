import React from 'react'


interface Item  {
  id: number,
  title: string,
  descr: string,
  price: number,
  imgUrl: string,
  quantity: number
}

type Props = {
  order: Item,
  incQuantity: (id : number) => void,
  decrQuantity: (id : number) => void,
  removeOrder: (id : number) => void,
}


const BasketItem = (props: Props) => {
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
  )
}

export default BasketItem