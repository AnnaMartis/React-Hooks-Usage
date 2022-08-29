import { BasketItem, GoodItemI } from "./Interfaces";

export type BasketItemProps = {
    order: BasketItem,
    incQuantity: (id: number) => void,
    decrQuantity: (id: number) => void,
    removeOrder: (id: number) => void,
};

export type BasketListProps = {
  orders: BasketItem[],
  incQuantity: (id: number) => void,
  decrQuantity: (id: number) => void,
  removeOrder: (id: number) => void,
  handleBasketShow: () => void,
};

export type CustomInputProps = {
    type: string,
    id: string,
    value: string,
    onChange: (e: any) => any   
};

export type GoodItemProps = {
    good: GoodItemI,
    addToBasket: (item: GoodItemI) => void,
    handleComplete: (good: GoodItemI) => void
};

export type GoodListProps = {
    goods: GoodItemI[],
    addToBasket: (item: GoodItemI) => void
};

export type Action = {
    type: string,
    id: number
};