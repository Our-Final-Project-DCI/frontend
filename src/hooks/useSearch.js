import * as React from "react";

const Context = React.createContext({
    data: null,
   
  });

  export function SearchProvider(props) {
    const [uploadtetPhotos, setUploadetPhotos] = React.useState([]);
    const [search, setSearch] = React.useState("");


    
      React.useEffect(() => {
        fetch(`http://localhost:3007/photos?search=${search}`).then(async (res) => {
          const result = await res.json();
    
          if (res.status === 200) {
            setUploadetPhotos(result);
          }
        });
      }, [search]);

    const data = {
        search: search,
        result: uploadtetPhotos,
        setResult: setUploadetPhotos,
        setSearch: setSearch
    }


    return (
        <Context.Provider value={data}>{props.children}</Context.Provider>
      );
  }
  export default function useSearch() {
    return React.useContext(Context);
  }