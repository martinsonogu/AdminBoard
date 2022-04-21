import React from 'react';
import "./Sidebar.css"
import {LineStyle, Timeline,TrendingUp, PersonOutline, Inventory2Outlined, 
    PaidOutlined, AssessmentOutlined, MailOutline, ChatBubbleOutline,Forum, WorkOutlineOutlined, Report} from "@mui/icons-material"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Dashboard
              </h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <LineStyle className='sidebarIcon'/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analytics
                  </li>
                  <li className="sidebarListItem">
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Quickmenu
              </h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <PersonOutline className='sidebarIcon'/>
                      Users
                  </li>
                  <li className="sidebarListItem">
                      <Inventory2Outlined className='sidebarIcon'/>
                      Products
                  </li>
                  <li className="sidebarListItem">
                      <PaidOutlined className='sidebarIcon'/>
                      Transactions
                  </li>
                  <li className="sidebarListItem">
                      <AssessmentOutlined className='sidebarIcon'/>
                      Reports
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Notifications
              </h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <MailOutline className='sidebarIcon'/>
                      Mail
                  </li>
                  <li className="sidebarListItem">
                      <Forum className='sidebarIcon'/>
                      Feedback
                  </li>
                  <li className="sidebarListItem">
                      <ChatBubbleOutline className='sidebarIcon'/>
                      Message
                  </li>
              </ul>
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Staff
              </h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <WorkOutlineOutlined className='sidebarIcon'/>
                      Manage
                  </li>
                  <li className="sidebarListItem">
                      <Timeline className='sidebarIcon'/>
                      Analytics
                  </li>
                  <li className="sidebarListItem">
                      <Report className='sidebarIcon'/>
                      Report
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
