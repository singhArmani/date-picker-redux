import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
export default class DatePickerInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    dateFormat: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    label: "",
    dateFormat: "DD-MMM-YYYY",
    className: ""
  };

  state = {
    startDate: moment()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });

    //Important:  updating the redux value too
    this.props.input.onChange(date);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.label && <label>{this.props.label}</label>}
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat={this.props.dateFormat}
          disabled={this.props.disabled}
        />
      </React.Fragment>
    );
  }
}
