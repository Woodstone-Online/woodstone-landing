import '../styles/Services.scss';
import family from '../images/family.png';
import exchange from '../images/flat-to-house.png';
import entrepreneur from '../images/entrepreneur.png';
import construction from '../images/construction.png';

const Services = () => (
    <div className="services-section">
        <div className="wrapper">
            <h2 className="section-title">Услуги</h2>
            <div className="services-list">
                <div className="services-item">
                    <img className="service-image" src={family} alt=""></img>
                    <div className="service-texts-block">
                        <h3 className="service-title">Программа «Готовый дом за 10% стоимости»</h3>
                        <p className="service-description">Для строительства достаточно внести всего 10% стоимости — оплачивате остальные 90% по ипотеке уже после преезда</p>
                    </div>
                </div>
                <div className="services-item">
                    <img className="service-image" src={exchange} alt=""></img>
                    <div className="service-texts-block">
                        <h3 className="service-title">Обмен квартиры<br></br>на загородный дом</h3>
                        <p className="service-description">Для строительства достаточно внести всего 10% стоимости — оплачивате остальные 90% по ипотеке уже после преезда</p>
                    </div>
                </div>
                <div className="services-item">
                    <img className="service-image" src={entrepreneur} alt=""></img>
                    <div className="service-texts-block">
                        <h3 className="service-title">Дом для предпринимателей в лизинг от 15,5%</h3>
                        <p className="service-description">Программа приобритения загороной недвижимости для владельцев юридических лиц</p>
                    </div>
                </div>
                <div className="services-item">
                    <img className="service-image" src={construction} alt=""></img>
                    <div className="service-texts-block">
                        <h3 className="service-title">Строительство домов<br></br>в ипотеку от 2,7%</h3>
                        <p className="service-description">Для строительства достаточно внести всего 10% стоимости — оплачивате остальные 90% по ипотеке уже после преезда</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Services;
