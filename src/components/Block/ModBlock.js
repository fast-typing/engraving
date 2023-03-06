import React from 'react'
import Slider from './Slider'

export default function ModBlock({ subModif, setModifArray, modifArray, setFavorite }) {

    function addPurchase() {
        const modName = [subModif['parentName'], subModif['name'], subModif['value']]
        const path = subModif['value'][0]

        if (modifArray.every((item) => item[2] !== modName[2])) {
            setModifArray([...modifArray, modName])
        } else {
            alert('Данная модификация уже добавлена')
        }

        setFavorite(prevFavorite => {
            return {
                ...prevFavorite,
                [path]: true
            }
        })
    }

    return (
        <div className='mod-container hide'>
            <img src='./img/close.png' className='mod__close-img' onClick={
                () => document.querySelector('.mod-container').classList.toggle('hide')
            }
                alt='close'
            />
            <div className='mod__slider'>
                <Slider subModif={subModif}/>
            </div>

            <button className='add-order' onClick={() => addPurchase()}>Добавить</button>
            <button className='add-order'>Применить</button>
        </div>

    )
}