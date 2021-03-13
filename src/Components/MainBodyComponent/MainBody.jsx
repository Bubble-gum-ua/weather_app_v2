import React from "react";
import {SearchItem} from "./SearchItemComponent/SeacrhItem";
import {ShortCard} from "./ShortCardInfo/ShortCard";
import Grid from "@material-ui/core/Grid";


export const MainBody = (props) => {
    function Card() {
        if (props.city.length > 0) {
            return props.city.map(city =>
                <Grid item xs={3} key={city.id}>
                    <ShortCard city={city}/>
                </Grid>
            )
        }
    }

    return (
        <div>
            HERE MAIN BODY
            <div>
                SEARCH COMPONENT
                <SearchItem/>
            </div>
            <div>
                <Grid container spacing={3}>
                    {Card()}
                </Grid>
            </div>
        </div>
    )
}