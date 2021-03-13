import React from "react";
import {SearchItem} from "./SearchItemComponent/SeacrhItem";
import {ShortCard} from "./ShortCardInfo/ShortCard";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center"
    },

}));

export const MainBody = (props) => {
    function Card() {
        if (props.city.length > 0) {
            return props.city.map(city =>
                <Grid item key={city.id}>
                    <ShortCard city={city}/>
                </Grid>
            )
        }
    }

    const classes = useStyles();

    return (
        <div>
            HERE MAIN BODY
            <div>
                SEARCH COMPONENT
                <SearchItem/>

            </div>
            <div>
                <Grid container spacing={3} className={classes.root}>
                    {Card()}
                </Grid>
            </div>
        </div>
    )
}