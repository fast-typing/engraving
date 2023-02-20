import React from "react";

export default function GeneralOrdersInfo(props) {
    return (
        <div className='order__general-information'>
            <button className="button"> Оформить заказ</button>
            <span>Общая сумма: {isNaN(props.price) ? 0 : props.price} руб.</span>
            <button className="button" onClick={props.handleClick}>Удалить все товары</button>
        </div>
    )
}