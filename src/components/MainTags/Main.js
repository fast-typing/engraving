import React from 'react'
import Selects from './Selects'

export default function Main(props) {
    const text = props.modifArray.length === 0 ? 'Отсутствуют' : props.modifications

    return (
        <main>
            <Selects modificateOrder={props.modificateOrder} />
            <div className='mods-list'> <b style={{ marginRight: 10 }}>Модификации: </b> {text} </div>
        </main>
    )
}