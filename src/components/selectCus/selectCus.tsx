import {Select, InputLabel, MenuItem, FormHelperText, FormControl} from "@material-ui/core";
import React from "react";
import { v4 } from 'uuid';
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core/SvgIcon/SvgIcon";
interface Item {
    value: string | number;
    title: string;
    icon? : OverridableComponent<SvgIconTypeMap> | undefined;
}

interface Props {
    label?: string | undefined;
    value?: string;
    onChange?: (e: any) => void;
    items?: Item[] | undefined;
    hint?: string | undefined;
}

let SelectCus: React.FC<Props> = (props) => {

    return (<FormControl fullWidth>
        {props.label ? <InputLabel color={"secondary"}>{props.label}</InputLabel> : <></>}
        <Select
            variant={"standard"}
            color={"secondary"}
            value={props.value}
            onChange={props.onChange}>
            <MenuItem value={'undefined'}>
                <em>None</em>
            </MenuItem>
            {props.items?.map((item: Item) => {
                let Ico = item.icon;
                return (
                    <MenuItem  key={v4()} value={item.value}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            {Ico?<Ico style={{margin:'0 5px',fontSize:19}}/>:<></>}
                            <span>{item.title}</span>
                        </div>
                    </MenuItem>
                );
            })}
        </Select>
        {props.hint ? <FormHelperText>{props.hint}</FormHelperText> : <></>}
    </FormControl>);
}


export default SelectCus;