import * as React from "react";
import "./overview.scss";
import Layout from "../../Layout";
import Photo from "./photo";
import { FaSearch } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import useSearch from "../../hooks/useSearch";

export default function Overview() {
  const user = useUser();
  const search = useSearch();

  const likeClickHandler = async (id) => {
    await user.likedPhotos(id);
  };

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
                value={search.search}
                onChange={(e) => search.setSearch(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <main className="Main">
          {search.result.map((photo) => (
            <Photo
              key={photo._id}
              photo={photo}
              likeClickHandler={likeClickHandler}
              download={download}
              setUploadetPhotos={search.setResult}
              uploadtetPhotos={search.result}
            ></Photo>
          ))}
        </main>
      </div>
    </Layout>
  );
}
