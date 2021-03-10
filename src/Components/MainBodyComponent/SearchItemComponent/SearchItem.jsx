import React from "react";
import {Button, Input} from "@material-ui/core";

export const SearchItem = () => {
    return (
        <div>
            <Button> Search City</Button>
            <Input placeholder="Type here the name of City"> </Input>
        </div>
    )
}