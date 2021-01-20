import '../styles/OfficeModal.scss';
import close from '../images/close-icon.svg';

const Modal = () => {
    return (
        <div className="modal" id="office">
            <div className="modal-content">
                <div className="container">
                    <div className="main">
                        <div className="main-content">
                            <div className="header-block">
                                <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                            </div>
                            <div className="texts-block">
                                <h3 className="modal-title">Работа офиса</h3>
                                <div className="address-block">
                                    <p className="modal-subtitle">г. Екатеринбург</p>
                                    <p className="modal-text">ул. Малышева, 51, офис 2404</p>
                                </div>
                                <div className="hours-block">
                                    <p className="modal-subtitle">Время работы офиса</p>
                                    <div className="timetable">
                                        <p className="modal-text">Пн. – Пт.:<br/>Сб. – Вс.:</p>
                                        <p className="modal-text">с 9:00 до 19:00<br/>Выходной</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="decoration">
                        <div className="header-block">
                            <a href="/#" className="modal-close-icon"><img src={close} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;