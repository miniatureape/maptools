import React from 'react'
import SearchBox from '../containers/SearchBox'
import MdMenu from 'react-icons/lib/md/menu'

export default function Controls(props) {
    return (
        <div className="controls">
            <MdMenu onClick={() => props.toggleDrawer() } />
            <SearchBox />;
        </div>
    )
}
