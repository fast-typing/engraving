import React from 'react'
import Slider from './Slider'

export default function ModBlock(props) {
    return (
        <div className='mod-container'>
            <div className='mod__top'>
                <div className='mod__slider'>
                    
                </div>
                <img src='./img/close.png' className='mod__close-img' onClick={
                    () => document.querySelector('.mod-container').classList.toggle('hide')
                }
                />
            </div>
            <div className='mod__buttons'>
                <button>prev</button>
                <button className='add-order'>добавить</button>
                <button>next</button>
            </div>
            <Slider options={props.options}/>
        </div>
    )
}