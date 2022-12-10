function RedButton(props) {
    // let parametrs = {
    //     src: `${props.src}`,
    //     text: `${props.text}`
    // }

    return (
        <div className='button__red' onClick={props.click}>
            {props.text}
            <img src={props.src} className={props.class}></img>
        </div>
    )
}

export default RedButton