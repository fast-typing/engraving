import useToggle from "../../hooks/useToggle"

function Select({ items, value, handleClick, parentName }) {
    const [isVisible, hide] = useToggle()

    const modBlock = document.querySelector('.mod-container')
    function showMod() {
        hide()
        modBlock.classList.remove('hide')
    }

    const optionsArray = items.map((item, id) => {
        let path = `${value}_${id + 1}`
        return <li className='option' key={id} onClick={() => handleClick(path, parentName, item, showMod)}>{item}</li>
    })


    return (
        <div className="menu">
            <button className="dd-menu__button" onClick={hide}>{parentName}</button>
            <ul className={`dd-menu__options ${!isVisible && 'hide'}`}>
                {optionsArray}
            </ul>
        </div>
    );
}

export default Select
