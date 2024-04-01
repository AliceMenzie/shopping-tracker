export interface IShoppingListItem {
  id: number
  name: string
  quantity: number
  price: number
}
export interface IFormListItem {
  name: string
  quantity: number
  price: number
}

export type ShoppingList = IShoppingListItem[]

export interface TArchivedShoppingList {
  id: number
  dateArchived: Date
  shoppingList: ShoppingList
}
