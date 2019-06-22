import React from 'react';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class Day extends React.Component{
  makeHours = () => {
    let hours = [];
    for (let i = 0; i < 48; i++) {
      let j = null;
      let hour = null;
      let min = null;
      let suffix = "am";
      if (i > 1) {
        j = i * 30;
        if (j % 60) {
          hour = `${Math.floor(j / 60)}`;
          min = "30";
        } else {
          hour = `${Math.floor(j / 60)}`;
          min = "00";
        }
        if (hour > 12) {
          hour -= 12;
          suffix = "pm";
        }
      } else if (i === 1) {
        hour = "12";
        min = "30";
      } else if (i === 0) {
        hour = "12";
        min = "00";
      }
      let str = hour + ":" + min + suffix;
      hours.push(str);
    }
    return hours;
  };

  render(){

    const hours = this.makeHours();

    return(
      <div>
        <Paper className="dayPaper">
          <List component="div" className="hoursList">
            {hours.map((hour, index)=>
              <ListItem button className="timeButton" key={hour + index}>
                <ListItemText primary={`${hour}`}/>
              </ListItem>
            )}
          </List>
        </Paper>
      </div>
    );
  }
}

