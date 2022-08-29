export interface BasketItem {
    id: number,
    title: string,
    descr: string,
    price: number,
    imgUrl: string,
    quantity: number
};

export interface GoodItemI {
    id: number,
    title: string,
    descr: string,
    price: number,
    imgUrl: string,
    quantity: number,
    checked: boolean
};
