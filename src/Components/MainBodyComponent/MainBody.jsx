import React from "react";
import {SearchItem} from "./SearchItemComponent/SeacrhItem";
import {ShortCard} from "./ShortCardInfo/ShortCard";


export const MainBody = (props) => {

    return (
        <div>
            HERE MAIN BODY
            <div>
                SEARCH COMPONENT
                <SearchItem/>
            </div>
            <div>
                {/* SHORT INFO CARD*/}
                <ShortCard city={props.city}/>
            </div>
        </div>
    )
}