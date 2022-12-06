function RedButton(props) {
    // let parametrs = {
    //     src: `${props.src}`,
    //     text: `${props.text}`
    // }

    return (
        <div className='button__red'>
            {props.text}
            <img src={props.src}></img>
        </div>
    )
}

export default RedButton