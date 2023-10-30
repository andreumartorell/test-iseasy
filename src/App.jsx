import { useState } from 'react'
import './App.css'
import { Logo } from './comonents/logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <div className='nav-container'>
          <nav className='nav'>
            <div className='logo'>
              <a href=''><Logo /></a>
            </div>
          <ul className='nav__items'>
            <li className='nav__item'><a className='nav__link' href="">Contact</a></li>
            <li className='nav__item'><a className='nav__link' href="">Contact</a></li>
            <li className='nav__item'><a className='nav__link' href="">Contact</a></li>
          </ul>
          {/* <Burger /> */}
          </nav>
        </div>
    </header>
      <main className='main'>
        {/* <ArrowUp /> */}
      </main>
    <footer className='footer'>
      <ul className='footer__items'>
        <li className="footer__item">
          <a className='footer__phone' href=''>
            <i className="footer__i fa-solid fa-phone"></i>
            <hr className='footer__item-hr'></hr>+34 932 47 15 45
          </a>
        </li>
        <li className="footer__item">
          <a className='footer__phone' href=''>
            <i className="footer__i footer__i--big fa-brands fa-whatsapp"></i>
            <hr className='footer__item-hr'></hr>+34 640 38 71 76
          </a>
        </li>
        <li className='footer__item'><a className='footer__mail' href=""><i className="footer__i fa-solid fa-envelope"></i><hr className='footer__item-hr'></hr>hello@speakease.com</a></li>
        <li className="footer__item"><a className='footer__loc' href=''>C/ la Coma 41 (Pol. Ind. Pla de Santa Anna) 08272 Sant Fruitós de Bages.</a></li>
      </ul>
      <hr className='footer__hr'></hr>
      <p className='footer__copyright'>©2023 Speakease. Todos los derechos reservados.</p>

    </footer>
    </>
  )
}

export default App
