import React from 'react';
import "./Home.css";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo"
import Chart from '../../Charts/Chart';
import { userData } from '../../../dummyData';
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;
