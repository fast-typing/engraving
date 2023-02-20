import { useState } from "react"

function Select(props) {
    let [showHide, setShowHide] = useState(true)

    function ShowAndHide() {       
        setShowHide(value => !value)  
    }


    const optionsArray = props.items.map((el) => {
        return <li className='option' onClick={ShowAndHide}>{el}</li>
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
