import { useState } from "react"

function Select(props) {
    const [showHide, setShowHide] = useState(true)
    const modBlock = document.querySelector('.mod-container')

    function ShowAndHide() {
        setShowHide(value => !value)
    }

    function forLi() {
        setShowHide(value => !value)
        modBlock.classList.toggle('hide')
    }

    const optionsArray = props.items.map((el, id) => {
        let path = `${props.value}_${id + 1}`
        return <li className='option' key={id} onClick={() => props.handleClick(path, forLi)}>{el}</li>
    })


    return (
        <div className="menu">
            <button className="dd-menu__button" onClick={ShowAndHide}>{props.name}</button>
            <ul className={`dd-menu__options ${showHide && 'hide'}`}>
                {optionsArray}
            </ul>
        </div>
    );
}

export default Select
