import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsComponentsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export const OrderTotalsComponents = ({ order, tip, placeOrder }: OrderTotalsComponentsProps) => {

    const subtotal = useMemo(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0)
    }, [order])

    const tipAmount = useMemo(() => {
        return subtotal * tip
    }, [subtotal, tip])

    const totalAmount = useMemo(() => {
        return subtotal + tipAmount
    }, [subtotal, tipAmount])

    return (
        <>
            <div>
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal:
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>
                <p>Propina:
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar:
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="w-full bg-green-300 p-3 uppercase 
                font-bold mt-10 disabled:opacity-20"
                disabled={totalAmount === 0} onClick={() => placeOrder()}>
                Guardar
            </button>
        </>
    )
}
