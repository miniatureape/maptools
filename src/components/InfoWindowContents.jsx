export default function InfoWindowContents(props) {
    return (
        <div>
            <div>{props.activePlaceDetails.name}</div>
            <div>{props.activePlaceDetails.formatted_address}</div>
            <div onClick={() => props.savePlace(props.activePlaceDetails) }>save</div>
        </div>
    )
}
