import '../styles/CottageVillages.scss';
import shield from '../images/shield.svg';
import lightning from '../images/lightning.svg';
import drop from '../images/drop.svg';
import fire from '../images/fire.svg';

const CottageVillages = () => (
    <div class="cv-section">
        <div class="wrapper">
            <h2 class="section-title">Ваш дом в лучших<br></br>коттеджных поселках</h2>
            <div class="section-content">
                <div class="container">
                    <div class="content-wrapper">
                        <div class="cv-list">
                            <div class="table-header">
                                <div class="table-header-block cottage-villages">
                                    <span class="column-title">Поселок</span>
                                </div>
                                <div class="table-header-block remoteness">
                                    <span class="column-title">Удаленность от города</span>
                                </div>
                                <div class="table-header-block infrastructure">
                                    <span class="column-title">Инфраструктура</span>
                                </div>
                            </div>
                            <div class="cv-item">
                                <div class="cv-text-block">
                                    <h3 class="cv-title">Лисьи Горки</h3>
                                    <p class="cv-description">36 км от Екатеринбурга</p>
                                </div>
                                <div class="cv-remoteness-block">
                                    <span class="minutes">36 км</span>
                                    <span class="area">Тюменский тракт</span>
                                </div>
                                <div class="cv-icons-block">
                                    <img class="cv-icon" src={shield} alt=""></img>
                                    <img class="cv-icon" src={lightning} alt=""></img>
                                    <img class="cv-icon" src={drop} alt=""></img>
                                    <img class="cv-icon" src={fire} alt=""></img>
                                </div>
                            </div>
                            <div class="cv-item">
                                <div class="cv-text-block">
                                    <h3 class="cv-title">Гагарский ключ</h3>
                                    <p class="cv-description">42 км от Екатеринбурга</p>
                                </div>
                                <div class="cv-remoteness-block">
                                    <span class="minutes">42 км</span>
                                    <span class="area">Полевской тракт</span>
                                </div>
                                <div class="cv-icons-block">
                                    <img class="cv-icon" src={shield} alt=""></img>
                                    <img class="cv-icon" src={lightning} alt=""></img>
                                    <img class="cv-icon" src={drop} alt=""></img>
                                </div>
                            </div>
                            <div class="cv-item">
                                <div class="cv-text-block">
                                    <h3 class="cv-title">Чистые росы 2</h3>
                                    <p class="cv-description">71 км от Екатеринбурга</p>
                                </div>
                                <div class="cv-remoteness-block">
                                    <span class="minutes">71 км</span>
                                    <span class="area">Челябинский тракт</span>
                                </div>
                                <div class="cv-icons-block">
                                    <img class="cv-icon" src={shield} alt=""></img>
                                    <img class="cv-icon" src={lightning} alt=""></img>
                                </div>
                            </div>
                            <div class="cv-item">
                                <div class="cv-text-block">
                                    <h3 class="cv-title">Расторгуевъ</h3>
                                    <p class="cv-description">55 км от Екатеринбурга</p>
                                </div>
                                <div class="cv-remoteness-block">
                                    <span class="minutes">55 км</span>
                                    <span class="area">Тюменский тракт</span>
                                </div>
                                <div class="cv-icons-block">
                                    <img class="cv-icon" src={shield} alt=""></img>
                                    <img class="cv-icon" src={lightning} alt=""></img>
                                    <img class="cv-icon" src={drop} alt=""></img>
                                    <img class="cv-icon" src={fire} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div class="cv-see-more-block">
                            <a class="cv-see-more-button" href="/cottage-villages">Посмотреть все</a>
                            <span class="cv-see-more-text">Более 80 поселков</span>
                        </div>
                    </div>
                </div>
                <div class="showcase-house-block">
                    <div class="image"></div>
                    <h2 class="title">Посмотрите выставочный дом<br></br>в коттеджном поселке Клевер</h2>
                    <a class="button" href="#showing">Записаться на просмотр</a>
                </div>
            </div>
        </div>
    </div>
);

export default CottageVillages;
