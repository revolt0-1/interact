import Topbar from "../../Components/topBar/topbar"
import Sidebar from "../../Components/sidebar/sidebar"
import Feed from "../../Components/feed/feed"
import Rightbar from "../../Components/rightbar/rightbar"
import "./Profile.css";
import { useState,useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const[user,setUser] = useState({})
  const username =useParams().username
  
  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    };
    fetchUser();
  }, [username])

  return (
    <>
   <Topbar/>
   <div className="profile">
   <Sidebar/>
    <div className="profileRight"> 
    <div className="profileRightTop">
        <div className="profilecover">
              <img src={user.coverPicture? PF+user.coverPicture : PF+'Person/nocover.png'} alt="" className="profileCoverImg" />
            <img src={user.profilePicture ?  PF+user.profilePicture : PF+'Person/noavatar.png'} alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
        </div>
    </div>
    <div className="profileRightBottom"> 
   <Feed username={username}/>
   <Rightbar user={user}/>
    </div>
    </div>
   </div>

   </>
  )
}
