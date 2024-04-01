import Controls from './controls'
import ShoppingListForm from './form'

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4  w-full sm:w-1/3 rounded-2xl p-4 bg-slate-50">
      <ShoppingListForm />
      <Controls />
    </div>
  )
}

export default Sidebar
