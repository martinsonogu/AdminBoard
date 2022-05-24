import React, { useState } from 'react';
import "./Home.css";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo"
import Chart from '../../Charts/Chart';
import { userData } from '../../../dummyData';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
import VerticalSlider from "../../Slider/VerticalSlider";
import ProgressBar from "../../Progressbar/ProgressBar"

const Home = () => {
  const [getValue, setGetValue] = useState(1);
  

  let newValue = {};
  let sliderValue =getValue ;
  const transformedData = userData.map(calculatedNewMonth);
  function calculatedNewMonth(month){

    const newActiveUserValue = Math.floor(sliderValue * month["Active User"]* Math.random()) ;
    newValue = {...month, "Active User": newActiveUserValue}
    return newValue;
  }


  return (
    <div className='home'>
      <FeaturedInfo valueOfSlider = {sliderValue} />
      <div className="mainContainer">
        
        <VerticalSlider 
            //passing prop to child which is verticalslider
            changedValue = {getValue => setGetValue(getValue)} 
        />
        
        
        <Chart 
        data={transformedData} 
        title="User Analytics" 
        grid dataKey="Active User"  />
      
        <div className='progressbar'style={{ width: 200, height: 200 }}>
          <ProgressBar  handleProgress={getValue}
        />
        </div>
        </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;
