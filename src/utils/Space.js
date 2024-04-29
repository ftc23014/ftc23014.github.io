import React from 'react';

export default class Space extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lines: this.props.lines || 1,
        }
    }

    render() {
        let brs = [];

        for (let i = 0; i < this.state.lines; i++) {
            brs.push(<br key={`spacebr-${Math.random()}-${i}`}/>)
        }

        return (
            <div>
                {brs}
            </div>
        )
    }
}