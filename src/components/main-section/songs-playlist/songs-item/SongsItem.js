const SongItem = (props) => {
    return (
        <article className="song-container">
            <div className="song-name"><strong>{props.name}</strong></div>
            <div className="song-play-icon">
                <span>02:53</span>
                <button>
                    <i className="fas fa-play"></i>
                </button>
            </div>
        </article>
    )   
}
export default SongItem;
