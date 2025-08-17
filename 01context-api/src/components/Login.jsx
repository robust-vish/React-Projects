import React,{useContext,useState} from 'react'
import UserContext from '../Context/UserContext'


function Login() {

    const[name,setName]=useState('');
    const [password, setpassword] = useState('')

    //this setUser is come from UserContextProvider, this is used
    //to set value of user
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
           e.preventDefault();
           //now user is object which contain two properties name and password.
           //which we passed from here, this is how we send data, 
           //Now this data can be accessed from anywhere where UserContext is imported
           //this means we created a global Context UserContext and we passed two properties
           // from here now this properties can be accessed.
           setUser({name,password})
    }

  return (
    <>
    <div>
  <input type="text"
   placeholder='enter name'
   value={name}
   onChange={(e)=>setName(e.target.value)}
   />
   </div>

    <div>
   <input type="password"
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    />
    </div>

    <button type='submit' onClick={handleSubmit}>Submit</button>
 </>
  )
}

export default Login