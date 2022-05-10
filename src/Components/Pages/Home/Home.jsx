import React, { useState } from 'react';
import "./Home.css";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo"
import Chart from '../../Charts/Chart';
import { userData } from '../../../dummyData';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
import VerticalSlider from "../../Slider/VerticalSlider"

const Home = () => {
  const [getValue, setGetValue] = useState(1);
  console.log(` your value is ${getValue}`)

  let newValue = {};
  let sliderValue =getValue ;
  const transformedData = userData.map(calculatedNewMonth);
  function calculatedNewMonth(month){
    const newActiveUserValue = sliderValue * month["Active User"];
    newValue = {...month, "Active User": newActiveUserValue}
    return newValue;
  }


  return (
    <div className='home'>
      <FeaturedInfo />
      <div className="mainContainer">
        <div className="slide">
            <VerticalSlider 
            //passing prop to child which is verticalslider
            changedValue = {getValue => setGetValue(getValue)} 
            />
        </div>
        <Chart 
        data={transformedData} 
        title="User Analytics" 
        grid dataKey="Active User"  />
        </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;
