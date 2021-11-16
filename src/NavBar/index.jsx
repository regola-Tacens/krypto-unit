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
          <div>EN</div>
          <div>USD</div>
          <div>MOON</div>
          <div>Subscribe</div>
        </div>
    </header>
  )
}
export default NavBar;