import React from "react";
import PropTypes from "prop-types";

import isDocValid from "../../utility/docValidator";

const FileInput = props => <input type="file" onChange={props.handleChange} />;

FileInput.propTypes = {
  hanldeImageChange: PropTypes.func
};

FileInput.defaultProps = {
  handleChange: () => {}
};

export default FileInput;
