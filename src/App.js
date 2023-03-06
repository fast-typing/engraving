import React, { useEffect, useState } from 'react';
import useToggle from './hooks/useToggle';
import Scene from './components/Babylon/Scene';
import OrdersList from './components/MainTags/OrdersList';
import Main from './components/MainTags/Main';
import ModBlock from './components/Block/ModBlock';
import data from './data';
import 'babylonjs-loaders';

const guns = ['162 Изубр', 'МР-156', 'Сайга 7.62'] // список имеющихся оружий


function App() {
  const [favorite, setFavorite] = useState(data[0])
  const [totalCost, setTotalCost] = useState(favorite.price)
  const [modifArray, setModifArray] = useState([])
  const [isVisible, changeVisibility] = useToggle()
  const [subModif, setSubModif] = useState({
    value: null,
    name: null,
    parentName: null,
  })

  function changeGun(id, func) {
    setFavorite(data[id])
    setTotalCost(data[id].price)
    setModifArray([])
    func()
  }

  function modificateOrder(path, parentName, name, func) {
    setSubModif(() => {
      return {
        value: [path],
        name,
        parentName,
      }
    })

    func()
  }

  function unModificateOrder(item, id) {
    console.log(item)
    setFavorite(prevFavorite => {
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

  const modifications = modifArray.map((item, id) => (
    <div className='delete-mod' key={id} onClick={() => unModificateOrder(item[2], id)}>{item[0] + ' - ' + item[1]}
      <img src='./img/close.png' className='delete-img' alt='close' />
    </div>
  ))

  const optionsArray = guns.map((el, id) => {
    return <li className='option' key={id} onClick={() => changeGun(id, changeVisibility)}>{el}</li>
  })

  // Из-за этой штуки сайт 2 раза перерендеривается
  useEffect(() => { 
    let cost = favorite.price
    for (var key in favorite) {
      if (favorite[key] === true) {
        cost += favorite[`${key.split('_')[0]}_cost`]
      }
    }
    setTotalCost(cost)
  }, [favorite])


  return (
    <>
      <div className="dd-menu">
        <button className="dd-menu__button" onClick={changeVisibility}>models</button>
        <ul className={`dd-menu__options ${!isVisible && 'hide'}`} id="options">
          {optionsArray}
        </ul>
      </div>

      <button className='shopping-button' onClick={
        () => {
          document.querySelector('.order-container').classList.toggle('hide')
        }}>
        <img src='./img/shopping-cart.png' alt='shopping cart' />
      </button>

      <ModBlock setModifArray={setModifArray} modifArray={modifArray} subModif={subModif} setFavorite={setFavorite}/>
      <Scene />
      <OrdersList favorite={favorite} totalCost={totalCost} />
      <Main modifications={modifications} modificateOrder={modificateOrder} modifArray={modifArray} />
    </>
  );
}

export default App;
