import React from 'react';
import '../../styles/DropDownMenu.scss';
import pin from '../../images/map-pin.svg';
import clock from '../../images/clock.svg';
import facebook from '../../images/facebook.svg';
import vk from '../../images/vk.svg';
import instagram from '../../images/instagram.svg';
import youtube from '../../images/youtube.svg';
import * as analytics from '../../services/analyticsService';
import { EventAction, EventCategory } from '../../services/analyticsService';

export const DropDownMenu = () => {
    return (
            <div id="menu" className="drop-down-menu">
                <div className="container">
                    <div className="content">
                        <div className="wrapper">
                            <div className="address-block">
                                    <div className="content-block-title">
                                        <img className="content-icon pin" src={pin} alt=""></img>
                                        <p className="content-subtitle">г. Екатеринбург</p>
                                    </div>
                                    <p className="content-text">ул. Малышева, 51, офис 2404</p>
                            </div>
                            <div className="timetable-block">
                                <div className="content-block-title">
                                    <img className="content-icon clock" src={clock} alt=""></img>
                                    <p className="content-subtitle">Время работы офиса</p>
                                </div>
                                <div className="timetable">
                                    <p className="content-text">Пн. – Пт.:<br/>Сб. – Вс.:</p>
                                    <p className="content-text">с 9:00 до 19:00<br/>Выходной</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social">
                        <div className="wrapper">
                            <div className="social-icons-block">
                                <a href="https://www.facebook.com/woodstoneekb/" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={() => analytics.sendEvent(EventCategory.SocialButton, EventAction.facebook)}><img src={facebook} alt=""></img></a>
                                <a href="https://www.facebook.com/woodstoneekb/" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={() => analytics.sendEvent(EventCategory.SocialButton, EventAction.vk)}><img src={vk} alt=""></img></a>
                                <a href="https://www.instagram.com/woodstone_ekb/" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={() => analytics.sendEvent(EventCategory.SocialButton, EventAction.instagram)}><img src={instagram} alt=""></img></a>
                                <a href="https://youtu.be/-PvLnOFiFLU" className="social-icon" target="_blank" rel="noopener noreferrer" onClick={() => analytics.sendEvent(EventCategory.SocialButton, EventAction.youtube)}><img src={youtube} alt=""></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default DropDownMenu;