import "./Topbar.css"
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
          <div className="topLeft">
              <span className="logo">omoadmin</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                   <NotificationsNone/>
                   <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                   <Language/>
                   <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                   <Settings/>
              </div>
              <img src="https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png" alt="profile-pic" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}

export default Topbar
