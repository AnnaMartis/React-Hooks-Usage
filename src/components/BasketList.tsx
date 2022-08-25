import BasketItem from "./BasketItem"


interface Item  {
  id: number,
  title: string,
  descr: string,
  price: number,
  imgUrl: string,
  quantity: number
}

type Props = {
  orders: Item[],
  incQuantity: (id : number) => void,
  decrQuantity: (id : number) => void,
  removeOrder: (id : number) => void,
  handleBasketShow: () => void,
}


const BasketList = (props: Props) => {

  const totalPrice = props.orders.reduce((aggr, order)=> {
    return aggr + order.quantity * order.price;
  },0)

  return (
    <div className='BasketList'>
      <span className='Close' onClick = {()=>props.handleBasketShow()}>X</span>
      <h2>Cart</h2>
      {
        props.orders.map(order => {
          return <BasketItem key={order.id} order={order} incQuantity = {props.incQuantity} decrQuantity = {props.decrQuantity} removeOrder = {props.removeOrder}/>
        })
      }
      <h2>Total Price : {totalPrice}</h2>

    </div>
  )
}

export default BasketList