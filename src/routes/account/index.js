import React from "react";
import "./index.scss";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";

// Images

// import f1 from "./images/f1.jpg";

// Icons
import { BiPencil } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
// Carousel

//import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";

export default function Account() {
  const [myPhotos, setmyPhotos] = React.useState([]);
  const [likedPhotos, setLikedPhotos] = React.useState([]);

  const user = useUser();

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

  // Carousel- responsive:
  // console.log(user);
  // const responsive = {
  //   xlDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <Layout>
      <div className="User-Account-Route">
        <div className="wrapper">
          <div className="user-profile">
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
          </div>

          <div className="user-collections">
            <ul>
              <li>
                <a href="/"> MY PHOTOS</a>
              </li>
              <li>
                <a href="/"> LIKED PHOTOS </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user-photos">
          {myPhotos.map((photo) => (
            <div className="item" key={photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
                width="200"
                height="200"
              />
              <h4>{photo.user.username}</h4>
              <p>#{photo.category}</p>{" "}
              <button className="like">
                <FaRegHeart />
              </button>
              <button className="download">
                <BiDownload />
              </button>
            </div>
          ))}

          {/* <Carousel responsive={responsive} className="slider">
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
            <div className="item">
              <img src={f1} alt="" width="90%" />
            </div>
          </Carousel> */}
        </div>

        <div className="user-photos">
          {likedPhotos.map((photo) => (
            <div className="item" key={photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
                width="200"
                height="200"
              />
              <h4>{photo.user.username}</h4>
              <p>#{photo.category}</p>{" "}
              <button className="like">
                <FaRegHeart />
              </button>
              <button className="download">
                <BiDownload />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
