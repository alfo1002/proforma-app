import { MenuItemComponent } from "./components/MenuItemComponent"
import { menuItems } from "./data/db"

function App() {

  console.log(menuItems)

  return (
    <>
      <header className="bg-slate-400 py-4">
        <h1 className="text-center text-4xl font-bold">Proforma App</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-2xl">Menú</h2>
          <div className="space-y-2 my-2">
            {menuItems.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Contenido</h2>
        </div>

      </main>
    </>
  )
}

export default App
