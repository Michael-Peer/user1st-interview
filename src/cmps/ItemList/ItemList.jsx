

import { useState } from 'react'
import { Item } from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({items}) => {



    return (
        <ul className="item-list">
            {items.map(item => (
                <Item item={item} key={item.src}/>
            ))}
        </ul>
    )
}

