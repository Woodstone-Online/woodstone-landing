import '../styles/Partners.scss';
import sber from '../images/sber.png';
import ubrir from '../images/ubrir.png';
import proptech from '../images/proptech.png';
import tealtech from '../images/tealtech.png';

const Partners = () => (
    <div class="partners-section">
        <div class="wrapper">
            <div class="container">
                <div class="text-block">
                    <h2 class="section-title">Партнеры</h2>
                    <p class="description">Гарантии, финансовая поддержка, аккретидованы</p>
                </div>
                <div class="logos-block">
                    <div class="logo"><img class="logo-image" src={sber} alt=""></img></div>
                    <div class="logo"><img class="logo-image" src={ubrir} alt=""></img></div>
                    <div class="logo"><img class="logo-image" src={proptech} alt=""></img></div>
                    <div class="logo"><img class="logo-image" src={tealtech} alt=""></img></div>
                </div>
            </div>
        </div>
    </div>
);

export default Partners;
