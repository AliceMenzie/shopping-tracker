import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { Button } from '../ui/button'
import useShoppingListContext from '@/hooks/useShoppingListContext'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  quantity: z.coerce.number().int().positive(),
  price: z.coerce.number().positive(),
})

const ShoppingListForm = () => {
  const { handleAddItem } = useShoppingListContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      quantity: 1,
      price: 5,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleAddItem(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col flex-1 space-y-8 "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item</FormLabel>
              <FormControl>
                <Input placeholder="peas" {...field} className="bg-white" />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-8 flex-wrap">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="max-w-20">
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type="number" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="max-w-24">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}

export default ShoppingListForm
