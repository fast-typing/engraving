import { useState } from "react"

function GunSelect(props) {
    let [showHide, setShowHide] = useState(true)


    function ShowAndHide() {
        setShowHide(value => !value)
    }

    const optionsArray = props.items.map((el, id) => {
        return <li className='option' key={id} onClick={() => props.handleClick(id, ShowAndHide)}>{el}</li>
    })


    return (
        <div className="dd-menu">
            <button className="dd-menu__button" onClick={ShowAndHide}>models</button>
            <ul className={`dd-menu__options ${showHide && 'hide'}`} id="options">
                {optionsArray}
            </ul>
        </div>
    );
}

export default GunSelect
