import '../styles/Footer.scss';
import facebook from '../images/facebook.svg';
import vk from '../images/vk.svg';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';

const Footer = () => (
    <div className="footer">
        <div className="wrapper">
            <div className="container">
                <ul className="menu-links-block">
                    <li className="menu-link"><a href="#services">Услуги</a></li>
                    <li className="menu-link"><a href="#gallery">Галерея</a></li>
                    <li className="menu-link"><a href="#technologies">Технологии</a></li>
                    <li className="menu-link"><a href="#partners">Партнеры</a></li>
                    <li className="menu-link"><a href="#help">Помощь</a></li>
                    <li className="menu-link"><a href="#office">Работа офиса</a></li>
                </ul>
                <div className="social-icons-block">
                    <a href="https://www.facebook.com/woodstoneekb/" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""></img></a>
                    <a href="https://www.facebook.com/woodstoneekb/" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={vk} alt=""></img></a>
                    <a href="https://www.instagram.com/woodstone_ekb/" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""></img></a>
                    <a href="https://youtu.be/-PvLnOFiFLU" className="social-icon" target="_blank" rel="noopener noreferrer"><img src={youtube} alt=""></img></a>
                </div>
                <p className="text legal">Общество с ограниченной ответственностью «Вудстоун»<br></br><br></br>Екатеринбург, 620000, ул. Малышева, 51, офис 2404, ОГРН 1206600000353 ИНН 6679130610</p>
                <p className="text approved">© 2021 Woodstone Online</p>
                <p className="text policy">Использование сайта означает согласие с <a href="https://core.woodstone.online/static/privacy_policy.pdf" target="_blank" rel="noopener noreferrer"><span className="green-text">пользовательским соглашением</span></a></p>
            </div>
        </div>
    </div>
);

export default Footer;