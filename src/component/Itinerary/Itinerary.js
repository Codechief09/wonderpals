import React from 'react';
//MAKE ME! import day from 'day'; //stil needs to be made!!
class Itinerary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            days: [],
        };
    };

    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render(){
        return(
            <div>
                <div>
                    <input
                        type='text'
                        name='name'
                        onChange={this.handleChange}
                        placeholder='Expense'
                    />
                    <button>Add Day</button>
                </div>
                {
                    this.props.days.map(day => {
                        <day

                        />
                    })
                }
            </div>
        );
    }
}