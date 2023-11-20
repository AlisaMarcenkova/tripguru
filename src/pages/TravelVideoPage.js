import React, { useState } from 'react';
import VideoPlayer from 'react-player';
import './TravelVideoPage.css';

const TravelVideoPage = () => {
  const [videos] = useState([
    {
      title: '10 Best Places to Visit in Arizona',
      url: 'https://youtu.be/Wt4XODPm4hA',
    },
    {
        title: '10 Best Places to Visit in Arizona',
        url: 'https://youtu.be/Wt4XODPm4hA',
      },
      {
        title: '10 Best Places to Visit in Arizona',
        url: 'https://youtu.be/Wt4XODPm4hA',
      },
  ]);

  const [selectedVideo] = useState(videos[0]);
  const [selectedVideo1] = useState(videos[1]);
  const [selectedVideo2] = useState(videos[2]);

  return (
    <div className="TravelVideoPage">
      <h1>10 Best Places to Visit in Arizona</h1>
      <div className="videos">
      </div>
      <div className="video-player">
      <div className='column'>
        <VideoPlayer url={selectedVideo.url} />
        </div>
        <div className='column'>
        <VideoPlayer url={selectedVideo1.url} />
        </div>
        <div className='column'>
        <VideoPlayer url={selectedVideo2.url} />
        </div>
      </div>
    </div>
  );
};

export default TravelVideoPage;