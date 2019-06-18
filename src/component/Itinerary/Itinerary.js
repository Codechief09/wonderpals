import React from 'react';
import Day from '../Day/Day';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import {object} from "prop-types";


class Itinerary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itineraryHeaderStyle: {
                // backgroundImage://img link here
            }
        }
    };

    render(){
        return(
            <div>
                <Navigation />
                <div id="itineraryHeader" style={this.state.itineraryHeaderStyle}>
                    <h1>{this.props.itineraryName}</h1>
                </div>
                <div>
                    {
                        this.props.days.map(day => {
                            {/*<Day*/}
                                {/*date={day.date}*/}
                                {/*hours={day.hours}*/}
                            {/*/>*/}
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        days: ,
        itineraryBackgroundImage: ,
    }
};
const mapDispatchToProps = dispatch => {
    return{

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
