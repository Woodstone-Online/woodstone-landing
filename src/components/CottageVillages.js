import '../styles/CottageVillages.scss';
import shield from '../images/shield.svg';
import lightning from '../images/lightning.svg';
import drop from '../images/drop.svg';
import fire from '../images/fire.svg';
import { APP_ENDPOINT } from '../constants';
import * as analytics from '../services/analyticsService';
import { EventAction, EventCategory } from '../services/analyticsService';

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
                                    <p className="cv-description">35 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">35 км</span>
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
                                    <h3 className="cv-title">Ромашкино</h3>
                                    <p className="cv-description">13 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">13 км</span>
                                    <span className="area">Полевской тракт</span>
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
                                    <h3 className="cv-title">Чистые росы 2</h3>
                                    <p className="cv-description">22 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">22 км</span>
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
                                    <h3 className="cv-title">Заповедник</h3>
                                    <p className="cv-description">35 км от Екатеринбурга</p>
                                </div>
                                <div className="cv-remoteness-block">
                                    <span className="minutes">35 км</span>
                                    <span className="area">Челябинский тракт</span>
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
                            <a className="cv-see-more-button" href={APP_ENDPOINT} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.viewCottageVillages)}>Посмотреть все</a>
                            <span className="cv-see-more-text">Более 80 поселков</span>
                        </div>
                    </div>
                </div>
                <div className="showcase-house-block">
                    <div className="image"></div>
                    <h2 className="title">Посмотрите выставочный дом<br></br>в коттеджном поселке Клевер</h2>
                    <a className="button" href="#showhouse" onClick={() => analytics.sendEvent(EventCategory.LeadButton, EventAction.showcase)}>Записаться на просмотр</a>
                </div>
            </div>
        </div>
    </div>
);

export default CottageVillages;
