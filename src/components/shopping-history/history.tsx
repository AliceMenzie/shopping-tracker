import { Trash2 } from 'lucide-react'
import useShoppingListContext from '@/hooks/useShoppingListContext'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { IShoppingListItem, TArchivedShoppingList } from '@/lib/types'
import { calculateTotal } from '@/lib/utils'
import { Button } from '../ui/button'

interface HistortItemProps {
  item: IShoppingListItem
}
const HistoryItem = ({ item }: HistortItemProps) => {
  return (
    <div>
      <p className="font-medium">{`${item.name} (${item.quantity})`} </p>
      <p>$ {item.price}</p>
    </div>
  )
}

const History = () => {
  const { archivedLists, deleteArchiveList } = useShoppingListContext()
  return (
    <Accordion type="single" collapsible className="w-full">
      {archivedLists?.length === 0 && (
        <div className="flex flex-col flex-1 h-full items-center justify-center">
          <p className="text-lg font-semibold">No archives to display</p>
          <p className="text-md font-normal">
            Start archiving lists to keep track.
          </p>
        </div>
      )}
      {archivedLists?.map((list: TArchivedShoppingList) => (
        <AccordionItem key={list.id.toString()} value={list.id.toString()}>
          <AccordionTrigger>
            {new Date(list?.dateArchived).toDateString()}
          </AccordionTrigger>
          <AccordionContent className="bg-white p-4 my-4 flex flex-1 gap-4 flex-wrap rounded-2xl">
            <div className="flex flex-wrap flex-1 gap-4">
              {list.shoppingList.map((item: IShoppingListItem) => (
                <HistoryItem key={item.id} item={item} />
              ))}
            </div>
            <div className="font-semibold">
              {' '}
              total: ${calculateTotal(list.shoppingList)}
            </div>

            <Button
              size={'icon'}
              variant={'destructive'}
              onClick={() => deleteArchiveList(list.id)}
            >
              <Trash2 />
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default History
