import {useReducer} from 'react'
import GoodItem from './GoodItem'

interface Item  {
  id: number,
  title: string,
  descr: string,
  price: number,
  imgUrl: string,
  quantity: number,
  checked: boolean
}


type Props = {
  goods: Item[],
  addToBasket: (item :Item) => void
}

type Action = {
  type: string,
  id: number
}

const reducer = (state : Item[], action : Action) => {

  switch (action.type) {
    case "COMPLETE":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: !item.checked };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
 
}


const GoodList = (props : Props) => {

  const goods = props.goods;
  const addToBasket = props.addToBasket;


  const [redGoods, dispatch] = useReducer(reducer, goods);

  const handleComplete = (good : Item) => {
    dispatch({ type: "COMPLETE", id: good.id });
  };


  if(!goods.length) return <h2>Nothing is here</h2>
  


  return (
    <div className='GoodList'>
        {
            goods.map((good : Item, index : number) => {
                return <GoodItem key={index} good = {good} addToBasket = {addToBasket} handleComplete = {handleComplete}/>
            })

        }
    </div>
  )
}

export default GoodList