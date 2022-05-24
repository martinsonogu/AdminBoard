import React, { useState } from 'react';
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"
import "./FeaturedInfo.css"


const FeaturedInfo = ({valueOfSlider}) => {
    const [color, setColor] = useState();
    



    let revenue = 1200 * valueOfSlider - 20000;
    let revenueRate = Math.floor((valueOfSlider * 1.3) - 22)
    let sales = 214 * valueOfSlider + 50000;
    let salesRate = Math.floor(valueOfSlider * 0.7)
    let cost = 123 * valueOfSlider + 32; 
    let costRate = (valueOfSlider/2) + 25;

  return (
    <div className='featured'>
        <div className={`featuredItem ${valueOfSlider > 1 & valueOfSlider <18 && `bgRed`}`}>
            <span className="featuredTitle">
                Revenue
            </span>
            <div className='featuredMoneyContainer'>
                <span className="featuredMoney">
                  $ { revenue }
                </span>
                <span className="featuredMoneyRate">
                    {revenueRate} {valueOfSlider > 1 & valueOfSlider <18 ? <ArrowDownward className='featuredIcon negative' /> : <ArrowUpward className='featuredIcon positive' /> } 
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className={`featuredItem ${valueOfSlider > 17 & valueOfSlider <55 && `bgOrange`}`}>
            <span className="featuredTitle">
            Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                $ { sales }
                </span>
                <span className="featuredMoneyRate">
                    {salesRate} {valueOfSlider > 17 & valueOfSlider <55 ? <ArrowUpward className='featuredIcon positive' /> : <ArrowDownward className='featuredIcon negative' />  }
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className={`featuredItem ${valueOfSlider > 55 && `bgGreen`}`}>
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                $ { cost }
                </span>
                <span className="featuredMoneyRate">
                    +{costRate} {valueOfSlider > 55  ? <ArrowUpward className='featuredIcon positive' /> : <ArrowDownward className='featuredIcon negative'  /> }
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
      
    </div>
  )
}

export default FeaturedInfo
