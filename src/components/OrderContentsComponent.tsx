import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export const OrderContentsComponent = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Mi Orden:</h2>
            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-lg">No hay elementos en la orden</p>
                    : (
                        order.map(item =>
                            <div key={item.id} className="flex justify-between 
                            items-center border-t border-gray-200 py-2 last-of-type:border-b">
                                <div>
                                    <p className="font-black">{item.name} <span className="text-2xl">x{item.quantity}</span></p>
                                    <p>{formatCurrency(item.price * item.quantity)}</p>
                                </div>
                                <div>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg"
                                        onClick={() => removeItem(item.id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
