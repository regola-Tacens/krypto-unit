import './index.scss';
import crown from '../assets/img/crown.png';

const NavBar = () => {

  return (
    <header className="header">
        <div className ="header__navbar">
          <div className="header__navbar__logo">
            <img className="header__navbar__logo__img" src={crown} alt="kryptoLogo" />
            <div className="header__navbar__logo__text">Krypto<span>Unit</span></div>
          </div>
          <nav className="header__navbar__buttons">
            <h3>Coins</h3>
            <h3>Exchanges</h3>
            <h3>DeFi</h3>
            <h3>NFT</h3>
            <h3>Portfolio</h3>
            <h3>Publications</h3>
          </nav>
        </div>
        <div className="header__userSpecs">
          <div className="select is-normal header__userSpecs__language">
            <select name="userLanguage">
              <option >EN</option>
              <option >FR</option>
              <option >ES</option>
            </select>
          </div>
          <div className="select is-normal header__userSpecs__currency">
            <select name="selectedCurrency">
              <option >USD</option>
              <option >EUR</option>
              <option >CNY</option>
              <option >DKK</option>
            </select>
          </div>
          <div>MOON</div>
          <div className="header__userSpecs__subscribe">Subscribe</div>
        </div>
    </header>
  )
}
export default NavBar;