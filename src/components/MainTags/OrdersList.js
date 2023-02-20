import React, { useState } from 'react'
import AddCartButton from '../Button/AddCartButton'
import OrderInfo from '../Block/OrderInfo'
import GeneralOrdersInfo from '../Block/GeneralOrdersInfo'

export default function OrderList(props) {
    const [purchases, setPurchases] = useState([])

    function addPurchase() {
        setPurchases([...purchases, props.favorite])
    }

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
        console.log(purchases[i].price)
        generalPrice += purchases[i].price
    }

    return (
        <>
            {purchases.length !== 0 && <div className='quantity-of-purcahses'>{purchases.length}</div>} {/* Почему-то если просто оставить purchases.length, то он его рендерит ??? */}
            <AddCartButton handleClick={addPurchase} />
            <div className='order-container'>
                <GeneralOrdersInfo handleClick={deleteAllPurcahses} price={generalPrice} />
                {purchases.map((item, id) => (
                    <OrderInfo
                        item={item}
                        key={id}
                        id={id}
                        handleClick={deletePurchase}
                    />
                ))}
            </div>
        </>
    )
}