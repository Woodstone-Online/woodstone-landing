import '../styles/Technologies.scss';
import tech from '../images/tech.png';

const Technologies = () => (
    <div className="technologies-section">
        <a id="technologies" href="#technologies"> </a>
        <div className="wrapper">
            <div className="container">
                <div className="text-block">
                    <h2 className="section-title">Технологии от начала<br></br>и до конца</h2>
                    <p className="description">Woodstone Online объединяет в себе все, что нужно для старта загородной жизни — в режиме онлайн вы можете задать все желаемые параметры своего будущего дома, посмотрите на некоторые из них</p>
                </div>
                <img className="tech-image" src={tech} alt=""></img>
                <div className="switchers-container">
                    <div className="switchers">
                        <div className="gray-switcher"></div>
                        <div className="green-switcher"></div>
                        <div className="gray-switcher"></div>
                        <div className="gray-switcher"></div>
                        <div className="gray-switcher"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Technologies;
