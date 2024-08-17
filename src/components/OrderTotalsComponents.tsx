import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsComponentsProps = {
    order: OrderItem[]
}

export const OrderTotalsComponents = ({ order }: OrderTotalsComponentsProps) => {

    const subtotal = useMemo(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0)
    }, [order])

    return (
        <>
            <div>
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal:
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>
                <p>Propina:
                    <span className="font-bold">$100.00</span>
                </p>
                <p>Total a Pagar:
                    <span className="font-bold">$100.00</span>
                </p>
            </div>
            <button className="bg-green-300 px-3 py-1 rounded-lg"> Guardar</button>
        </>
    )
}
