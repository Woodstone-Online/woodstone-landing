import '../styles/Contacts.scss';

const Contacts = () => (
    <div class="contacts-section">
        <div class="wrapper">
            <div class="container">
                <div class="phone-block">
                    <div class="phonenumber-block">
                        <span class="phone">+7 (495) 548-85-94</span>
                        <span class="online">Сейчас работаем</span>
                    </div>
                    <a class="callback-button" href="#callback">Перезвоните мне</a>
                </div>
                <form class="subscribe-form" action="">
                    <input id="email-input" type="text" placeholder="E-mail"></input>
                    <button id="subscribe-button" type="submit">Получить предложение</button>
                </form>
            </div>
        </div>
    </div>
);

export default Contacts;