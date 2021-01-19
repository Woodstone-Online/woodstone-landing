import '../styles/Partners.scss';
import sber from '../images/sber.png';
import ubrir from '../images/ubrir.png';
import proptech from '../images/proptech.png';
import tealtech from '../images/tealtech.png';

const Partners = () => (
    <div className="partners-section">
        <a id="partners" href="#partners"> </a>
        <div className="wrapper">
            <div className="container">
                <div className="text-block">
                    <h2 className="section-title">Партнеры</h2>
                    <p className="description">Гарантии, финансовая поддержка, аккретидованы</p>
                </div>
                <div className="logos-block">
                    <div className="logo"><img className="logo-image" src={sber} alt=""></img></div>
                    <div className="logo"><img className="logo-image" src={ubrir} alt=""></img></div>
                    <div className="logo"><img className="logo-image" src={proptech} alt=""></img></div>
                    <div className="logo"><img className="logo-image" src={tealtech} alt=""></img></div>
                </div>
            </div>
        </div>
    </div>
);

export default Partners;
