import React from "react";

export default function OrderInfo({ item, handleClick }) {
    let countMods = 0

    for (var key in item) {
        if (item[key] === true) {
            countMods++
        }
    }

    return (
        <div className="order-info">
            <img src={`/img/${item.gunName}.jpg`} alt={'фото оружия'} className='order-img' />
            <p className="order-name">{item.gunName}</p>
            <span>{item.price} руб.</span>
            <span>Кол-во мод: {countMods}</span>
            <button className="order-delete" onClick={handleClick}>удалить заказ</button>
        </div>
    )
}