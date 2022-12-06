import DropDownMenu from './components/medium/dropDownMenu';
import Slider from './components/medium/slider'
import gun from './img/gun.png'

function App() {
  return (
    <div className='body'>
      <header>

      </header>
      <main>
        <Slider/>
        <img className='model-3D' src={gun}/>
        <div className='choices-menu'>
          <span className='dot-left-top dot'></span>
          <span className='dot-right-top dot'></span>
          <span className='dot-right-bottom dot'></span>
          <span className='dot-left-bottom dot'></span>
          <DropDownMenu/>
          <DropDownMenu/>
          <DropDownMenu/>
          <DropDownMenu/>

        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
