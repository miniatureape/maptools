import MdHighlightRemove from 'react-icons/lib/md/highlight-remove'

export default function PlaceRemoveButton(props) {
    return (
        <div onClick={() => props.deletePlace(props.place)}>
            <MdHighlightRemove /> Remove
        </div>
    )
}
