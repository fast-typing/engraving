import React from 'react'
import Select from '../Select/Select'

const variants = [
    ['сюжеты', 'орнаменты', 'инициалы', 'надписи'],
    ['сюжеты', 'орнаменты', 'инициалы', 'надписи'],
    ['с засечками', 'прописные'],
    ['прицел', 'приклад'],
]

const values = [         // Первое значние это name, второе value, а третье id
    ['гравировка', 'graving', 0],
    ['резьба по дереву', 'thread', 1],
    ['надписи', 'inscriptions', 2],
    ['акссесуары', 'modification', 3],
]

export default function Main({ modificateOrder, modifications, modifArray }) {
    const text = modifArray.length === 0 ? 'Отсутствуют' : modifications

    const selects = values.map((el) => {
        return <Select items={variants[el[2]]} parentName={el[0]} value={el[1]} handleClick={modificateOrder} key={el[1]} />
    })

    return (
        <main>
            <div className='mods-list'> <b style={{ marginRight: 10 }}>Модификации: </b> {text} </div>
            <div className='selects-container'>
                {selects}
            </div>
        </main>
    )
}