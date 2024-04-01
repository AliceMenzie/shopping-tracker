import { Trash2, Plus, Minus } from 'lucide-react'
import { IShoppingListItem } from '@/lib/types'
import { Button } from '../ui/button'
import useShoppingListContext from '@/hooks/useShoppingListContext'
import { TableRow, TableCell } from '../ui/table'

interface ListItemProps {
  item: IShoppingListItem
}

const ListItem = ({ item }: ListItemProps) => {
  const {
    handleDeleteItem,
    handleItemQuantityIncrease,
    handleItemQuantityDecrease,
  } = useShoppingListContext()

  return (
    <TableRow key={item.id}>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell>
        <div className="flex w-2/5 gap-2 items-center justify-around">
          <Button
            disabled={item.quantity === 1}
            variant={'ghost'}
            size={'icon'}
            onClick={() => handleItemQuantityDecrease(item.id)}
          >
            <Minus size={'16px'} />
          </Button>

          <p className="font-semibold">{item.quantity}</p>

          <Button
            variant={'ghost'}
            size={'icon'}
            onClick={() => handleItemQuantityIncrease(item.id)}
          >
            <Plus size={'16px'} />
          </Button>
        </div>
      </TableCell>
      <TableCell>{item.price}</TableCell>

      <TableCell className="text-right font-semibold">
        $ {item.price * item.quantity}
      </TableCell>
      <TableCell className="text-right">
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={() => handleDeleteItem(item.id)}
        >
          <Trash2 size={'16px'} />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ListItem
