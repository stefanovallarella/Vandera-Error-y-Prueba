const SongsTitle = (props) => {
    return (
        <div className="container-background-title">
            <div className="container-dynamic-title">
                <span>{props.title}</span>
                <div className="hr"></div>
            </div>
        </div>
    )   
}
export default SongsTitle;