import { useContext, useEffect, useState } from 'react';
import './feed.css';
import Share from '../share/share';
import Post from '../post/post';
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext';
export default function Feed({username}) { 
  const{user}  = useContext(AuthContext) 
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async() => {
      const res= username 
       ?await axios.get('/posts/profile/' +username) 
       :await axios.get('/posts/timeline/' +user._id)

       //post will come first whenever you upload it
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    };
    fetchPost();
  }, [username,user._id])

  


  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username || username === user.username) &&
         <Share />}
        {
        posts.map((p) =>(
          <Post key={p._id} post={p}/>
        ))
      }
      </div>
    </div>
  )
}

