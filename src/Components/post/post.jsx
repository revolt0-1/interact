import './post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import React, { useState , useEffect, useContext } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export default function Post({post}) {

const[like,setLike] = useState(post.likes.length)
const[isLiked,setIsLiked] = useState(false)
const[user,setUser] = useState({})
const {user:currentUser} = useContext(AuthContext)
const PF = process.env.REACT_APP_PUBLIC_FOLDER


useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id , post.like])


const likeHandler=()=>{
    try {
        axios.put('/posts/'+post._id+'/like', {userId:currentUser._id})
    } catch (error) {}

    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
}
useEffect(() => {
    const fetchPost = async() => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    };
    fetchPost();
  }, [post.userId])

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+'/Person/noavatar.png'} 
                    alt="" 
                    className="postProfileImg" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={PF+post.img} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${PF}like.png` } alt="" className="likeIcon"  onClick={likeHandler}/>
                    <img src={`${PF}heart.png`}alt="" className="likeIcon"  onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}<FontAwesomeIcon icon={faCommentSlash}/> comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
