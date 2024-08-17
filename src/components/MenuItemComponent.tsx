import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem
}

export const MenuItemComponent = ({ item }: MenuItemProps) => {
    return (
        <button className='border-2 border-teal-300 hover:bg-teal-700 w-full p-3 flex justify-between'>
            <p>{item.name}</p>
            <p className='font-black'>${item.price}</p>
        </button>
    )
}
