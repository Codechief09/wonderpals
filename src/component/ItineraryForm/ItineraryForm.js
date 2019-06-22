import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import * as itineraryActions from "../../../src/action/itinerary-actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import AddImage from "../../assets/upload.jpg";

import {
  MuiPickersUtilsProvider,
  DatePicker
} from "@material-ui/pickers";
import { connect } from "react-redux";

const defaultState = {
  name: "",
  location: "",
  dateStart: new Date(),
  dateEnd: new Date(),
  details: "",
  image: ""
};

export class ItineraryForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,

      userId: this.props.userId,
      name: "",
      location: "",
      dateStart: new Date(),
      dateEnd: new Date(),
      details: "",
      image: "",
      id: ""
    };
  }

  handleModal = (trueOrFalse) => {
    this.setState({ isModalOpen: trueOrFalse });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleImageChange = event => {
    this.setState({[event.target.id]: event.target.files[0]});
  };

  handleDateChange = (date, id) => {
    this.setState({ [id]: date });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.itineraryId) {
      this.props.mappedUpdateItinerary(this.state);
    } else {
      this.props.mappedCreateItinerary(this.state);
    }

    this.setState({ isModalOpen: false });
    this.setState(defaultState);
    this.handleModal(false);
  };

  render() {

    const { itineraryId } = this.props;
    const buttonText = itineraryId ? "Update Itinerary" : "Create New Itinerary";

    return (

      <div>

        <Button size="small" variant={this.props.variant ? this.props.variant : "contained"} color="primary"
                onClick={() => this.handleModal(true)}>
          {buttonText}
          <Edit/>
        </Button>

        <Dialog open={this.state.isModalOpen}
                onBackdropClick={() => this.handleModal(false)}
                maxWidth="xs"
                aria-labelledby="form-dialog-title"
        >

          <Card>
            <CardActionArea>
              <label>
                <input
                  accept="image/*"
                  id="image"
                  name="image"
                  type="file"
                  className='display-none'
                  onChange={this.handleImageChange}
                />
                <CardMedia
                  height='200px'
                  component="img"
                  image={AddImage}
                />
              </label>
            </CardActionArea>

            <DialogTitle id="form-dialog-title">{buttonText}</DialogTitle>

            <DialogContent>

              <form onSubmit={this.handleSubmit}>

                <TextField
                  required
                  type='text'
                  id='name'
                  label='Itinerary Name'
                  placeholder='Itinerary Name'
                  value={this.state.name}
                  onChange={this.handleChange}
                  fullWidth
                />

                <TextField
                  required
                  type='text'
                  id='location'
                  value={this.state.location}
                  label='Location'
                  placeholder='Location'
                  onChange={this.handleChange}
                  fullWidth
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    id='itineraryDateStart'
                    value={this.state.dateStart}
                    onChange={(date) => this.handleDateChange(date, "dateStart")}
                    label='Start Date'
                    format="dd-MM-yyyy"
                  />

                  <DatePicker
                    id='itineraryDateEnd'
                    value={this.state.dateEnd}
                    onChange={(date) => this.handleDateChange(date, "dateEnd")}
                    label='End Date'
                    format="dd-MM-yyyy"
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  type='text'
                  id='details'
                  label='Details'
                  // placeholder='Details'
                  value={this.state.details}
                  onChange={this.handleChange}
                  rows='6'
                  multiline
                  fullWidth
                />

                <Button
                  className='submitButton'
                  color='primary'
                  type='submit'
                  variant='contained'
                  fullWidth
                >
                  {buttonText.split(" ")[0]}
                </Button>

              </form>

            </DialogContent>`
          </Card>

        </Dialog>

      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  itineraries: state.token,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  mappedCreateItinerary: (formData) => dispatch(itineraryActions.createItinerary(formData)),
  mappedUpdateItinerary: (formData) => dispatch(itineraryActions.updateItinerary(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryForm);