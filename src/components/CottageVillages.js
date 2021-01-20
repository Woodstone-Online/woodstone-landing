import '../styles/CottageVillages.scss';
import shield from '../images/shield.svg';
import lightning from '../images/lightning.svg';
import drop from '../images/drop.svg';
import fire from '../images/fire.svg';
import { APP_ENDPOINT } from '../constants';

const CottageVillages = () => (
    <div className="cv-section">
        <div className="wrapper">
            <h2 className="section-title">Ваш дом в лучших<br></br>коттеджных поселках</h2>
            <div className="section-content">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="cv-list">
                            <div className="table-header">
                                <div className="table-header-block cottage-villages">
                                    <span className="column-title">Поселок</span>
                                </div>
                                <div className="table-header-block remoteness">
                                    <span className="column-title">Удаленность от города</span>
                                </div>
                                <div className="table-header-block infrastructure">
                                    <span className="column-title">Инфраструктура</span>
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="cv-text-block">
                                    <h3 className="cv-title">Лисьи Горки</h3>
                                    <p className="cv-description">36 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">36 км</span>
                                    <span className="area">Тюменский тракт</span>
                                </div>
                                <div className="cv-icons-block">
                                    <img className="cv-icon" src={shield} alt=""></img>
                                    <img className="cv-icon" src={lightning} alt=""></img>
                                    <img className="cv-icon" src={drop} alt=""></img>
                                    <img className="cv-icon" src={fire} alt=""></img>
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="cv-text-block">
                                    <h3 className="cv-title">Гагарский ключ</h3>
                                    <p className="cv-description">42 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">42 км</span>
                                    <span className="area">Полевской тракт</span>
                                </div>
                                <div className="cv-icons-block">
                                    <img className="cv-icon" src={shield} alt=""></img>
                                    <img className="cv-icon" src={lightning} alt=""></img>
                                    <img className="cv-icon" src={drop} alt=""></img>
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="cv-text-block">
                                    <h3 className="cv-title">Чистые росы 2</h3>
                                    <p className="cv-description">71 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">71 км</span>
                                    <span className="area">Челябинский тракт</span>
                                </div>
                                <div className="cv-icons-block">
                                    <img className="cv-icon" src={shield} alt=""></img>
                                    <img className="cv-icon" src={lightning} alt=""></img>
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="cv-text-block">
                                    <h3 className="cv-title">Расторгуевъ</h3>
                                    <p className="cv-description">55 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">55 км</span>
                                    <span className="area">Тюменский тракт</span>
                                </div>
                                <div className="cv-icons-block">
                                    <img className="cv-icon" src={shield} alt=""></img>
                                    <img className="cv-icon" src={lightning} alt=""></img>
                                    <img className="cv-icon" src={drop} alt=""></img>
                                    <img className="cv-icon" src={fire} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="cv-see-more-block">
                            <a className="cv-see-more-button" href={APP_ENDPOINT}>Посмотреть все</a>
                            <span className="cv-see-more-text">Более 80 поселков</span>
                        </div>
                    </div>
                </div>
                <div className="showcase-house-block">
                    <div className="image"></div>
                    <h2 className="title">Посмотрите выставочный дом<br></br>в коттеджном поселке Клевер</h2>
                    <a className="button" href="#showhouse">Записаться на просмотр</a>
                </div>
            </div>
        </div>
    </div>
);

export default CottageVillages;
