import footer from "../assets/img/Footer.svg";
import "./style.scss";
import crown from "../assets/img/crown.png";

const Footer = () => {
  return (
    <div>
      <img className="footer" src={footer} alt="footer" />
      <div className="blackFooter">
        <div className="blackFooter__infos">
          <div className="blackfooter__c">
            <img className="blackFooter__infos__logo" src={crown} alt="logo" />
            <div className="blackFooter__infos__logoText">Krypto<span>Unit</span></div>
          </div>
            
          <p>
            CoinGecko fournit une analyse fondamentale du marché des
            crypto-monnaies. En plus de suivre le cours, le volume et la
            capitalisation du marché, CoinGecko mesure également la croissance
            de la communauté, le développement du code open source, les
            principaux événements ainsi que des indicateurs liés à la
            blockchain.
          </p>
        </div>
        <ul className="blackFooter__AboutMenu">
          <li className="blackFooter__menuHeader">About KryptoUnit</li>
          <li>A propos de nous</li>
          <li>Méthodologie</li>
          <li>Carrières</li>
          <li>Guide d'intégration</li>
          <li>Formulaire</li>
          <li>Publicité</li>
          <li>FAQ</li>
        </ul>
        <ul className="blackFooter__Developpers">
          <li className="blackFooter__menuHeader">Api pour developpeurs</li>
          <li>Widgets</li>
        </ul>
        <ul className="blackFooter__Community">
          <li className="blackFooter__menuHeader">Social</li>
          <li>Telegram Chat</li>
          <li>Telegram News</li>
          <li>Telegram Chat</li>
          <li>Instagram</li>
          <li>Reddit</li>
          <li>Discord</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
        <div className="blackFooter__Email">
          <div className="blackFooter__Email__text">
            <div className="blackFooter__menuHeader">Vous souhaitez tout savoir des crypto-monnaies ?</div> Inscrivez-vous à
            notre newsletter gratuite pour découvrir l'actualité du monde des
            cryptos, ainsi que les nouveautés et les derniers rapports.
          </div>
          <input className="input is-small is-rounded" type="text" placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
