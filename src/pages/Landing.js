import { Fragment } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Substrate from '../components/Substrate';
import Services from '../components/Services';
import CottageVillages from '../components/CottageVillages';
import HousesTitle from '../components/HousesTitle';
import HousesGallery from '../components/HousesGallery';
import Technologies from '../components/Technologies';
import Partners from '../components/Partners';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import CallbackModal from '../components/CallbackModal';
import ShowhouseModal from '../components/ShowhouseModal';
import PartnersModal from '../components/PartnersModal';
import OfficeModal from '../components/OfficeModal';

const Landing = () => (
    <Fragment>
        <Header />
        <Main />
        <Substrate />
        <Services />
        <CottageVillages />
        <HousesTitle />
        <HousesGallery />
        <Technologies />
        <Partners />
        <Contacts />
        <Footer />
        <CallbackModal />
        <ShowhouseModal />
        <PartnersModal />
        <OfficeModal />
    </Fragment>
);

export default Landing;
