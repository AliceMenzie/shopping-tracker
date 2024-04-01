import { exampleArchivedList, exampleShoppingListItems } from '@/lib/constants'
import {
  ShoppingList,
  IShoppingListItem,
  IFormListItem,
  TArchivedShoppingList,
} from '@/lib/types'
import { createContext, useEffect, useState } from 'react'

type ShoppingListContextProviderProps = {
  children: React.ReactNode
}

type ShoppingListContextType = {
  shoppingList: ShoppingList
  archivedLists: TArchivedShoppingList[]
  handleAddItem: (item: IFormListItem) => void
  handleDeleteItem: (id: number) => void
  handleDeleteAll: () => void
  handleAddToArchiveList: () => void
  deleteArchiveList: (id: number) => void
  deleteAllArchiveList: () => void
  handleItemQuantityIncrease: (id: number) => void
  handleItemQuantityDecrease: (id: number) => void
  sortByNewestFirst: () => void
  sortByOldestFirst: () => void
  sortByPriceLowToHigh: () => void
  sortByPriceHighToLow: () => void
}

export const ShoppingListContext =
  createContext<ShoppingListContextType | null>(null)

export function ShoppingListContextProvider({
  children,
}: ShoppingListContextProviderProps) {
  const [shoppingList, setShoppingList] = useState<ShoppingList>(
    () =>
      JSON.parse(localStorage.getItem('listItems')!) || exampleShoppingListItems
  )

  const [archivedLists, setArchivedLists] = useState<TArchivedShoppingList[]>(
    () =>
      JSON.parse(localStorage.getItem('archivedLists')!) || exampleArchivedList
  )

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(shoppingList))
  }, [shoppingList])

  useEffect(() => {
    localStorage.setItem('archivedLists', JSON.stringify(archivedLists))
  }, [archivedLists])

  const handleAddItem = (item: IFormListItem) => {
    const newItem: IShoppingListItem = {
      id: new Date().getTime(),
      ...item,
    }
    setShoppingList([...shoppingList, newItem])
  }
  const handleDeleteItem = (id: number) => {
    const filteredList = shoppingList.filter((item) => item.id !== id)
    setShoppingList([...filteredList])
  }
  const handleDeleteAll = () => {
    setShoppingList([])
  }
  const handleAddToArchiveList = () => {
    const newArchive: TArchivedShoppingList = {
      id: new Date().getTime(),
      dateArchived: new Date(),
      shoppingList: shoppingList,
    }
    setArchivedLists([newArchive, ...archivedLists])
    setShoppingList([])
  }

  const deleteArchiveList = (id: number) => {
    const filteredList = archivedLists!.filter((item) => item.id !== id)
    setArchivedLists([...filteredList])
  }

  const deleteAllArchiveList = () => {
    setArchivedLists([])
  }

  const handleItemQuantityIncrease = (id: number) => {
    const updatedList = shoppingList.map((item) => {
      if (item.id === id) {
        item.quantity += 1
      }
      return item
    })
    setShoppingList(updatedList)
  }

  const handleItemQuantityDecrease = (id: number) => {
    const updatedList = shoppingList.map((item) => {
      if (item.id === id) {
        item.quantity -= 1
      }
      return item
    })
    setShoppingList(updatedList)
  }

  const sortByNewestFirst = () => {
    const sortedList = [...archivedLists].sort(
      (a, b) => b.dateArchived.getTime() - a.dateArchived.getTime()
    )
    setArchivedLists(sortedList)
  }

  const sortByOldestFirst = () => {
    const sortedList = [...archivedLists].sort(
      (a, b) => a.dateArchived.getTime() - b.dateArchived.getTime()
    )
    setArchivedLists(sortedList)
  }

  const sortByPriceLowToHigh = () => {
    const sortedList = [...archivedLists].sort(
      (a, b) =>
        a.shoppingList[0].price * a.shoppingList[0].quantity -
        b.shoppingList[0].price * b.shoppingList[0].quantity
    )
    setArchivedLists(sortedList)
  }

  const sortByPriceHighToLow = () => {
    const sortedList = [...archivedLists].sort(
      (a, b) =>
        b.shoppingList[0].price * b.shoppingList[0].quantity -
        a.shoppingList[0].price * a.shoppingList[0].quantity
    )
    setArchivedLists(sortedList)
  }

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        archivedLists,
        handleAddItem,
        handleDeleteItem,
        handleDeleteAll,
        handleAddToArchiveList,
        deleteArchiveList,
        deleteAllArchiveList,
        handleItemQuantityIncrease,
        handleItemQuantityDecrease,
        sortByNewestFirst,
        sortByOldestFirst,
        sortByPriceLowToHigh,
        sortByPriceHighToLow,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}
