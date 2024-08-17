import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if (itemExists) {
            const updatedOrder = order.findIndex(item => item === itemExists)
            const newOrder = [...order]
            newOrder[updatedOrder].quantity += 1
            setOrder(newOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
        console.log(order)
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
    }
}
