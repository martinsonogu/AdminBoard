import React from 'react';
import "./Home.css";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo"
import Chart from '../../Charts/Chart';
import { userData } from '../../../dummyData';
import WidgetBig from '../../widgetBig/WidgetBig';
import WidgetSmall from '../../widgetSmall/WidgetSmall';
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidget">
        <WidgetSmall/>
        <WidgetBig/>
      </div>
    </div>
  )
}

export default Home;
