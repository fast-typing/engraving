import React from 'react'

export default function OrderButton(props) {
    return (
        <button onClick={props.handleClick} className='order-button'>
            Добавить в корзину
        </button>
    )
}