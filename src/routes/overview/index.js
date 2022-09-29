import * as React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { BsArrowsFullscreen } from "react-icons/bs";
//import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

export default function Overview() {
  const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [search, setSearch] = React.useState("");
  const user = useUser();
  console.log(user);

  const likeClickHandler = async (id) => {
    user.likedPhotos(id);
  };

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos`).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setUploadetPhotos(result);
      }

    });
  }, []);
  console.log(uploadtetPhotos);

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos?search=${search}`).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setUploadetPhotos(result);
      }
    });
  }, [search]);

  // console.log(uploadtetPhotos);
  // const handleClick = async () => {
  //   navigate("/photos" + ._id);
  // };

  /* category=${category}& */

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                onError={() => setUploadetPhotos(uploadtetPhotos.filter(row => row !== photo))}
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
                onClick={() => likeClickHandler(photo._id)}
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
    </Layout>
  );
}
