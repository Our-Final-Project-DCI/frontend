import React from "react";
import "./index.scss";

import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
// Icons
import { BiPencil } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Account() {
  const [myPhotos, setmyPhotos] = React.useState([]);
  const [likedPhotos, setLikedPhotos] = React.useState([]);
  const user = useUser();

  const likeClickHandler = async (id) => {
    user.likedPhotos(id);
  };

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos/account?own=true`, {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setmyPhotos(result);
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
  }, []);

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
  };

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
                <div className="user-icons">
                  <a href="/">
                    <BiUserPlus />
                  </a>
                  <a href="/">
                    <BiShareAlt />
                  </a>
                </div>
              </div>

              <p className="description">{user.data.description}</p>
              <div className="socialMedia">
                <ul>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <nav className="user-collections">
            <ul>
              <li>
                <Link to="/account?own=true"> MY PHOTOS</Link>
              </li>
              <li>
                <Link to="/account?liked=true">LIKED PHOTOS</Link>
              </li>
            </ul>
          </nav>
        </div>

        <section className="user-photos">
          <Carousel responsive={responsive} className="slider">
            {myPhotos.map((photo) => (
              <div className="item" key={photo._id} style={{ display: "flex" }}>
                <img
                  src={photo.photoFile.replace(
                    "uploads",
                    "http://localhost:3007"
                  )}
                  alt=""
                  width="90%"
                />
                <button className="like">
                  <FaRegHeart
                    style={{
                      color: user.isLiked(photo._id) ? "red" : "black",
                    }}
                    onClick={() => likeClickHandler(photo._id)}
                  />
                  {user.isLiked(photo._id)}
                </button>
              </div>
            ))}
          </Carousel>

          <Carousel responsive={responsive} className="slider">
            {likedPhotos.map((photo) => (
              <div className="item" key={photo._id}>
                <img
                  src={photo.photoFile.replace(
                    "uploads",
                    "http://localhost:3007"
                  )}
                  alt=""
                  width="90%"
                />
                <button className="like">
                  <FaRegHeart
                    style={{
                      color: user.isLiked(photo._id) ? "red" : "black",
                    }}
                    onClick={() => likeClickHandler(photo._id)}
                  />
                  {user.isLiked(photo._id)}
                </button>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </Layout>
  );
}

{
  /* <h4>{photo.user.username}</h4>
                <p>#{photo.category}</p>
                <button className="like">
                  <FaRegHeart
                    style={{
                      color: user.isLiked(photo._id) ? "red" : "black",
                    }}
                    onClick={() => likeClickHandler(photo._id)}
                  />{" "}
                  {user.isLiked(photo._id)}
                </button>
                <button className="download">
                  <BiDownload />
                </button> */
}
