import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ShoppingList } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateTotal = (list: ShoppingList) => {
  const total = list.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return total.toFixed(2)
}
