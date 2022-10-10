import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";

// Icons
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

export default function Photo() {
  const params = useParams();
  const user = useUser();

  const [photo, setPhoto] = React.useState(null);
  const [comment, setComment] = React.useState("");
  async function toDataURL(url) {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  }

  async function download(url) {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = url.replace("http://localhost:3007/", "");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  const likeClickHandler = async (id) => {
    user.likedPhotos(id);
  };

  React.useEffect(() => {
    fetch("http://localhost:3007/photos/" + params.id, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setPhoto(result);
      }
    });
  }, [params.id]);
  console.log(photo);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3007/comments", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: comment,
        photo: photo._id,
      }),
    });

    if (res.status === 200) {
      setComment("");

      // refetch Photo
      fetch("http://localhost:3007/photos/" + params.id, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        const result = await res.json();

        if (res.status === 200) {
          setPhoto(result);
        }
      });
    }
  };

  if (!photo) {
    return <LayoutLogout>loading....</LayoutLogout>;
  }
  return (
    <LayoutLogout>
      <div className="Photos-Id-Route">
        <div className="user">
          {photo.user.avatar && (
            <div className="avatar">
              <a href="/account">
                <img src={photo.user.avatar} alt="" className="hover_opacity" />
              </a>
            </div>
          )}

          <h3>{photo.user.username}</h3>
        </div>

        <div className="wrapper">
          <div className="user-actions">
            {/* <button className="download-btn">download</button> */}
            <div
              onClick={(e) =>
                download(
                  photo.photoFile.replace("uploads", "http://localhost:3007")
                )
              }
              className="download download-btn"
            >
              download
            </div>
            <div className="likes">
              {/* <span className="total">
                <em>200</em>
              </span> */}
              <button
                className="like"
                onClick={() => likeClickHandler(photo._id)}
              >
                <FaRegHeart />
              </button>
            </div>
          </div>

          <div className="user-photo">
            {photo.photoFile && (
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
              />
            )}
          </div>

          <section className="comments-section">
            <form onSubmit={handleCommentSubmit} className="user-comment-form">
              {photo.user.avatar && (
                <div className="avatar">
                  <a href="/account">
                    <img
                      src={photo.user.avatar}
                      alt="profileImage"
                      className="hover_opacity"
                    />
                  </a>
                </div>
              )}
              <input
                type="text"
                placeholder="Type your comment hier..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button className="comment-btn">Submit</button>
            </form>

            {photo.comments.map((comment) => (
              <div key={comment._id} className="users-comments">
                {comment.user.avatar && (
                  <div className="user-avatar">
                    <img src={comment.user.avatar} alt="Profilbild" />
                  </div>
                )}
                <div className="comments">
                  <h5>{comment.user.username}</h5>
                  <p>{comment.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </LayoutLogout>
  );
}
