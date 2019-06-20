import React from 'react';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class Day extends React.Component{
    makeHours = () =>{
        for(let i = 0; i < 48; i++){
            let j = null;
            let hour = null;
            let min = null;
            let suffix = 'am';
            if(i > 1){
                j = i * 30;
                if(j % 60){
                    hour = `${Math.floor(j / 60)}`;
                    min = '30';
                }else{
                    hour = `${Math.floor(j / 60)}`;
                    min = '00';
                }
                if(hour > 12){
                    hour -= 12;
                    suffix = 'pm'
                }
            }else if(i === 1){
                hour = '12';
                min = '30';
            }else if(i === 0){
                hour = '12';
                min = '00'
            }
            return <ListItem button>
                <ListItemText primary={`${hour}:${min + suffix}`}/>
            </ListItem>
        }
    };

    render(){
        return(
            <div>
                <Paper className="dayPaper">
                    <Typography component="h5">
                      {this.props.date}
                    </Typography>
                    <List component="div" className="hoursList">
                        {this.makeHours()}
                    </List>
                </Paper>
            </div>
        );
    }
}

// {this.props.hours.map(hour=>
//   <ListItem button>
//       <ListItemText primary={`${hour.hourTime} : ${hour.eventName ? hour.eventName : 'Available'}`}/>
//   </ListItem>
// )}