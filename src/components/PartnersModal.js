import '../styles/PartnersModal.scss';
import { useState } from 'react';
import * as userService from '../services/userService';
import { InterestType } from '../constants';
import close from '../images/close-icon.svg';
import success from '../images/success.svg';
import woodstone from '../images/woodstone.svg';

const Modal = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await userService.createUser({ phone, name, email, preferences: userService.makePreferences(InterestType.Partnership) });
        setIsSubmitted(!isSubmitted);
    }

    return (
        <div className="partners-modal" id="partnership">
            <div className="modal-content">
                <div className="container">
                    <div className="main">
                        {!isSubmitted
                            ?
                            <div className="main-content">
                                <div className="header-block">
                                    <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                                </div>
                                <div className="texts-block">
                                    <h3 className="modal-title">Партнерство</h3>
                                    <p className="modal-text">Наш менеджер перезвонит вам  в течении 14 минут и ответит на возникшие вопросы</p>
                                </div>
                                <form className="modal-form" onSubmit={handleSubmit}>
                                    <input className="modal-form-input" type="tel" placeholder="+7" value={phone} required onChange={handlePhoneChange} />
                                    <input className="modal-form-input" type="text" placeholder="Ваше имя" value={name} required onChange={handleNameChange} />
                                    <input className="modal-form-input" type="email" placeholder="E-mail" value={email} required onChange={handleEmailChange} />
                                    <textarea className="modal-form-textarea" placeholder="Текст сообщения" value={text} onChange={handleTextChange} />
                                    <button className="modal-form-button" type="submit">Оставить заявку</button>
                                </form>
                            </div>
                            :
                            <div className="main-success">
                                <div className="header-block">
                                    <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                                </div>
                                <img className="success-icon" src={success} alt="" />
                                <h3 className="modal-title">Заявка принята</h3>
                                <p className="modal-text">Мы свяжемся с вами в течении 14 минут</p>
                                <a href="/#" className="model-return-button">Вернуться на страницу</a>
                            </div>
                        }
                    </div>
                    <div className="decoration">
                        <div className="header-block">
                            <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                        </div>
                        <div className="logo-block">
                            <img className="logo" src={woodstone} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;