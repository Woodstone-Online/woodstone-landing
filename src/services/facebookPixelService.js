import ReactPixel from 'react-facebook-pixel';
import { CONFIG } from '../config';

export function init() {
    return ReactPixel.init(CONFIG.facebookPixelId)
}

export function sendPageview() {
    return ReactPixel.pageView();
}
