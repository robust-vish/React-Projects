// here let's access or take data  UserContext data

import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {

 const {user}=useContext(UserContext)

    if(!user) return <div>Please login </div>
    return <div>Welcome {user.name} </div>
  
}

export default Profile