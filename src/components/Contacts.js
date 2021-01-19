import '../styles/Contacts.scss';

const Contacts = () => (
    <div className="contacts-section">
        <div className="wrapper">
            <div className="container">
                <div className="phone-block">
                    <div className="phonenumber-block">
                        <span className="phone">+7 (495) 548-85-94</span>
                        <span className="online">Сейчас работаем</span>
                    </div>
                    <a className="callback-button" href="#callback">Перезвоните мне</a>
                </div>
                <form className="subscribe-form" action="">
                    <input id="email-input" type="email" placeholder="E-mail"></input>
                    <button id="subscribe-button" type="submit">Получить предложение</button>
                </form>
            </div>
        </div>
    </div>
);

export default Contacts;