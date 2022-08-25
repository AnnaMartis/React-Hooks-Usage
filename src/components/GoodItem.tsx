import { useNavigate } from "react-router-dom";


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
  good: Item,
  addToBasket: (item :Item) => void,
  handleComplete: (good : Item) => void
}


const GoodItem = (props: Props) => {

  let navigate = useNavigate();

  const good = props.good;
  const addToBasket = props.addToBasket;
  const handleComplete = props.handleComplete


  return (
    <div>
        <h4>{good.id}</h4>
        <h4>{good.title}</h4>
        <h4>{good.descr}</h4>
        <img src={good.imgUrl} alt='good' onClick={()=> navigate("/items/" + good.id)}></img>
        <button onClick={()=> addToBasket(good  
        )} >Add To Cart</button>
        <label>
            <input
                  type="checkbox"
                  checked={good.checked}
                  onChange={() => handleComplete(good)}
                />

            Send As a Gift 
        </label>
        
    </div>
  )
}

export default GoodItem