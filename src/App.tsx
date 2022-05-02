import React from 'react';
import './App.css';
import image from './images/image-jeremy.png';

function App() {
  return (
    <section className="container">
      <main className='container__content'>
        <div className='container_content-user'>
          <div className='user-head'>
            <img className='profile' src={image} alt='profile' />
            <p>Report for</p>
            <h2 className='profile-name'>
            Jeremy Robson
            </h2>
          </div>
        </div>
        <div className='container_content-activity'>
          <ul>
            <li>Work</li>
            <li>Exercise</li>
          </ul>
        </div>
      </main>
    </section>
  );
}

export default App;
