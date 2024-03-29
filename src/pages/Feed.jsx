import {useContext} from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Loader from '../components/Loader';

const Feed = () => {
  const {videos}=useContext(YoutubeContext);
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="video-layout">
        {/* 
            1) eğer api'den henüz cevap gelmediyse yükleniyor bas
            2) api'dan cevap geldiyse sadece type'ı video olanlar
            *  için ekrana video kardı bas
        */}
        { ! videos ? (
        <Loader  />
         
        ) : (
          videos.map(
            (item,i) =>
              item.type === "video" && (<VideoCard key={i} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;