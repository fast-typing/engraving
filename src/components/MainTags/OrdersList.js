import React, { useEffect, useState } from 'react'
import OrderInfo from '../Block/OrderInfo'

export default function OrderList({ favorite, totalCost }) {
    const [purchases, setPurchases] = useState(JSON.parse(localStorage.getItem('purchases')) || [])

    function addPurchase() {
        setPurchases([...purchases, { ...favorite, price: [totalCost] }])
    }

    useEffect(() => {
        localStorage.setItem('purchases', JSON.stringify(purchases))
    }, [purchases])

    function deletePurchase(id) {
        setPurchases(prevPurchases => {
            prevPurchases.splice(id, 1)
            const newPurchases = prevPurchases.slice(0)
            return newPurchases
        })
    }

    function deleteAllPurcahses() {
        setPurchases([])
    }

    let generalPrice = 0

    for (let i = 0; i < purchases.length; i++) {
        generalPrice += +purchases[i].price
    }

    return (
        <>
            {purchases.length !== 0 && <div className='quantity-of-purcahses'>{purchases.length}</div>}
            <button onClick={addPurchase} className='order-button'>
                Добавить в корзину
            </button>

            <div className='order-container hide'>

                <div className='order__general-information'>
                    <button className="button"> Оформить заказ</button>
                    <span>Общая сумма: {isNaN(generalPrice) ? 0 : generalPrice} руб.</span>
                    <button className="button" onClick={deleteAllPurcahses}>Удалить все товары</button>
                </div>

                {purchases.map((item, id) => (
                    <OrderInfo
                        item={item}
                        key={id}
                        handleClick={() => deletePurchase(id)}
                    />
                ))}
            </div>
        </>
    )
}