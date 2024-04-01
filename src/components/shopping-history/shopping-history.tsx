import useShoppingListContext from '@/hooks/useShoppingListContext'
import { Button } from '../ui/button'
import History from './history'
import SortingGroup from './sorting-group'

const ShoppingHistory = () => {
  const { deleteAllArchiveList } = useShoppingListContext()

  return (
    <div className="flex flex-row flex-1 rounded-2xl bg-slate-50 p-4 gap-8">
      <div className="flex flex-col flex-1 rounded-2xl bg-slate-50 p-4">
        <h2 className="text-2xl font-semibold ">Archive</h2>
        <History />
      </div>
      <div className="bg-slate-200 px-4 py-2 rounded-2xl flex flex-col justify-between">
        <h4 className="pt-4 font-medium">Sort By:</h4>
        <SortingGroup />

        <div className="flex flex-1">
          <Button
            className="flex-1 self-end"
            variant={'destructive'}
            onClick={deleteAllArchiveList}
          >
            Delete All
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingHistory
