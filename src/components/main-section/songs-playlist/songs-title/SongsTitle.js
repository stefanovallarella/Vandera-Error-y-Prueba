const SongsTitle = (props) => {
    return (
        <div className="background">
            <h2 class="title title--border">{props.title ? props.title : 'Erroy y Prueba'}</h2>
        </div>
    )   
}
export default SongsTitle;