import React from "react";

export default function OrderInfo({item, handleClick}) {
    console.log(`/img/${item.gunName}`)
    return (
        <div className="order-info">
            <img src={`/img/${item.gunName}.jpg`} alt={'фото оружия'} className='order-img' />
            <p className="order-name">{item.gunName}</p>
            <span>{item.price} руб.</span>
            <button className="order-delete" onClick={handleClick}>удалить заказ</button>
        </div>
    )
}