import React from 'react';

class ExplorationMap extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div></div>
        )
    }

    onChange(center) {
        this.props.setCenter(center)
    }

}

export default ExplorationMap;
