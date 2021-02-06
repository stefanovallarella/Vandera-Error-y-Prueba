import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import AboutImage1 from '../assets/images/about/2.jpeg';
import AboutImage2 from '../assets/images/about/21.png';
import AboutImage3 from '../assets/images/about/22.jpeg';
import AboutImage4 from '../assets/images/about/23.png';
import AboutImage5 from '../assets/images/about/pc.jpg';

export const GalleryWrapper = () => {
    return (
        <Gallery>
            <div className="gallery">
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage1}
                        thumbnail={AboutImage1}
                        width="590"
                        height="1280"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage1} alt="" />
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
                        original={AboutImage4}
                        thumbnail={AboutImage4}
                        width="603"
                        height="1078"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage4} alt="" />
                    )}
                    </Item>
                </div>
                <div className="gallery__item">
                    <Item
                        className="gallery__item"
                        original={AboutImage5}
                        thumbnail={AboutImage5}
                        width="1920"
                        height="1440"
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={AboutImage5} alt="" />
                    )}
                    </Item>
                </div>
            </div>
        </Gallery>
    )
}
export default GalleryWrapper;