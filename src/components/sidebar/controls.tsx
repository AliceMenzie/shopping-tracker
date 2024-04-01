import useShoppingListContext from '@/hooks/useShoppingListContext'
import { Button } from '../ui/button'

const Controls = () => {
  const { handleDeleteAll, handleAddToArchiveList } = useShoppingListContext()
  return (
    <section className="flex flex-col gap-4">
      <Button variant={'outline'} onClick={handleAddToArchiveList}>
        Archive List
      </Button>
      <Button variant={'outline'} onClick={handleDeleteAll}>
        Clear List
      </Button>
    </section>
  )
}

export default Controls
