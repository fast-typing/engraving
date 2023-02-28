import React, { useState } from 'react'
import AddCartButton from '../Button/AddCartButton'
import OrderInfo from '../Block/OrderInfo'
import GeneralOrdersInfo from '../Block/GeneralOrdersInfo'

export default function OrderList(props) {
    const [purchases, setPurchases] = useState([])

    function addPurchase() {
        setPurchases([...purchases, {...props.favorite, price: [props.totalCost]}])
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
        generalPrice += +purchases[i].price
    }

    return (
        <>
            {purchases.length !== 0 && <div className='quantity-of-purcahses'>{purchases.length}</div>} 
            <AddCartButton handleClick={addPurchase} />
            <div className='order-container hide'>
                <GeneralOrdersInfo handleClick={deleteAllPurcahses} price={generalPrice} />
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