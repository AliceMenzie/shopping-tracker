import { TArchivedShoppingList, ShoppingList } from './types'

export const exampleShoppingListItems: ShoppingList = [
  {
    id: 1,
    name: 'ice-cream',
    quantity: 1,
    price: 9.99,
  },
  {
    id: 2,
    name: 'loaf of bread',
    quantity: 1,
    price: 6.25,
  },
  {
    id: 3,
    name: 'avacado',
    quantity: 2,
    price: 3.6,
  },
  // {
  //   id: 4,
  //   name: 'item4',
  //   quantity: 1,
  //   price: 30,
  // },
  // {
  //   id: 5,
  //   name: 'item5',
  //   quantity: 1,
  //   price: 30,
  // },
  // { id: 6, name: 'item6', quantity: 1, price: 30 },
  // { id: 7, name: 'item6', quantity: 1, price: 30 },
  // { id: 7, name: 'item6', quantity: 1, price: 30 },
]

export const exampleArchivedList: TArchivedShoppingList[] = [
  {
    id: 1,
    dateArchived: new Date('2021-10-01'),
    shoppingList: [
      {
        id: 1,
        name: 'socks',
        quantity: 2,
        price: 10,
      },
      {
        id: 2,
        name: 'ice-cream',
        quantity: 1,
        price: 20,
      },
    ],
  },
  {
    id: 2,
    dateArchived: new Date('2021-10-02'),
    shoppingList: [
      {
        id: 1,
        name: 'item1',
        quantity: 1,
        price: 10,
      },
      {
        id: 2,
        name: 'item2',
        quantity: 1,
        price: 20,
      },
    ],
  },
  // {
  //   id: 3,
  //   dateArchived: new Date('2021-10-03'),
  //   shoppingList: [
  //     {
  //       id: 1,
  //       name: 'item1',
  //       quantity: 1,
  //       price: 10,
  //     },
  //     {
  //       id: 2,
  //       name: 'item2',
  //       quantity: 1,
  //       price: 20,
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   dateArchived: new Date('2021-10-04'),
  //   shoppingList: [
  //     {
  //       id: 1,
  //       name: 'item1',
  //       quantity: 1,
  //       price: 10,
  //     },
  //     {
  //       id: 2,
  //       name: 'item2',
  //       quantity: 1,
  //       price: 20,
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   dateArchived: new Date('2021-10-05'),
  //   shoppingList: [
  //     {
  //       id: 1,
  //       name: 'item1',
  //       quantity: 1,
  //       price: 10,
  //     },
  //     {
  //       id: 2,
  //       name: 'item2',
  //       quantity: 1,
  //       price: 20,
  //     },
  //   ],
  // },
]
