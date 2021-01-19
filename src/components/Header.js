import '../styles/Header.scss';
import logo from '../images/logo.svg';
import phone from '../images/phone.svg';
import pin from '../images/map-pin.svg';
import briefcase from '../images/briefcase.svg';

const Header = () => (
    <div className="header-section">
        <div className="primary-container">
            <div className="wrapper">
                <div className="primary">
                    <div className="header-left-group">
                        <div className="burger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <img id="logo" alt="Woodstone Online" src={logo}></img>
                        <span className="descriptor green-text">Начало загородной жизни</span>
                    </div>
                    <div className="header-center-group">
                        <a className="menu-link" href="#services">
                            <div className="menu-link-area">
                                <span className="menu-link-text">Услуги</span>
                            </div>
                        </a>
                        <a className="menu-link" href="#gallery">
                            <div className="menu-link-area">
                                <span className="menu-link-text">Галерея</span>
                            </div>
                        </a>
                        <a className="menu-link" href="#technologies">
                            <div className="menu-link-area">
                                <span className="menu-link-text">Технологии</span>
                            </div>
                        </a>
                        <a className="menu-link" href="#partners">
                            <div className="menu-link-area">
                                <span className="menu-link-text">Партнеры</span>
                            </div>
                        </a>
                    </div>
                    <div className="header-right-group">
                        <a href="tel:+74955488594">
                            <img id="phone-icon" src={phone} alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="secondary-container">
            <div className="wrapper">
                <div className="secondary">
                    <div className="information">
                        <div className="location">
                            <img className="information-icon" src={pin} alt=""></img>
                            <span className="information-title">Екатеринбург</span>
                        </div>
                        <div className="partners">
                            <img className="information-icon" src={briefcase} alt=""></img>
                            <span className="information-title">Партнерам</span>
                        </div>
                        <div className="office">
                            <img className="information-icon" src={briefcase} alt=""></img>
                            <span className="information-title">Работа офиса</span>
                        </div>
                    </div>
                    <div className="contacts">
                        <div className="number-and-label">
                            <span className="number">+7 (495) 548-85-94</span>
                            <div className="label"><span className="label-text">Сейчас работаем</span></div>
                        </div>
                        <a className="callback-button" href="#callback">Перезвоните мне</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;