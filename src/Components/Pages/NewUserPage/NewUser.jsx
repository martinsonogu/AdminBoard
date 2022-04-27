import React from 'react'
import "./NewUser.css"

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="userForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='John' />
        </div>  
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder='John Doe' />
        </div>  
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='JohnDoe@gmail.com' />
        </div>  
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='*********' />
        </div>  
        <div className="newUserItem">
            <label>Phone</label>
            <input type="number" placeholder='+2347065657823' />
        </div>  
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder='Amsterdam| Netherlands' />
        </div>  
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id='male' value="male" />
            <label htmlFor="female">Male</label>
            <input type="radio" name="gender" id='female' value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id='non-binary' value="non-binary" />
            <label htmlFor="non-binary">Non-binary</label>
            </div>
        </div>  
        <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className='newUserSelect'>
                <option value="yes">Yes</option>
                <option value="no"> No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
    </form>
    </div>
  )
}

export default NewUser
