import React from "react";
import { reduxForm, Field } from "redux-form";
import RadioButtonGroup from "../common/form/radioButtonGroup";

const radioBtnGroupForm = () => {
  return (
    <form>
      <Field name="aman" component={RadioButtonGroup} />
    </form>
  );
};

export default reduxForm({
  form: "radioGroup",
  initialValues: {
    aman: "10000"
  }
})(radioBtnGroupForm);
