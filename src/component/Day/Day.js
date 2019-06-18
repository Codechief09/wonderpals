import React from 'react';

export default class Day extends React.Component{
    render(){
        return(
            <div id="dayDiv">
                <div id="dayHeader">
                    <h6>{this.props.date}</h6>
                </div>
                <div id="dayBody">
                    <ul>
                        {this.props.hours.map(hour =>
                            <li>
                                {hour.hourTime} : {hour.filled ? hour.eventName : 'unfilled'}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}