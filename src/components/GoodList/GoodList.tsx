import { useReducer } from 'react';

import { GoodItemI } from '../../common/Interfaces';

import { Action, GoodListProps } from '../../common/Types';

import GoodItem from '../GoodItem/GoodItem';

import './GoodList.css'

const reducer = (state : GoodItemI[], action : Action) => {

  switch (action.type) {
    case "COMPLETE":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: !item.checked };
        } else {
          return item;
        };
      });
    default:
      return state;
  };
};

const GoodList = (props : GoodListProps) => {

  const goods = props.goods;
  const addToBasket = props.addToBasket;

  const [redGoods, dispatch] = useReducer(reducer, goods);

  const handleComplete = (good : GoodItemI) => {
    dispatch({ type: "COMPLETE", id: good.id });
  };

  if(!goods.length) return <h2>Nothing is here</h2>;

  return (
    <div className='GoodList'>
      {
        goods.map((good : GoodItemI) => (
          <GoodItem 
            key={good.id} 
            good = {good} 
            addToBasket = {addToBasket} 
            handleComplete = {handleComplete}
          />
        ))
      }
    </div>
  );
};

export default GoodList;