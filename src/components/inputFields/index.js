import React from "react";
import TextField from '@material-ui/core/TextField';
import "./theme.css";

const inputField = props => {
    return <TextField
        id="input-field"
        label={props.label}
        type={props.type}
        name={props.name}
        margin="normal"
        variant="outlined"
        fullWidth
        className="textfield-outlined login-input-field"
        onChange={props.onChange}
    />
}

export default inputField;