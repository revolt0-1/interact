import './share.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTag, faLocation, faSmile } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';



export default function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [files, setFiles] = useState(null)
    


    const submitHandler = async (e) => {
        e.preventDefault();

        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };

        if(files){
            const data = new FormData();
            const fileName = Date.now() + files.name
            data.append("name",fileName)
            data.append("file",files)
            newPost.img = fileName

            console.log("files",files)
            try {
                await axios.post("/upload" , data)
            } catch (error) {
                console.log(error)
            }    
        }

        try {
            axios.post('/posts' , newPost)
            window.location.reload()
        } catch (error) {}
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "Person/noavatar.png"}
                        alt="" className="shareProfileImg" />
                    <input placeholder={"Whats on your mind " + user.username + "?"}
                        className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr" />

                {/* { files && (
                    <div className='shareImgContainer'>
                        <img src={URL.createObjectURL()} alt="" className="shareImg" />

                        <FontAwesomeIcon icon={faCancel} className='shareCancelImg' onClick={()=>setFiles(null)}/>        
                    </div>
                )} */}

                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label className="shareOption" htmlFor='file'>
                            <FontAwesomeIcon icon={faNewspaper} className='shareIcon' style={{ color: 'tomato' }} />
                            <span className="shareOptionText">Photo or Video</span>
                            <input type="file" id='file' accept='.png , .jpeg, .jpg'
                                onChange={(e) => setFiles(e.target.files[0])
                                }
                                style={{ display: 'none' }} 
                                />
                        </label>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faTag} className='shareIcon' style={{ color: 'blue' }} />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faLocation} className='shareIcon' style={{ color: 'green' }} />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <FontAwesomeIcon icon={faSmile} className='shareIcon' style={{ color: 'goldenrod' }} />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        <button className="shareButton">
                            Share
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

