import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faComments, faVideo, faUsers, faBookmark, faQuestion, faBriefcase, faCalendar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/closeFriend";
export default function sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebarWrapper">
            <ul className="sidebarlist">
               <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faNewspaper} className='sidebaricon' /> 
               <span className="sidebarListItemText">Feed</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faComments} className='sidebaricon' /> 
               <span className="sidebarListItemText">Chats</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faVideo} className='sidebaricon' /> 
               <span className="sidebarListItemText">Videos</span>
                </li> 
                <li className="sidetbarlistitem">
               <FontAwesomeIcon icon={faUsers} className='sidebaricon' /> 
               <span className="sidebarListItemText">Groups</span>
                </li> 
                <li className=" sidebarlistitem">
               <FontAwesomeIcon icon={faBookmark} className='sidebaricon' /> 
               <span className="sidebarListItemText">Bookmarks</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faQuestion} className='sidebaricon' /> 
               <span className="sidebarListItemText">Questions</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faBriefcase} className='sidebaricon' /> 
               <span className="sidebarListItemText">Jobs</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faCalendar} className='sidebaricon' /> 
               <span className="sidebarListItemText">Events</span>
                </li> 
                <li className="sidebarlistitem">
               <FontAwesomeIcon icon={faGraduationCap} className='sidebaricon' /> 
               <span className="sidebarListItemText">Courses</span>
                </li> 

            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
{Users.map((u)=>(
   < CloseFriend key={u.id} user={u}/>
))}
 
            </ul>
    </div>
    </div>
  )
}
