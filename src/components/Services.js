import '../styles/Services.scss';
import family from '../images/family.png';
import exchange from '../images/flat-to-house.png';
import entrepreneur from '../images/entrepreneur.png';
import construction from '../images/construction.png';
import { CONFIG } from '../config';
import * as analytics from '../services/analyticsService';
import { EventAction, EventCategory } from '../services/analyticsService';

const Services = () => (
    <div className="services-section">
        <a id="services" href="#services"> </a>
        <div className="wrapper">
            <h2 className="section-title">Рекомендуемые продукты</h2>
            <div className="services-list">
                <a href={CONFIG.serviceUrl} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.serviceMortgage)}>
                    <div className="services-item">
                        <img className="service-image" src={family} alt=""></img>
                        <div className="service-texts-block">
                            <h3 className="service-title">Загородный дом<br></br>в ипотеку от 2,7%</h3>
                            <p className="service-description">Для строительства достаточно внести всего 20% стоимости — оплачивате остальные 80% по ипотеке уже после переезда</p>
                        </div>
                    </div>
                </a>
                <a href={CONFIG.serviceUrl} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.serviceExchange)}>
                    <div className="services-item">
                        <img className="service-image" src={exchange} alt=""></img>
                        <div className="service-texts-block">
                            <h3 className="service-title">Обмен квартиры<br></br>на загородный дом</h3>
                            <p className="service-description">Поможем продать квартиру в счет стоимости будущего дома. Живите в ней пока не будете готовы к переезду</p>
                        </div>
                    </div>
                </a>
                <a href={CONFIG.serviceUrl} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.serviceBuilding)}>
                    <div className="services-item">
                        <img className="service-image" src={construction} alt=""></img>
                        <div className="service-texts-block">
                            <h3 className="service-title">Строительство по договору подряда</h3>
                            <p className="service-description">Финансируйте строительство дома поэтапно и вносите оплату за фактически выполненные работы</p>
                        </div>
                    </div>
                </a>
                <a href={CONFIG.serviceUrl} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.serviceBusiness)}>
                    <div className="services-item">
                        <img className="service-image" src={entrepreneur} alt=""></img>
                        <div className="service-texts-block">
                            <h3 className="service-title">Дом для предпринимателей в лизинг от 15,5%</h3>
                            <p className="service-description">Программа приобретения загородной недвижимости для владельцев юридических лиц</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default Services;
