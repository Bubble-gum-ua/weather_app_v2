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
    return (
        <div>
            Short info
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h2> {props.city.name} </h2>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}