import { ShoppingListContext } from '@/contexts/ShoppingListContextProvider'
import { useContext } from 'react'

function useShoppingListContext() {
  const context = useContext(ShoppingListContext)

  if (!context) {
    throw new Error(
      'useShoppingListContext must be used within a ShoppingListContextProvider'
    )
  }
  return context
}

export default useShoppingListContext
