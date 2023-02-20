import React, { useState } from 'react';
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

  function changeGun(id, func) {
    setFavorites(data[id])
    func()
  }

  console.log(favorite)

  return (
    <div id='body'>
      <GunsSelect items={names[0]} handleClick={changeGun} />
      <ShoppingButton />
      <Scene />
      <OrdersList favorite={favorite} />
      <Main setFavorites={setFavorites} favorite={favorite} />
    </div>
  );
}

export default App;
