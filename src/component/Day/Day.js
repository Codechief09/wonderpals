import React from 'react';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class Day extends React.Component{
    render(){
        return(
            <div>
                <Paper className="dayPaper">
                    <Typography component="h5">
                      {this.props.date}
                    </Typography>
                    <List component="div" className="hoursList">
                      {this.props.hours.map(hour=>
                        <ListItem button>
                            <ListItemText primary={`${hour.hourTime} : ${hour.eventName ? hour.eventName : 'Available'}`}/>
                        </ListItem>
                      )}
                    </List>
                </Paper>
            </div>
        );
    }
}