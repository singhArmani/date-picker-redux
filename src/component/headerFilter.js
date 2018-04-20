import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import DatePickerInput from "../common/form/datePickerInput";
import appConfig from "../config";

class HeaderFilter extends React.PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool // disabling datepicker while ajax call is in flight
  };

  static defaultProps = {
    isLoading: false
  };
  render() {
    return (
      <form>
        <div class="form-group">
          <Field
            className="date-input"
            label="From"
            name="fromDate"
            component={DatePickerInput}
            dateFormat={appConfig.dateFormat}
            disabled={this.props.isLoading}
          />
        </div>
        <div class="form-group">
          <Field
            label="To"
            name="toDate"
            component={DatePickerInput}
            dateFormat={appConfig.dateFormat}
            disabled={this.props.isLoading}
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "HeaderFilterForm",
  initialValues: {
    fromDate: moment(),
    toDate: moment()
  }
})(HeaderFilter);
