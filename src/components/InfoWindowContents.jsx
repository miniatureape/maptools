export default function InfoWindowContents(props) {
    return (
        <div>
            <span>{props.placeName}</span>
            <a onClick={props.savePlace}>save</a>
        </div>
    )
}
