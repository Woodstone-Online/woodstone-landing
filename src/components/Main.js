import { useState } from 'react';
import '../styles/Main.scss';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';
import { numberFormatter } from '../utils/numbers';
import { APP_ENDPOINT } from '../constants';
import * as analytics from '../services/analyticsService';
import { EventAction, EventCategory } from '../services/analyticsService';

const MIN_BUDGET = 2000000;
const MAX_BUDGET = 10000000;
const BUDGET_STEP = 100000;
const MIN_RESIDENTS_VALUE = 0;
const MAX_RESIDENTS_VALUE = 20;

const Main = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [budget, setBudget] = useState(MIN_BUDGET);

    const handleBudgetChange = (event) => {
        console.log('handleBudgetChange', event)
        setBudget(event.target.value);
    };

    const changeAdultsValue = (value) => {
        if (value < MIN_RESIDENTS_VALUE || value > MAX_RESIDENTS_VALUE) {
            return;
        }
        setAdults(value)
    };

    const changeChildrenValue = (value) => {
        if (value < MIN_RESIDENTS_VALUE || value > MAX_RESIDENTS_VALUE) {
            return;
        }
        setChildren(value)
    };

    const makeBudgetText = () => budget < MAX_BUDGET ? `${numberFormatter.format(budget)} ₽` : 'Не важно';

    const makeAppLink = () => `${APP_ENDPOINT}?adults=${adults}&children=${children}&budget=${budget}`;

    return (
        <div className="main-section">
            <div className="wrapper">
                <div className="container">
                    <h1 id="title">Ваша новая загородная жизнь за 4 месяца</h1>
                    <p id="description">Задайте параметры дома, выберите землю и запланируйте строительство — весь процесс переезда загород в одном месте</p>
                    <div className="widget">
                        <div className="budget">
                            <div className="budget-texts-block">
                                <span id="budget-text-title">Ваш бюджет</span>
                                <span id="budget-text-sum">{makeBudgetText()}</span>
                            </div>
                            <input
                                className="slider"
                                type="range"
                                min={MIN_BUDGET}
                                max={MAX_BUDGET}
                                defaultValue={MIN_BUDGET}
                                step={BUDGET_STEP}
                                onChange={handleBudgetChange}
                            />
                        </div>
                        <div className="residents">
                            <div className="residents-adults-block">
                                <span className="residents-title">Взрослых</span>
                                <div className="residents-buttons-block">
                                    <img
                                        className="residents-button minus"
                                        src={minus}
                                        alt=""
                                        onClick={() => changeAdultsValue(adults - 1)}
                                    >
                                    </img>
                                    <span className="residents-value">{adults}</span>
                                    <img
                                        className="residents-button plus"
                                        src={plus}
                                        alt=""
                                        onClick={() => changeAdultsValue(adults + 1)}
                                    >
                                    </img>
                                </div>
                            </div>
                            <div className="residents-children-block">
                                <span className="residents-title">Детей</span>
                                <div className="residents-buttons-block">
                                    <img
                                        className="residents-button minus"
                                        src={minus}
                                        alt=""
                                        onClick={() => changeChildrenValue(children - 1)}
                                    >
                                    </img>
                                    <span className="residents-value">{children}</span>
                                    <img
                                        className="residents-button plus"
                                        src={plus}
                                        alt=""
                                        onClick={() => changeChildrenValue(children + 1)}
                                    >
                                    </img>
                                </div>
                            </div>
                        </div>
                        <a className="start-button" href={makeAppLink()} onClick={() => analytics.sendEvent(EventCategory.StartButton, EventAction.getStarted)}>Начать загородную жизнь</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
