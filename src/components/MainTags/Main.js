import Select from '../Select/Select';
import React from 'react';
const names = [
    ['сюжеты', 'орнаменты', 'инициалы', 'надписи'],
    ['с засечками', 'прописные'],
    ['прицел', 'приклад'],
]

export default function Main() {
    return (
        <main>
            <div className='selects-container'>
                <Select items={names[0]} name={'гравировка'} />
                <Select items={names[0]} name={'резьба по дереву'} />
                <Select items={names[1]} name={'надписи'} />
                <Select items={names[2]} name={'акссесуары'} />
            </div>
        </main>
    )
}