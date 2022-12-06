import RedButton from '../small/buttons/redButton'
import arrow from '/Work/project/engraving/src/img/arrow.png'

function Slider(props) {
    return (
        <div className='selections'>
            <RedButton src={arrow}/>
            example gun name 
            <RedButton src={arrow}/>
        </div>
    )
}

export default Slider