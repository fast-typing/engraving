import React, { useEffect, useState } from 'react';
import Scene from './components/Babylon/Scene';
import GunsSelect from './components/Select/GunsSelect'
import ShoppingButton from './components/Button/ShoppingButton';
import OrdersList from './components/MainTags/OrdersList';
import Main from './components/MainTags/Main';
import data from './data';
import 'babylonjs-loaders';

const names = [
  ['162 Изубр', 'МР-156', 'Сайга 7.62'], // список имеющихся оружий
  [123123, 234, 23, 42, 34, 23423]
]

function App() {
  const [favorite, setFavorites] = useState(data[0])
  const [totalCost, setTotalCost] = useState(favorite.price)
  const [modifArray, setModifArray] = useState([])

  function changeGun(id, func) {
    setFavorites(data[id])
    setTotalCost(data[id].price)
    setModifArray([])
    func()
  }

  function modificateOrder(path, func) {
    setFavorites(prevFavorite => {
      return {
        ...prevFavorite,
        [path]: true
      }
    })
    func()
  }

  function unmodificateOrder(item, id) {
    setFavorites(prevFavorite => {
      return {
        ...prevFavorite,
        [item]: false
      }
    })
    setModifArray(prevModifArray => {
      prevModifArray.splice(id, 1)
      const newPurchases = prevModifArray.slice(0)
      return newPurchases
    })
  }


  useEffect(() => {
    let cost = favorite.price
    for (var key in favorite) {
      if (favorite[key] === true) {
        if (!modifArray.includes(key)) {
          setModifArray([...modifArray, key])
        }
        cost += favorite[`${key.split('_')[0]}_cost`]
      }
    }
    setTotalCost(cost)
  }, [favorite])

  const modifications = modifArray.map((item, id) => (
    <div className='delete-mod' onClick={() => unmodificateOrder(item, id)}>{item}
      <img src='./img/close.png' className='delete-img' />
    </div>
  ))

  console.log(favorite)

  return (
    <div id='body'>
      <GunsSelect items={names[0]} handleClick={changeGun} />
      <ShoppingButton />
      <Scene />
      <OrdersList favorite={favorite} totalCost={totalCost} />
      <Main modifications={modifications} modificateOrder={modificateOrder} modifArray={modifArray} />
    </div>
  );
}

export default App;
