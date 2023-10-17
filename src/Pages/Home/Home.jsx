import Topbar from "../../Components/topBar/topbar"
import Sidebar from "../../Components/sidebar/sidebar"
import Feed from "../../Components/feed/feed"
import Rightbar from "../../Components/rightbar/rightbar"
import "./Home.css"

export default function Home() {
  return (
    <>
   <Topbar/>
   <div className="homeContainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>

   </>
  )
}
