import React from "react";
import {SearchItem} from "./SearchItemComponent/SearchItem";
import {PreviewCard} from "./PreviewCardComponent/PreviewCard";

export const MainBody = (props) => {
    console.log(props)
/*    let cardAdd = props.city.map(city =>  <PreviewCard name={city.name}/>)*/
    return (
        <div>
            Body
            <div>
                <SearchItem/>
            </div>
           {/* <div> {cardAdd}</div>*/}
        </div>
    )
}