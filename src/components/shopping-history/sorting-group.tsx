import useShoppingListContext from '@/hooks/useShoppingListContext'
import { Button } from '../ui/button'

const SortingGroup = () => {
  const {
    sortByNewestFirst,
    sortByOldestFirst,
    sortByPriceLowToHigh,
    sortByPriceHighToLow,
  } = useShoppingListContext()
  return (
    <div className="flex flex-col gap-4 py-4">
      <Button variant={'outline'} onClick={sortByNewestFirst}>
        Newest
      </Button>
      <Button variant={'outline'} onClick={sortByOldestFirst}>
        Oldest
      </Button>
      <Button variant={'outline'} onClick={sortByPriceLowToHigh}>
        $
      </Button>
      <Button variant={'outline'} onClick={sortByPriceHighToLow}>
        $$$
      </Button>
    </div>
  )
}

export default SortingGroup
