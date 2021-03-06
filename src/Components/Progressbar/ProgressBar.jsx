import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React from 'react'

const Progressbar = (props) => {
  
    const value = props.handleProgress;
  return (
      
    <div className='progress'>
      <CircularProgressbar value={value}  maxValue={100} text={`${value * 1}%`} />;

{/* <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  minValue={10}
  maxValue={100}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>; */}
    </div>
  )
}

export default Progressbar


