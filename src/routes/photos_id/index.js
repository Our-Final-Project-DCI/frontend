import React from "react";
import "./index.scss";
import LayoutLogout from "../../Layout-Logout";
import { useParams } from "react-router-dom";
// Icons
import { BiHeart } from "react-icons/bi";

export default function Photo() {
  const params = useParams();
  const [photo, setPhoto] = React.useState(null);
  const [comment, setComment] = React.useState("");

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
            <button className="download-btn">download</button>
            <div className="likes">
              <span className="total">
                <em>200</em>
              </span>
              <button className="like-btn">
                <BiHeart />
              </button>
            </div>
          </div>

          <div className="user-photo">
            {photo.photoFile && (
              // <img
              //   src={photo.photoFile.replace(
              //     "uploads",
              //     "http://localhost:3007"
              //   )}
              //   alt=""
              //   width="200"
              //   height="200"
              // />
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
              />
            )}
          </div>

          <section className="comment-section">
            <form onSubmit={handleCommentSubmit}>
              <div className="user-comment">
                {photo.user.avatar && (
                  <div className="avatar">
                    <a href="/account">
                      <img
                        src={photo.user.avatar}
                        alt=""
                        className="hover_opacity"
                      />
                    </a>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Type comment hier..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <button>submit</button>
            </form>

            <div className="user-comments">
              {/* <div className="user">
                <img src="" alt="" className="hover_opacity" />
              </div>
              <div className="comments">
                <h4>User 1</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  beataee!
                </p>
              </div> */}

              {photo.comments.map((comment) => (
                <div key={comment._id} className="user">
                  {comment.user.avatar && (
                    <div>
                      <img
                        className="profileImage"
                        src={comment.user.avatar}
                        width="24"
                        height="24"
                        alt="Profilbild"
                      />
                    </div>
                  )}
                  <div className="annotation">
                    <em>&nbsp;{comment.user.username} hat geantwortet:</em>
                  </div>

                  <p>{comment.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </LayoutLogout>
  );
}
