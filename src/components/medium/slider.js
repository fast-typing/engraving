import RedButton from '../small/buttons/redButton'
import arrow from '../../img/arrow.png'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ak12 from '../../img/ak-12.jpg'
import ak101 from '../../img/ak-101.jpg'
import ak102 from '../../img/ak-102.jpg'
import plk from '../../img/plk.jpg'
import pmm from '../../img/pmm.jpg'
import ppk20 from '../../img/ppk-20.jpg'
import psm from '../../img/psm.jpg'
import sv99 from '../../img/sv-99.jpg'
import svd from '../../img/svd.jpg'


function Slider(props) {
    return (
        <Splide options={{
            pagination: false,
            perPage: 5,
            focus: 'center',
            updateOnMove: true,
            type: 'loop',
            speed: 500,
        }} hasTrack={false}>
            <SplideTrack>
                <SplideSlide>
                    ak-12
                    <img src={ak12} />
                </SplideSlide>
                <SplideSlide>
                    ak-101
                    <img src={ak101} />
                </SplideSlide>
                <SplideSlide>
                    svd
                    <img src={svd} />
                </SplideSlide>
                <SplideSlide>
                    sv-99
                    <img src={sv99} />
                </SplideSlide>
                <SplideSlide>
                    plk
                    <img src={plk} />
                </SplideSlide>
                <SplideSlide>
                    psm
                    <img src={psm} />
                </SplideSlide>
                <SplideSlide>
                    pmm
                    <img src={pmm} />
                </SplideSlide>
                <SplideSlide>
                    ppk-20
                    <img src={ppk20} />
                </SplideSlide>
                <SplideSlide>
                    ak-102
                    <img src={ak102} />
                </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
                {/* <RedButton src={arrow} class={'left-button'} className="splide__arrow splide__arrow--prev" />
                <RedButton src={arrow} class={'right-button'} className="splide__arrow splide__arrow--next" /> */}
                <button className="splide__arrow splide__arrow--prev" ></button>
                <button className="splide__arrow splide__arrow--next" ></button>
            </div>
        </Splide>
    )
}

export default Slider