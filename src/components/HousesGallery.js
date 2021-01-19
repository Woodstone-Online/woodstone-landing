import '../styles/HousesGallery.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import picture from '../images/gallery-1.png';

const HousesGallery = () => (
    <div className="gallery-section">
        <ScrollContainer className="houses-gallery">
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
            <div className="gallery-item">
                <img src={picture} className="picture" alt="" />
            </div>
        </ScrollContainer>
    </div>
);

export default HousesGallery;
