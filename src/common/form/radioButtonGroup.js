import React from "react";
import { FormGroup } from "react-bootstrap";

const options = [
  {
    value: 10000,
    label: "10000"
  },
  {
    value: 20000,
    label: "20000"
  },
  {
    value: 30000,
    label: "30000"
  }
];
class RadioButtonGroup extends React.PureComponent {
  render() {
    return (
      <FormGroup controlId={this.props.name}>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="aman" // this name has to be same
              value={option.value}
              checked={this.props.value}
              onChange={this.props.input.onChange}
            />
            <div>
              <div className={"text-center font-weight-bold"}>
                {option.label}
              </div>
            </div>
          </label>
        ))}
      </FormGroup>
    );
  }
}

export default RadioButtonGroup;
