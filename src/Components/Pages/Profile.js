import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div>
         <div className="password1">
          <ul>
            <li>
              <Link to="/PasswordPage">
                <h1>Change Password</h1>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Profile
