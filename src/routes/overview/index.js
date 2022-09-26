import * as React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Overview() {
  const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos`).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setUploadetPhotos(result);
      }
    });
  }, []);
  console.log(uploadtetPhotos);

  // console.log(uploadtetPhotos);
  // const handleClick = async () => {
  //   navigate("/photos" + ._id);
  // };

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
            <Link className="item" key={photo._id} to={"/photos/" + photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
                width="200"
                height="200"
              />
              {/* {photo.user.avatar && (
                <div className="avatar" width="20" height="20">
                  <a href="/account">
                    <img
                      src={photo.user.avatar}
                      alt=""
                      className="hover_opacity"
                    />
                  </a>
                </div>
              )} */}

              <h4>{photo.user.username}</h4>
              <p>#{photo.category}</p>
              <button className="like">
                <FaRegHeart />
              </button>
              <button className="download">
                <BiDownload />
              </button>
            </Link>
          ))}
        </main>
      </div>
    </Layout>
  );
}
