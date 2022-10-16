import * as React from "react";

const Context = React.createContext({
  data: null,
  error: "",
  isFetcting: false,
  signup: async () => 0,
  login: async () => 0,
  update: async () => {},
  logout: async () => {},
  isLiked: async () => {},
  likedPhotos: async () => {},
});

export function UserProvider(props) {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState("");
  const [isFetcting, setIsFetching] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:3007/user", {
      method: "GET",
      credentials: "include",
    })
      .then(async (response) => {
        if (response.status === 200) {
          const result = await response.json();
          setUser(result);
        }
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  const data = {
    data: user,
    error: error,
    isFetcting: isFetcting,

    // 1. signup
    signup: async (body) => {
      setError("");
      setIsFetching(true);

      const response = await fetch("http://localhost:3007/user/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (response.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }

      setIsFetching(false);

      return response.status;
    },

    // 2. login:
    login: async (body) => {
      setError("");
      setIsFetching(true);

      const res = await fetch("http://localhost:3007/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();
      if (res.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }

      setIsFetching(false);
      return res.status;
    },

    // 3. update:
    update: async (body) => {
      setError("");
      setIsFetching(true);

      const formData = new FormData();
      formData.append("gender", body.gender);
      formData.append("file", body.avatar);
      formData.append("fullname", body.fullname);
      formData.append("city", body.city);
      formData.append("land", body.land);
      formData.append("description", body.description);

      const res = await fetch("http://localhost:3007/user/update", {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      const result = await res.json();
      if (res.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }

      setIsFetching(false);
      return res.status;
    },

    // 4. logout:
    logout: async () => {
      await fetch("http://localhost:3007/user/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
    },

    // 5. isLiked:
    isLiked: (photoId) => {
      const photoFound = user.likedPhotos.find((p) => p === photoId);
      return !!photoFound;
    },

    // 6. likedphotos:[id-photo im array pushen]
    likedPhotos: async (photoId) => {
      let likedPhotos = [...user.likedPhotos];
      const photoFound = likedPhotos.find((p) => p === photoId);
      if (photoFound) {
        likedPhotos = likedPhotos.filter((p) => p !== photoId);
      } else {
        likedPhotos.push(photoId);
      }

      const res = await fetch("http://localhost:3007/user/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ likedPhotos }),
      });

      const result = await res.json();

      if (res.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }
    },
  };

  return (
    <Context.Provider value={data}>{ready && props.children}</Context.Provider>
  );
}

export default function useUser() {
  return React.useContext(Context);
}
