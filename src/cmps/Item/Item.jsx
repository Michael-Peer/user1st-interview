

import './Item.scss'

export const Item = ({item}) => {

    return (
        <li className="item">
            <img src={item.src} alt={item.alt} />
            <p>{item.alt}</p>
        </li>
    )
}

