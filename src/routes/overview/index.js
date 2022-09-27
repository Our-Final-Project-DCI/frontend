import * as React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
//import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Overview() {
  const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);
  const user = useUser();

  const likeClickHandler = async () => {};

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos`).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setUploadetPhotos(result);
      }
    });
  }, []);
  console.log(uploadtetPhotos);

  // React.useEffect(() => {
  //   fetch(`http://localhost:3007/photos`).then(async (res) => {
  //     const result = await res.json();

  //     if (res.status === 200) {
  //       setLikedPhotos(result);
  //     }
  //   });
  // }, []);
  // console.log(likedPhotos);

  return (
    <Layout>
      <div className="Overview">
        <div className="Overview__bgimg">
          <div className="Overview__text">
            <h1 className="Overview__h1">
              <span className="Overview__span">Photo</span>gram
              <br />
              Online Gallery Photos
            </h1>

            <p className="Overview__p">
              Nam libero tempore, cum soluta nobis est <br /> eligendi optio
              cumque nihil impedit quo <br /> minus id quod maximale placet
              facere
            </p>
          </div>

          <div className="Overview__search">
            <div className="Overview__border">
              <button className="Overview__button">
                <FaSearch />
              </button>

              <input
                type="text"
                placeholder="Search"
                className="Overview__input"
              ></input>
            </div>
          </div>
        </div>

        <main className="Main">
          {uploadtetPhotos.map((photo) => (
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
              <p>#{photo.category}</p>
              <button className="like">
                <FaRegHeart />
              </button>
              <button className="download" onClick={likeClickHandler}>
                <BiDownload />
              </button>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
}
