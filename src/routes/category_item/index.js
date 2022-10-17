import * as React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import Photo from "../overview/photo";
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";

export default function Item() {
  let { item } = useParams();
  const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);
  const user = useUser();

  React.useEffect(() => {
    fetch(`http://localhost:3007/photos`).then(async (res) => {
      const result = await res.json();

      if (res.status === 200) {
        setUploadetPhotos(result);
      }

      if (res.status === 404) {
        setUploadetPhotos([]);
      }
    });
  }, [item]);
  console.log("ITEM", uploadtetPhotos);

  const categoryPhotos = uploadtetPhotos.filter(
    (photo) => photo.category === item
  );
  console.log(categoryPhotos);

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
      <div className="Item">
        <main className="main">
          {categoryPhotos.map((photo) => (
            <Photo
              key={photo._id}
              photo={photo}
              likeClickHandler={likeClickHandler}
              download={download}
              setUploadetPhotos={setUploadetPhotos}
              categoryPhotos={categoryPhotos}
            ></Photo>
          ))}
        </main>
      </div>
    </Layout>
  );
}
