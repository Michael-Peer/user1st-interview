

import { useState } from 'react'
import './Search.scss'

export const Search = ({onUserSeach}) => {
    const [term, setTerm] = useState('')


    const handleChange = ({ target }) => {
        setTerm(target.value)
    }

    const onSearch = (ev) => {
        ev.preventDefault()
        onUserSeach(term)
    }





    return (
        <div className="align-self-center ">
            <form>
                <input type="text" value={term} onChange={handleChange} />
                <button type="submit" onClick={onSearch}>Search</button>
            </form>
        </div>
    )
}

