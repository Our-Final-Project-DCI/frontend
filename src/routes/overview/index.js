import * as React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

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

        <section className="photos">
          {uploadtetPhotos.map((photo) => (
            <Link
              className="question"
              key={photo._id}
              to={"/photos/" + photo._id}
            ></Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}
