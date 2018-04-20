import Alert from "react-s-alert";
const VALID_DOC_TYPES = ["image/jpeg", "image/png"]; // add more types if required
const MAX_DOC_SIZE = 500000; // 500 KB

export default file => {
  if (file && !VALID_DOC_TYPES.includes(file.type)) {
    // you can use any alert or indicator to notify user about invalid types
    Alert.error("Invalid type", {
      effect: "slide"
    });
    console.error("Wrong type");
    return false;
  }
  if (file && file.size > MAX_DOC_SIZE) {
    Alert.error("Max size exceeded");
    console.error("size exceeded");
    return false;
  }
  return true;
};
