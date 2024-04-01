import useShoppingListContext from '@/hooks/useShoppingListContext'
import { IShoppingListItem } from '@/lib/types'
import ListItem from './shopping-list-item'
import { calculateTotal } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const ShoppingList = () => {
  const { shoppingList } = useShoppingListContext()

  return (
    <>
      {shoppingList?.length === 0 ? (
        <div className="flex flex-col flex-1 items-center justify-center rounded-2xl bg-slate-50 py-8 px-4">
          <p className="text-lg font-semibold">No items to display</p>
          <p className="text-md font-normal">
            Start adding items to calculate finances.
          </p>
        </div>
      ) : (
        <Table className="overflow-auto rounded-2xl">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shoppingList?.map((item: IShoppingListItem) => (
              <ListItem key={item.id} item={item} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right font-bold">
                ${calculateTotal(shoppingList)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  )
}

export default ShoppingList
