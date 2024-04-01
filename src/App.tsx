import Footer from './components/footer/footer'
import Header from './components/header/header'
import ShoppingHistory from './components/shopping-history/shopping-history'
import ShoppingList from './components/shopping-list/shopping-list'
import Sidebar from './components/sidebar/sidebar'
import { ShoppingListContextProvider } from './contexts/ShoppingListContextProvider'

// TODO
//  add graphy capabilities
// add use memo

function App() {
  return (
    <div className="flex flex-1 flex-col p-10 gap-10 w-full  place-items-center">
      <Header />
      <main className="flex flex-col gap-4 w-full max-w-screen-xl">
        <ShoppingListContextProvider>
          <section className="flex flex-1 flex-row flex-wrap w-full h-full gap-2 sm:gap-10">
            <Sidebar />
            <ShoppingList />
          </section>
          <section className="flex flex-1 w-full rounded-2xl ">
            <ShoppingHistory />
          </section>
        </ShoppingListContextProvider>
      </main>
      <Footer />
    </div>
  )
}

export default App
