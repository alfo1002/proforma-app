import { useState } from "react"
import { OrderItem } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = () => {
        console.log('add item')
    }

    return {
        addItem
    }
}
