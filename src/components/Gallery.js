import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import AboutImage1 from '../assets/images/about/1.jpg';
import AboutImage2 from '../assets/images/about/2.jpg';
import AboutImage3 from '../assets/images/about/3.jpg';
import AboutImage4 from '../assets/images/about/4.jpg';
import AboutImage5 from '../assets/images/about/5.jpg';

import AboutVideo1 from '../assets/images/about/1.m4v';
import AboutVideo2 from '../assets/images/about/2.m4v';
import AboutVideo3 from '../assets/images/about/3.m4v';
import AboutVideo4 from '../assets/images/about/4.m4v';
import AboutVideo5 from '../assets/images/about/5.m4v';
import AboutVideo6 from '../assets/images/about/6.m4v';
import AboutVideo7 from '../assets/images/about/7.m4v';
import AboutVideo8 from '../assets/images/about/8.m4v';
import AboutVideo9 from '../assets/images/about/9.m4v';

export const GalleryWrapper = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
            <div className="gallery">
                <div className="gallery__item" onClick={() => openLightboxOnSlide(1)}>
                    <img src={AboutImage1} alt=""/>
                </div>
                <div className="gallery__item" onClick={() => openLightboxOnSlide(2)}>
                    <img src={AboutImage2} alt=""/>
                </div>
                <div className="gallery__item" onClick={() => openLightboxOnSlide(3)}>
                    <img src={AboutImage3} alt=""/>
                </div>
                <div className="gallery__item" onClick={() => openLightboxOnSlide(4)}>
                    <img src={AboutImage4} alt=""/>
                </div>
                <div className="gallery__item" onClick={() => openLightboxOnSlide(5)}>
                    <img src={AboutImage5} alt=""/>
                </div>
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={[
                AboutImage1,
                AboutImage2,
                AboutImage3,
                AboutImage4,
                AboutImage5,
                AboutVideo1,
                AboutVideo2,
                AboutVideo3,
                AboutVideo4,
                AboutVideo5,
                AboutVideo6,
                AboutVideo7,
                AboutVideo8,
                AboutVideo9
                ]}
            />
        </>
    )
}
export default GalleryWrapper;