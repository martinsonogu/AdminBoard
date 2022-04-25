import { CalendarToday, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react';
import {Link} from "react-router-dom";
import "./User.css"

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png"
               alt="" 
               className="userShowImg" />
               <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna ysertlov</span>
                  <span className="userShowUserTitle">Frontend ENgineer</span>
               </div>
            </div>
            <div className="userShowBottom"> 
              <span className="userShowtitle">Account Details</span>
              <div className="userShowInfo">
                  <PermIdentity className="userShowIcon"/>
                  <span className="userShowInfoTitle">AnnaYser69</span>
              </div>
              <div className="userShowInfo">
                  <CalendarToday className="userShowIcon"/>
                  <span className="userShowInfoTitle">12.04.1993</span>
              </div>
              <span className="userShowtitle">Contact Details</span>
              <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon"/>
                  <span className="userShowInfoTitle">+44 456 456 4</span>
              </div>
              <div className="userShowInfo">
                  <MailOutlined className="userShowIcon"/>
                  <span className="userShowInfoTitle">AnnaYser69@gail.com</span>
              </div>
              <div className="userShowInfo">
                  <LocationSearching className="userShowIcon"/>
                  <span className="userShowInfoTitle">Amsterdam | Netherlands</span>
              </div>
              
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder='AnnaYser69' className='UserUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder='Anna ysertlov' className='UserUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder='AnnaYser69@gail.com' className='UserUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder='+44 456 456 4' className='UserUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder='Amsterdam | Netherlands' className='UserUpdateInput' />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png" 
                  alt=""
                  className='userUpdateImg' />
                  <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                  <input type="file" id='file' style={{display:"none"}} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default User;
