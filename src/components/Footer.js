import '../styles/Footer.scss';
import facebook from '../images/facebook.svg';
import vk from '../images/vk.svg';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';

const Footer = () => (
    <div class="footer">
        <div class="wrapper">
            <div class="container">
                <ul class="menu-links-block">
                    <li class="menu-link">Услуги</li>
                    <li class="menu-link">Галерея</li>
                    <li class="menu-link">Технологии</li>
                    <li class="menu-link">Партнеры</li>
                    <li class="menu-link">Помощь</li>
                    <li class="menu-link">Работа офиса</li>
                </ul>
                <div class="social-icons-block">
                    <a href="https://www.facebook.com/woodstoneekb/" class="social-icon" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""></img></a>
                    <a href="https://www.facebook.com/woodstoneekb/" class="social-icon" target="_blank" rel="noopener noreferrer"><img src={vk} alt=""></img></a>
                    <a href="https://www.instagram.com/woodstone_ekb/" class="social-icon" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""></img></a>
                    <a href="https://youtu.be/-PvLnOFiFLU" class="social-icon" target="_blank" rel="noopener noreferrer"><img src={youtube} alt=""></img></a>
                </div>
                <p class="text legal">Общество с ограниченной ответственностью «Вудстоун»<br></br><br></br>Екатеринбург, 620000, ул. Малышева, 51, офис 2404, ОГРН 1206600000353 ИНН 6679130610</p>
                <p class="text approved">Аккредитованный партнер Дом.рф</p>
                <p class="text policy">Использование сайта означает согласие с <a href="https://core.woodstone.online/static/privacy_policy.pdf" target="_blank" rel="noopener noreferrer"><span class="green-text">пользовательским соглашением</span></a></p>
            </div>
        </div>
    </div>
);

export default Footer;