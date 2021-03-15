import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import $ from 'jquery';
window.jQuery = $;
var fancybox = require('@fancyapps/fancybox');

const GalleryVideo = ({ gallery, type }) => {

    const items = gallery.filter((item) => item.type === type) 

    return (
        <>
            <div className="gallery">
                { items && items.map((item, index) =>
                 type === 'video' ? 
                <a href={item.media} className={index > 4 ? 'gallery__item is-hidden' : 'gallery__item'} data-fancybox="images">
                    <span className="play"><i className="fas fa-play"></i></span>
                    <img src={item.thumb} alt=""/>
                </a> : 
                <a href={item.media} className={index > 4 ? 'gallery__item is-hidden' : 'gallery__item'} data-fancybox="videos">
                    <img src={item.media} alt=""/>
                </a> 
                )}
            </div>
        </>
    )
}
export default GalleryVideo
