import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ShortCard = (props) => {
    const classes = useStyles();
    let city = props.city;
    return (
        <div>
            Short info

                    <Paper className={classes.paper}>
                        <h2> {city.name} </h2>
                        {city.main.temp}
                    </Paper>

        </div>
    )
}