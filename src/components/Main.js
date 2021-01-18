import '../styles/Main.scss';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';

const Main = () => (
    <div class="main-section">
        <div class="wrapper">
            <div class="container">
                <h1 id="title">Дом вашей мечты<br></br>за 4 месяца</h1>
                <p id="description">Задайте параметры дома, выберите землю и запланируйте строительство — весь процесс переезда загород в одном месте</p>
                <div class="widget">
                    <div class="budget">
                        <div class="budget-texts-block">
                            <span id="budget-text-title">Ваш бюджет</span>
                            <span id="budget-text-sum">3 400 000 ₽</span>
                        </div>
                        <input class="slider" name="budget-slider" type="range" min="2000000" max="50000000" value="2000000" step="100000"></input>
                    </div>
                    <div class="residents">
                        <div class="residents-adults-block">
                            <span class="residents-title">Взрослых</span>
                            <div class="residents-buttons-block">
                                <img class="minus" src={minus} alt=""></img>
                                <span class="residents-value">2</span>
                                <img class="plus" src={plus} alt=""></img>
                            </div>
                        </div>
                        <div class="residents-children-block">
                            <span class="residents-title">Детей</span>
                            <div class="residents-buttons-block">
                                <img class="minus" src={minus} alt=""></img>
                                <span class="residents-value">0</span>
                                <img class="plus" src={plus} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <a class="start-button" href="#start">Начать загородную жизнь</a>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
