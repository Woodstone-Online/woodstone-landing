import '../styles/Contacts.scss';
import { useState } from 'react';
import { InterestType } from '../constants';
import * as userService from '../services/userService';
import Spinner from './common/Spinner';
import * as analytics from '../services/analyticsService';
import { EventAction, EventCategory } from '../services/analyticsService';

const Contacts = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        await userService.createUser({ name: null, email, preferences: userService.makePreferences(InterestType.Subscribe) });
        setIsSubmitted(!isSubmitted);
        setIsSubmitting(false);
        analytics.sendEvent(EventCategory.Conversion, EventAction.lead);
    };

    let buttonContent = 'Получить предложение';

    if (isSubmitted) {
        buttonContent = 'Заявка принята';
    }

    if (isSubmitting) {
        buttonContent = <Spinner height={8} width={50} color="#626364" />;
    }

    return (
        <div className="contacts-section">
            <div className="wrapper">
                <div className="container">
                    <div className="phone-block">
                        <div className="phonenumber-block">
                            <span className="phone">+7 (991) 777-32-88</span>
                            <span className="online">Сейчас работаем</span>
                        </div>
                        <a className="callback-button" href="#callback" onClick={() => analytics.sendEvent(EventCategory.LeadButton, EventAction.callback)}>Перезвоните мне</a>
                    </div>
                    <form className="subscribe-form" onSubmit={handleSubmit}>
                        <input id="email-input" type="email" placeholder="E-mail" value={email} required onChange={handleEmailChange}></input>
                        <button id="subscribe-button" type="submit">
                            {buttonContent}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contacts;