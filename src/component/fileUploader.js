import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FileInput from "../common/form/fileInput";
import isDocValid from "../utility/docValidator";

class FileUploader extends React.PureComponent {
  handleChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (isDocValid(file)) {
      reader.onloadend = () => {
        this.props.change("upload", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div className="form-group">
        <label>Upload Document</label>
        <Field
          name="upload"
          component={FileInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default reduxForm({
  form: "uploadForm"
})(FileUploader);
