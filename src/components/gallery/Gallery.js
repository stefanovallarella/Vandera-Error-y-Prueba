import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const GalleryVideo = ({ gallery, type }) => {

    const items = gallery.filter((item) => item.type === type) 

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
                { items && items.slice(0, 5).map((item, index) =>
                <div className="gallery__item" onClick={() => openLightboxOnSlide(index+1)}>
                    { type === 'video' ?
                        <>
                            <span className="play"><i className="fas fa-play"></i></span>
                            <img src={item.thumb} alt=""/>
                        </>
                        :
                        <img src={item.media} alt=""/>
                    }
                </div>
                )}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                slide={lightboxController.slide}
                sources={items.map((item) => item.media)}
                type={type}
            />
        </>
    )
}

export default GalleryVideo
