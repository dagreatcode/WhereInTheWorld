// rsf

import React, {useContext} from "react";
import AlertContext from "../utils/ContextAPI/AlertContext";

function Alert(props) {
  const {message, type, setAlert} = useContext(AlertContext)

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {message && (
            <div className={`alert alert-${type || "primary"}`} role="alert">
              {message}<span style={{float:"right"}} onClick={setAlert({ message: "", type: ""})}>x</span>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default Alert;
