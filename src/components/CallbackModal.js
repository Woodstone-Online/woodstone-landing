import '../styles/Modal.scss';
import { useState } from 'react';
import close from '../images/close-icon.svg';

const Modal = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="modal" id="callback">
            <div className="modal-content">
                <div className="container">
                    <div className="wrapper">
                        <div className="header-block">
                            <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                        </div>
                        <div className="texts-block">
                            <h3 className="modal-title">Перезвоните мне</h3>
                            <p className="modal-text">Наш менеджер перезвонит вам  в течении 14 минут и ответит на возникшие вопросы</p>
                        </div>
                        <form className="modal-form">
                            <input className="modal-form-input" type="tel" placeholder="+7" value={phone} onChange={handlePhoneChange} />
                            <input className="modal-form-input" type="text" placeholder="Ваше имя" value={name} onChange={handleNameChange} />
                            <button className="modal-form-button" type="submit">Оставить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;