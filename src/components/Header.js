import '../styles/Header.scss';
import logo from '../images/logo.svg';
import phone from '../images/phone.svg';
import pin from '../images/map-pin.svg';
import briefcase from '../images/briefcase.svg';

const Header = () => (
    <div class="header-section">
        <div class="primary-container">
            <div class="wrapper">
                <div class="primary">
                    <div class="header-left-group">
                        <div class="burger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <img id="logo" alt="Woodstone Online" src={logo}></img>
                        <span class="descriptor green-text">Начало загородной жизни</span>
                    </div>
                    <div class="header-center-group">
                        <a class="menu-link" href="#services">
                            <div class="menu-link-area">
                                <span class="menu-link-text">Услуги</span>
                            </div>
                        </a>
                        <a class="menu-link" href="#gallery">
                            <div class="menu-link-area">
                                <span class="menu-link-text">Галерея</span>
                            </div>
                        </a>
                        <a class="menu-link" href="#technologies">
                            <div class="menu-link-area">
                                <span class="menu-link-text">Технологии</span>
                            </div>
                        </a>
                        <a class="menu-link" href="#partners">
                            <div class="menu-link-area">
                                <span class="menu-link-text">Партнеры</span>
                            </div>
                        </a>
                    </div>
                    <div class="header-right-group">
                        <img id="phone-icon" src={phone} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="secondary-container">
            <div class="wrapper">
                <div class="secondary">
                    <div class="information">
                        <div class="location">
                            <img class="information-icon" src={pin} alt=""></img>
                            <span class="information-title">Екатеринбург</span>
                        </div>
                        <div class="partners">
                            <img class="information-icon" src={briefcase} alt=""></img>
                            <span class="information-title">Партнерам</span>
                        </div>
                        <div class="office">
                            <img class="information-icon" src={briefcase} alt=""></img>
                            <span class="information-title">Работа офиса</span>
                        </div>
                    </div>
                    <div class="contacts">
                        <div class="number-and-label">
                            <span class="number">+7 (495) 548-85-94</span>
                            <div class="label"><span class="label-text">Сейчас работаем</span></div>
                        </div>
                        <a class="callback-button" href="#callback">Перезвоните мне</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;