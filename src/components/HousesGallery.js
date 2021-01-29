import '../styles/HousesGallery.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import picture1 from '../images/housef-1.png';
import picture2 from '../images/housef-2.png';
import picture3 from '../images/housef-3.png';
import picture4 from '../images/housef-4.png';
import picture5 from '../images/housef-5.png';
import picture6 from '../images/housef-6.png';
import picture7 from '../images/housef-7.png';
import picture8 from '../images/housef-8.png';

const HousesGallery = () => (
    <div className="gallery-section">
        <ScrollContainer className="houses-gallery">
            {[picture8, picture2, picture3, picture5, picture4, picture6, picture7, picture1].map((picture, idx) => (
                <div className="gallery-item">
                    <img key={idx} src={picture} className="picture" alt="" />
                </div>
            ))}
        </ScrollContainer>
    </div>
);

export default HousesGallery;
