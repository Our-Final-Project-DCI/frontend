import * as React from "react";

const Context = React.createContext({
  data: null,
  error: "",
  isFetcting: false,
  signup: async () => 0,
  login: async () => 0,
  update: async () => 0,
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
      // fehlermeldung im browser entfernen
      setError("");
      // loading ...
      setIsFetching(true);

      // response:
      const response = await fetch("http://localhost:3007/user/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // result :
      const result = await response.json();

      if (response.status === 200) {
        setUser(result);
      } else if (result.errors) {
        // validations Errors
        setError(result.errors[0].msg);
      } else if (result.error) {
        // server Error | 500
        setError(result.error);
      }

      //// fetching beenden

      setIsFetching(false);

      // RETURN:STATUS

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
        // validations Errors
        setError(result.errors[0].msg);
      } else if (result.error) {
        // server Error | 500
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

      const res = await fetch("http://localhost:3007/user/update", {
        method: "PATCH",
        credentials: "include",

        body: formData,
      });

      const result = await res.json();

      if (res.status === 200) {
        setUser(result);
      } else if (result.errors) {
        // validations Errors
        setError(result.errors[0].msg);
      } else if (result.error) {
        // server Error | 500
        setError(result.error);
      }

      setIsFetching(false);

      return res.status;
    },
  };

  return (
    <Context.Provider value={data}>{ready && props.children}</Context.Provider>
  );
}

export default function useUser() {
  return React.useContext(Context);
}
