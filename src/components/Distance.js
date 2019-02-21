import React from "react";
import geolib from "geolib";
import electool_coordinates from "./electool_coordinates";

class Distance extends React.Component {
    state = {
        distance: ''
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.distance.length === 0 || prevState.distance === this.state.distance) {
            this.setState({
                distance: geolib.getDistance(electool_coordinates, this.props.current_coordinates)
            })
        }
    }

    render() {
        return(
            <div>
                {(this.state.distance || this.state.distance === 0) && <h2> You are <b className={"text-warning"}>{this.state.distance}</b> meters away from Electool. </h2>}
            </div>
        )
    }
}

export default Distance;