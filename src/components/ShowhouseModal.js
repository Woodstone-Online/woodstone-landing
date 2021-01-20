import '../styles/ShowhouseModal.scss';
import { useState } from 'react';
import * as userService from '../services/userService';
import { InterestType } from '../constants';
import close from '../images/close-icon.svg';
import success from '../images/success.svg';
import Spinner from './common/Spinner';

const Modal = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        await userService.createUser({ phone, name, preferences: userService.makePreferences(InterestType.Showcase) });
        setIsSubmitted(!isSubmitted);
        setIsSubmitting(false);
    };

    let main = (
        <div className="main-content">
            <div className="header-block">
                <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
            </div>
            <div className="texts-block">
                <h3 className="modal-title">Записаться на просмотр</h3>
                <p className="modal-text">Посмотрите место, где в ближайшем будущем сможете жить вы сами</p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
                <input className="modal-form-input" type="tel" placeholder="+7" value={phone} required onChange={handlePhoneChange} />
                <input className="modal-form-input" type="text" placeholder="Ваше имя" value={name} required onChange={handleNameChange} />
                <button className="modal-form-button" type="submit">Оставить заявку</button>
            </form>
        </div>
    );

    if (isSubmitted) {
        main = (
            <div className="main-success">
                <div className="header-block">
                    <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                </div>
                <img className="success-icon" src={success} alt="" />
                <h3 className="modal-title">Заявка принята</h3>
                <p className="modal-text">Мы свяжемся с вами в течении 14 минут</p>
                <a href="/#" className="model-return-button">Вернуться на страницу</a>
            </div>
        );
    }

    if (isSubmitting) {
        main = <Spinner />
    }

    return (
        <div className="showhouse-modal" id="showhouse">
            <div className="modal-content">
                <div className="container">
                    <div className="main">
                        {main}
                    </div>
                    <div className="decoration">
                        <div className="header-block">
                            <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                        </div>
                        <div className="texts-block">
                            <span className="decoration-text">Выберите удобное время</span>
                            <span className="decoration-text">Посмотрите дом</span>
                            <span className="decoration-text">Ощутите загородную жизнь</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;