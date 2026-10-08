import { useState } from "react";
import sanjana from "./sanjana.jpeg";
function LikesDislikes(){
    const [likes,setLikes]=useState(0);
    const [dislikes,setDislikes]=useState(0);
     
    return(
        <div>

            <h1> Likes and Dislikes</h1>
            <img src={sanjana} alt="sanjana" width="300" />

            <p> Likes: {likes}</p>
            <button onClick={() =>setLikes(likes +1)}>
                Like
            </button>


            <p> Dislikes: {dislikes}</p>
          <button onClick={() =>setDislikes(likes -1)}>
                Disike
            </button>
  
            
         </div>
    );
}
export default LikesDislikes;