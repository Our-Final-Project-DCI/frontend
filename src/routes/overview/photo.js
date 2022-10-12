import * as React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Photo = (props) => {
  const photo = props.photo;
  const user = useUser();
  const [isLike, setIsLike] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="item" key={photo._id}>
      <img
        src={photo.photoFile.replace("uploads", "http://localhost:3007")}
        onError={() =>
          props.setUploadetPhotos(
            props.uploadtetPhotos.filter((row) => row !== photo)
          )
        }
        alt=""
      />
      <div
        className="hover"
        onClick={() => navigate("/photos" + "/" + photo._id)}
      >
        <a>{photo.user.username}</a>

        <button
          style={{
            backgroundColor: isLike ? "salmon" : "",
            color: isLike ? "" : "white",
          }}
          className="like"
          onClick={(e) => {
            props.likeClickHandler(photo._id);
            setIsLike(true);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <FaRegHeart />
          {user.isLiked(photo._id)}
        </button>

        <div
          onClick={(e) => {
            props.download(
              photo.photoFile.replace("uploads", "http://localhost:3007")
            );
            e.stopPropagation();
            e.preventDefault();
          }}
          className="download"
        >
          <BiDownload />
        </div>
      </div>
    </div>
  );
};

export default Photo;
