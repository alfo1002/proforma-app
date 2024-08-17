import { useState } from "react"
import { OrderItem } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [total, setTotal] = useState<number>(0)
    const [auth, setAuth] = useState<boolean>(false)

    return (
        0
    )
}
