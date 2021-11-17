import './index.scss';
import { useState } from 'react'
import crown from '../assets/img/crown.png';

const NavBar = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false)

  const handleOpenBurgerMenu = () => {
    setBurgerOpen(!isBurgerOpen)
    console.log(isBurgerOpen)
  }

  return (
    <header className="header">
        <div className ="header__navbar">
          <div className="header__navbar__logo">
            <img className="header__navbar__logo__img" src={crown} alt="kryptoLogo" />
            <div className="header__navbar__logo__text">Krypto<span>Unit</span></div>
          </div>
          <nav className="header__navbar__buttons">
            <div className="menuBtn">COINS</div>
            <h3 className="menuBtn">EXCHANGES</h3>
            <h3 className="menuBtn">DEFI</h3>
            <h3 className="menuBtn">NFT</h3>
            <h3 className="menuBtn">PORTFOLIO</h3>
            <h3 className="menuBtn">PUBLICATIONS</h3>
          </nav>
        </div>
        <div className="header__userSpecs">
          <div className="select is-small header__userSpecs__language">
            <select name="userLanguage">
              <option >EN</option>
              <option >FR</option>
              <option >ES</option>
            </select>
          </div>
          <div className="select is-small header__userSpecs__currency">
            <select name="selectedCurrency">
              <option >USD</option>
              <option >EUR</option>
              <option >CNY</option>
              <option >DKK</option>
            </select>
          </div>
          <div className="header__userSpecs__subscribe">SIGN UP</div>
        </div>
          <div className="burger" onClick={handleOpenBurgerMenu}>
          <div className={isBurgerOpen ? "burger__btn burger__btn--open" : "burger__btn"}></div>
          <div className={isBurgerOpen ? "burger__background burger--open":"burger__background"}>
            <h4 className="burgerCoins">COINS</h4>
            <h2 className="burgerCoins">EXCHANGE</h2>
            <h2 className="burgerCoins">DEFI</h2>
            <h2 className="burgerCoins">NFT</h2>
            <h2 className="burgerCoins">PORTFOLIO</h2>
            <h2 className="burgerCoins">PORTFPUBLICATIONS</h2>
          </div>
          
          </div>
    </header>
  )
}
export default NavBar;