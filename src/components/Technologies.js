import '../styles/Technologies.scss';
import tech from '../images/tech.png';

const Technologies = () => (
    <div class="technologies-section">
        <div class="wrapper">
            <div class="container">
                <div class="text-block">
                    <h2 class="section-title">Технологии от начала<br></br>и до конца</h2>
                    <p class="description">Woodstone Online объединяет в себе все, что нужно для старта загородной жизни — в режиме онлайн вы можете задать все желаемые параметры своего будущего дома, посмотрите на некоторые из них</p>
                </div>
                <img class="tech-image" src={tech} alt=""></img>
                <div class="switchers-container">
                    <div class="switchers">
                        <div class="gray-switcher"></div>
                        <div class="green-switcher"></div>
                        <div class="gray-switcher"></div>
                        <div class="gray-switcher"></div>
                        <div class="gray-switcher"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Technologies;
