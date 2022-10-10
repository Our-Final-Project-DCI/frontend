import React from "react";
import "./index.scss";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
// Icons
import { BiPencil } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Account() {
  const [myPhotos, setMyPhotos] = React.useState([]);
  const [likedPhotos, setLikedPhotos] = React.useState([]);
  const [photoList, setPhotoList] = React.useState("myPhotos");
  const photos = photoList === "myPhotos" ? myPhotos : likedPhotos;
  const [changedPhoto, setChangedPhoto] = React.useState("");
  const user = useUser();

  const likeClickHandler = async (id) => {
    await user.likedPhotos(id);
    setChangedPhoto(id);
  };


  const responsive = {
    xlDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },



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

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos/account?own=true`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setMyPhotos(result);
      }
    });

    fetch(`http://localhost:3007/photos/account?liked=true`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setLikedPhotos(result);
      }
    });
  }, [changedPhoto]);

  return (
    <Layout>
      <div className="User-Account-Route">
        <div className="wrapper">
          <section className="user-profile">
            <div className="avatar-box">
              <div className="avatar">
                <img src={user.data.avatar} alt="" />
              </div>
              <a href="/update">
                <BiPencil />
              </a>
            </div>
            <div className="about-box">
              <div className="user">
                <h2>{user.data.username}</h2>
              </div>

              <p className="description">{user.data.description}</p>
            </div>
          </section>

          <nav className="user-collections">
            <ul>
              <li>
                <h2 onClick={() => setPhotoList("myPhotos")}> My photos</h2>
              </li>
              <li>
                <h2 onClick={() => setPhotoList("likedPhotos")}>
                  Liked photos
                </h2>
              </li>
            </ul>
          </nav>

          <section className="user-photos">
            <Carousel responsive={responsive} className="Main">
              {photos.map((photo) => (
                <Link
                  to={"/photos/" + photo._id}
                  className="item"
                  key={photo._id}
                >
                  <img
                    src={photo.photoFile.replace(
                      "uploads",
                      "http://localhost:3007"
                    )}
                    alt="myPhoto"
                    width="90%"
                  />

                  <div className="user-actions">
                    <button
                      className="like"
                      onClick={(e) => {
                        likeClickHandler(photo._id);
                        e.preventDefault();
                      }}
                    >
                      <FaRegHeart />
                      {user.isLiked(photo._id)}
                    </button>

                    <div
                      onClick={(e) =>
                        download(
                          photo.photoFile.replace(
                            "uploads",
                            "http://localhost:3007"
                          )
                        )
                      }
                      className="download"
                    >
                      <BiDownload />
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </section>
        </div>
      </div>
    </Layout>
  );
}
