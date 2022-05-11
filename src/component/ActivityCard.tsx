import React, {useState} from "react";
import './ActivityCard.css';

import {backgroundColor} from './../data.js';

import Exercise from './../images/icon-exercise.svg';
import Work from './../images/icon-work.svg';
import Play from './../images/icon-play.svg';
import Social from './../images/icon-social.svg';
import Study from './../images/icon-study.svg';
import SocialCare from './../images/icon-self-care.svg';

import Ellipsis from './../images/icon-ellipsis.svg';



export function ActivityCard(props: any) {
    // const activityData = props.data;
    // console.log(props);
    let timeLine = props.timeline;
    let [timeLineTitle, setTimelineTitle] = useState('Week')
    // switch(timeLine) {
    //     case 'daily': setTimelineTitle('Day'); break;
    //     case 'weekly': setTimelineTitle('Week'); break;
    //     case 'monthly': setTimelineTitle('Month'); break;
    //     default: setTimelineTitle('Day');
    // }
    return <ul className="activityList">
        {
            props.data.map((item: {title: string, timeframes: any}) => {
                console.log('Item', item);
                return <li className="cards" style={{backgroundColor:  backgroundColor[item.title as keyof typeof backgroundColor] }}  key={item.title}>
                    <div className="card">
                    {(() => {
                        switch (item.title) {
                        case 'Exercise':
                            return <img className="img" src={Exercise} alt="exercise" />;
                        case 'Play':
                            return <img className="img" src={Play} alt="play" />;
                        case 'Work':
                            return <img className="img" src={Work} alt="work" />;
                        case 'Social':
                            return <img className="img" src={Social} alt="social"/>;
                        case 'Study':
                            return <img className="img" src={Study} alt="study"/>;
                        case 'Self Care':
                            return <img className="img" src={SocialCare} alt="self care" />
                        default:
                            return null;
                        }
                    })()}
                    <div className="card-content">
                        <div className="head">
                            <h1>
                                {item.title}
                            </h1>
                            <img className="ellipsis" src={Ellipsis} alt="icon"/>
                        </div>
                        <div className="body">
                            <h1 className="current">{item.timeframes[timeLine].current}hrs</h1>
                            <div className="previous">
                                <p>Last {timeLineTitle} - {item.timeframes[timeLine].previous} hrs</p>
                                {/* <p>{item.timeframes[timeLine].previous} hrs</p> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </li>
            })
        }
    </ul>

}