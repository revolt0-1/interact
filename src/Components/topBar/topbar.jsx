import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faComment, faBell } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import  {useContext}  from 'react';
import { AuthContext } from '../../Context/AuthContext';

export default function Topbar() {

    const{user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{textDecoration:'none'}} >
                <span className="logo">Interact</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                    <input placeholder='Search for friends , post or video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faComment} />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <FontAwesomeIcon icon={faBell} />

                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={
                    user.profilePicture ?
                    PF + user.profilePicture:
                    PF + "Person/noavatar.png"
                } 
                alt="river" 
                className='topbarImg' />
                </Link>
            </div>
        </div>
    )
}
