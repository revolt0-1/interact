import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/online"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { Link } from "react-router-dom"



export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext)
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))


    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);



    const clickHandle = (async () => {
        try {
            if (followed) {
                await axios.put("/users/" + user._id + "/unfollow/", { userId: currentUser._id })
                dispatch({ type: "UNFOLLOW", payload: user._id })
            } else {
                await axios.put("/users/" + user._id + "/follow/", { userId: currentUser._id })
                dispatch({ type: "FOLLOW", payload: user._id })
            }
        } catch (error) {
            console.log(error)
        }
        setFollowed(!followed)
    })

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Good Wishes</b> to every one.</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username &&
                    (
                        <button className="rightbarFollowingButton" onClick={clickHandle}>
                            {followed ? "unFollow" : "Follow"}
                            {followed ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                        </button>
                    )}

                <h4 className="RightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfokey">City:</span>
                        <span className="rightbarInfoitem">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfokey">From:</span>
                        <span className="rightbarInfoitem">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfokey">Relationship:</span>
                        <span className="rightbarInfoitem">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarfollowings">
                    {friends.map(friend => (
                        <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
                            <div className="rightbarfollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "Person/noavatar.png"} alt="" className="rightbarfollowingImg" />
                                <span className="rightbarfollowingName"> {friend.username} </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        )
    }


    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

