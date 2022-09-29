import * as React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";


function Item() {
    let {item} = useParams();
    const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3007/photos`).then(async (res) => {
          const result = await res.json();
    
          if (res.status === 200) {
            setUploadetPhotos(result);
          }
    
          if(res.status === 404) {
            setUploadetPhotos([]);
          }
        });
      }, [item]);
      console.log("ITEM", uploadtetPhotos);

      const a = uploadtetPhotos.filter(photo => photo.category === item)
      console.log(a);

  return (
    <div className="Item">
       {/*  <h4>{item}</h4>
        {a.map((photo) => (
            <div className="item" key={photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
              />

            </div>
          ))} */}

<main className="Main">
          {a.map((photo) => (
            <div className="item" key={photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
              />

              {/* {photo.user.avatar && (
                <div className="avatar" width="20" height="20">
                  <a href="/account">
                    <img
                      src={photo.user.avatar}
                      alt=""
                      className="hover_opacity"
                    />
                     to={"/photos/" + photo._id}
                  </a>
                </div>



                
              )} */}

              <h4>{photo.user.username}</h4>


              <button
                className="like"
               /*  onClick={() => likeClickHandler(photo._id)} */
              >
                <FaRegHeart />
              </button>

              <button className="download">
                <BiDownload />
              </button>
            </div>
          ))}
        </main>
    </div>
  )
}

export default Item