import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem,
    addItem?: () => void
}

export const MenuItemComponent = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className='border-2 border-teal-300 hover:bg-teal-700 w-full 
            p-3 flex justify-between'
            onClick={addItem}
        >
            <p>{item.name}</p>
            <p className='font-black'>${item.price}</p>
        </button>
    )
}
