import React from "react";
import Alert from "@material-ui/lab/Alert";

const AlertAtom = ({ icon, severity, message }) => {
  return (
    <Alert icon={icon} severity={severity}>
      {message}
    </Alert>
  );
};

export default AlertAtom;
