import React from "react";
import './ActivityCard.css';

import {backgroundColor} from './../data.js';

import Exercise from './../images/icon-exercise.svg';
import Work from './../images/icon-work.svg';
import Play from './../images/icon-play.svg';
import Social from './../images/icon-social.svg';
import Study from './../images/icon-study.svg';
import SocialCare from './../images/icon-self-care.svg';



export function ActivityCard(props: any) {
    // const activityData = props.data;
    return <ul className="activityList">
        {
            props.data.map((item: {title: string, timeframes: any}) => {
                return <li className="cards" style={{backgroundColor:  backgroundColor[item.title as keyof typeof backgroundColor] }}  key={item.title}>
                    {(() => {
                        switch (item.title) {
                        case 'Exercise':
                            return <img src={Exercise} alt="exercise" />;
                        case 'Play':
                            return <img src={Play} alt="play" />;
                        case 'Work':
                            return <img src={Work} alt="work" />;
                        case 'Social':
                            return <img src={Social} alt="social"/>;
                        case 'Study':
                            return <img src={Study} alt="study"/>;
                        case 'Self Care':
                            return <img src={SocialCare} alt="self care" />
                        default:
                            return null;
                        }
                    })()}
                    {item.title}
                </li>
            })
        }
    </ul>

}