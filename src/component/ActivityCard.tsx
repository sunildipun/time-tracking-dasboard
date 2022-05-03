import React from "react";
import './ActivityCard.css';

export function ActivityCard(props: any) {
    // const activityData = props.data;
    return <ul className="activityList">
        {
            props.data.map((item: {title: string, timeframes: any}) => {
                return <li className="cards" key={item.title}>{item.title}</li>
            })
        }
    </ul>
}