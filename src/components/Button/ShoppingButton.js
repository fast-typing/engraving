import React from 'react'

export default function ShoppingButton() {
    function visible() {
        document.querySelector('.order-container').classList.toggle('hide')
    }

    return (
        <button className='shopping-button' onClick={visible}>
            <img src='./img/shopping-cart.png' />
        </button>
    )
}