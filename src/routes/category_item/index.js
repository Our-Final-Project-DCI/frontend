import * as React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";


function Item() {
    let {item} = useParams();
    const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3007/photos`).then(async (res) => {
          const result = await res.json();
    
          if (res.status === 200) {
            setUploadetPhotos(result);
          }
    
          if(res.status === 404) {
            setUploadetPhotos([]);
          }
        });
      }, [item]);
      console.log("ITEM", uploadtetPhotos);

      const a = uploadtetPhotos.filter(photo => photo.category === item)
      console.log(a);

  return (
    <div className="Item">
        <h4>{item}</h4>
        {a.map((photo) => (
            <div className="item" key={photo._id}>
              <img
                src={photo.photoFile.replace(
                  "uploads",
                  "http://localhost:3007"
                )}
                alt=""
              />

            </div>
          ))}
    </div>
  )
}

export default Item