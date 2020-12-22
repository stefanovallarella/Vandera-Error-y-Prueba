const SongItem = (props) => {
    return (
        <article className="song-container">
            <div className="name"><strong>{props.name}</strong></div>
            <div className="play-icon">
                <span>02:53</span>
                <button>
                    <i className="fas fa-play"></i>
                </button>
            </div>
        </article>
    )   
}
export default SongItem;
