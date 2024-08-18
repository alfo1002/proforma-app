import { MenuItemComponent } from "./components/MenuItemComponent"
import { OrderContentsComponent } from "./components/OrderContentsComponent"
import { OrderTotalsComponents } from "./components/OrderTotalsComponents"
import { TipPercentageFormComponent } from "./components/TipPercentageFormComponent"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-slate-400 py-4">
        <h1 className="text-center text-4xl font-bold">Proforma App</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menú</h2>
          <div className="space-y-2 my-2 pt-3">
            {menuItems.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed
         border-slate-300 p-5 rounded-lg space-y-10">

          {order.length ? (
            <>
              <OrderContentsComponent
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageFormComponent
                setTip={setTip}
                tip={tip}
              />

              <OrderTotalsComponents
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          )
            : (
              <h2 className="font-black text-4xl">Agrega algo al pedido</h2>
            )}




        </div>

      </main>
    </>
  )
}

export default App
