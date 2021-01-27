import ReactGA from 'react-ga';
import { CONFIG } from '../config';

export const EventCategory = {
    StartButton: 'StartButton',
    LeadButton: 'LeadButton',
    SocialButton: 'SocialButton',
    Conversion: 'Conversion'
};

export const EventAction = {
    partnership: 'partnership',
    callback: 'callback',
    showcase: 'showcase',
    getStarted: 'getStarted',
    serviceMortgage: 'serviceMortgage',
    serviceExchange: 'serviceExchange',
    serviceBuilding: 'serviceBuilding',
    serviceBusiness: 'serviceBusiness',
    viewCottageVillages: 'viewCottageVillages',
    facebook: 'facebook',
    vk: 'vk',
    instagram: 'instagram',
    youtube: 'youtube',
    lead: 'lead',
};

export function init() {
    return ReactGA.initialize(CONFIG.gaTrackingId);
}

export function setPage(location) {
    return ReactGA.ga('set', 'page', location);
}

export function sendPageview() {
    return ReactGA.ga('send', 'pageview');
}

export function sendEvent(eventCategory, eventAction) {
    return ReactGA.ga('send', 'event', eventCategory, eventAction);
}
