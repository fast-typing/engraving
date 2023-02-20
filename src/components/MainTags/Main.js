import Select from '../Select/Select';
import React from 'react';
const names = [
    ['сюжеты', 'орнаменты', 'инициалы', 'надписи'],
    ['с засечками', 'прописные'],
    ['прицел', 'приклад'],
]

export default function Main(props) {

    const currentOrder = props.favorite

    function modificateOrder(path, func) {        // path = graving.n1
        // const currentOrder = props.favorite.path
        props.setFavorites(prevFavorite => {
            return {
                ...prevFavorite,
                n2: !prevFavorite.graving.n2
            }
        })
        func()
    }


    return (
        <main>
            <div className='selects-container'>
                <Select items={names[0]} name={'гравировка'} handleClick={modificateOrder} />
                <Select items={names[0]} name={'резьба по дереву'} handleClick={modificateOrder} />
                <Select items={names[1]} name={'надписи'} handleClick={modificateOrder} />
                <Select items={names[2]} name={'акссесуары'} handleClick={modificateOrder} />
            </div>
        </main>
    )
}