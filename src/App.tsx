import React, { useState } from 'react';
import './App.css';
import image from './images/image-jeremy.png';
import { ActivityCard } from './component/ActivityCard';
import { activityData } from './data.js';

function App() {
  const timeline = ['daily', 'weekly', 'monthly'];
  const [timeLineSelected, setTimeline] = useState('weekly');

  return (
    <section className="container">
      <main className='container__content'>
        <div className='container_content-user'>
          <div className='user-head'>
            <img className='profile' src={image} alt='profile' />
            <div>
              <p className='report'>Report for</p>
              <h2 className='profile-name'>
              Jeremy Robson
              </h2>
            </div>
          </div>
          <div className='user-timeline'>
          {
              timeline.map(item => {
                return <p key={item} className='timeline' onClick={() => setTimeline(item)}>{item}</p>
              })
          }
          </div>
        </div>
        <div className='container_content-activity'>
            <ActivityCard data={activityData} timeline={timeLineSelected}/>
        </div>
      </main>
    </section>
  );
}

export default App;
