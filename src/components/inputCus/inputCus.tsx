import React, {CSSProperties} from "react";
import {FormControl, FormHelperText, TextField} from '@material-ui/core'
import {InputProps as StandardInputProps} from "@material-ui/core/Input/Input";

interface Props {
    style?: CSSProperties | undefined;
    className?: string | undefined;
    onChange?: StandardInputProps['onChange'];
    value?: unknown;
    label?: React.ReactNode;
    title?: string | undefined;
    hint?: string | undefined;
}


let InputCus: React.FC<Props> = (props) => {
    return (
        <FormControl fullWidth>
            <TextField color={"secondary"} fullWidth style={props.style} className={props.className} label={props.label}
                       title={props.title} variant={'standard'} value={props.value} onChange={props.onChange}>
            </TextField>
            {props.hint ? <FormHelperText>{props.hint}</FormHelperText> : <></>}
        </FormControl>

    )
};

export default InputCus

