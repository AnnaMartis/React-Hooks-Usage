import {useState, 
        useEffect,
        useCallback, 
        useMemo,
      } from 'react';
import React from 'react';
import Header from '../components/Header';
import GoodList from '../components/GoodList';
import BasketList from '../components/BasketList';
import Search from '../components/Search';
import Input from '../components/Input';


interface Item  {
  id: number,
  title: string,
  descr: string,
  price: number,
  imgUrl: string,
  quantity: number,
  checked: boolean
}


export type MyBasketContext = {
  isBasketShow : boolean,
  handleBasketShow: () => void,
}


export const BasketContext = React.createContext<MyBasketContext>({
  isBasketShow: false,
  handleBasketShow: () => {}
  
});

const Home = () => {
  
  
  const [goods, setGoods] = useState<Item[]>([]);
  const [orders, setOrders] = useState<Item[]>([]);
  const [isBasketShow, setBasketShow] = useState<boolean>(false);

  const orderChange = () => {
    console.log("Favorites has changed")
  }


   useMemo(()=> orderChange(), [orders])

  
 
  const handleBasketShow = useCallback(()=> {
    setBasketShow (!isBasketShow);
  }, [isBasketShow])



  const addToBasket  = (item :Item) => {
    const itemIndex = orders.findIndex(el => el.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity : 1
      }
      setOrders([...orders, newItem])
    } else {
      const newOrder = [...orders];
      newOrder[itemIndex].quantity++;
      setOrders(newOrder)

    }
  }

  const removeOrder = (id: number) => {
    const newOrder = orders.filter(item => item.id !== id)
    setOrders(newOrder)
  }


  const incQuantity = (id :number) => {
    const newOrder = orders.map(el => {
      if(el.id === id) el.quantity++;
      return el
    })
    setOrders(newOrder);
  }


  const decrQuantity = (id : number) => {
    const newOrder = orders.map(el => {
      if(el.id === id) el.quantity = el.quantity>1 ? el.quantity = el.quantity - 1 : 1;
      return el;
    })
    setOrders(newOrder);
  }


  useEffect(()=> {
    fetch("http://localhost:3000/goods")
            .then(response => response.json())
            .then(json => setGoods(json))
  }, [])

  console.log(isBasketShow)

  return (
    <div className="Home">
      <BasketContext.Provider value={{isBasketShow, handleBasketShow}}>
          <Header/> 
      </BasketContext.Provider>
      <Search/>
      <GoodList goods = {goods} addToBasket = {addToBasket}/>
      {
          isBasketShow &&  <BasketList orders = {orders}  incQuantity = {incQuantity} decrQuantity = {decrQuantity} removeOrder = {removeOrder} handleBasketShow = {handleBasketShow}/>
      }
       <Input/>
    </div>
   
  )
}

export default Home