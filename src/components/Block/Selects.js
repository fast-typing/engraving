import Select from '../Select/Select';
import React from 'react';
const variants = [
    ['сюжеты', 'орнаменты', 'инициалы', 'надписи'],
    ['с засечками', 'прописные'],
    ['прицел', 'приклад'],
]

export default function Selects(props) {

    return (
        <div className='selects-container'>
            <Select setOptions={props.setOptions} items={variants[0]} itemsOfItems={props.variantsOfVariants} name={'гравировка'} value={'graving'} handleClick={props.modificateOrder} />
            <Select setOptions={props.setOptions} items={variants[0]} itemsOfItems={props.variantsOfVariants} name={'резьба по дереву'} value={'thread'} handleClick={props.modificateOrder} />
            <Select items={variants[1]} name={'надписи'} value={'inscriptions'} handleClick={props.modificateOrder} />
            <Select items={variants[2]} name={'акссесуары'} value={'modification'} handleClick={props.modificateOrder} />
        </div>
    )
}