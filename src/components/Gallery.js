import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import AboutImage1 from '../assets/images/about/1.jpg';
import AboutImage2 from '../assets/images/about/2.jpg';
import AboutImage3 from '../assets/images/about/3.jpg';
import AboutImage4 from '../assets/images/about/4.jpg';
import AboutImage5 from '../assets/images/about/5.jpg';

export const GalleryWrapper = () => {
    return (
        <Gallery>
            <div className="gallery">
                <div className="gallery__item">
                    <Item
                        className="gallery_item"
                        original={AboutImage3}
                        thumbnail={AboutImage3}
                        width="960"
                        height="1280"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage3} alt="" />
                    )}
                    </Item>
                </div>
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage2}
                        thumbnail={AboutImage2}
                        width="712"
                        height="542"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage2} alt="" />
                    )}
                    </Item>
                </div>
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage5}
                        thumbnail={AboutImage5}
                        width="1280"
                        height="915"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage5} alt="" />
                    )}
                    </Item>
                </div>
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage1}
                        thumbnail={AboutImage1}
                        width="549"
                        height="1249"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage1} alt="" />
                    )}
                    </Item>
                </div>
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage4}
                        thumbnail={AboutImage4}
                        width="1280"
                        height="960"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage4} alt="" />
                    )}
                    </Item>
                </div>
            </div>
        </Gallery>
    )
}
export default GalleryWrapper;