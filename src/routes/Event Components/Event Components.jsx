import React, { useEffect, useState } from 'react'
import art from './images/art.jpeg';
import music from './images/musicfest.jpeg';
import science from './images/science fair.jpg';
import sports from './images/sport day.jpg';
import tech from './images/techConference.jpeg';
import './Event Components.css';

const EventComponents = () => {
  const images = [
    { src: art,content: 'A display of the finest art from upcoming artists.' },
    { src: music, content: 'A weekend filled with music from top bands and artists.' },
    { src: science, content: 'A showcase of the latest scientific discoveries and projects by students.' },
    { src: sports, content: 'An exciting day of sports activities and competitions.' },
    { src: tech, content: 'An annual tech conference with the latest in technology and innovation.' },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <React.Fragment>
      <h1>Events</h1>
      <div className="box">
        <div className="imgchange">
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} width={200} height={600}/>
        </div>
        <div className="content">{images[currentIndex].content}</div>
      </div>
    </React.Fragment>
  )
}

export default EventComponents