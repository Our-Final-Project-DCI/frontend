import React from "react";
import "./index.scss";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [showRegister, setShowRegister] = React.useState(false);

  // useUser
  const user = useUser();
  //useNavigate
  const navigate = useNavigate();

  const signupClickHandler = async (e) => {
    e.preventDefault();
    const status = await user.signup({
      username: username,
      fullname: fullname,
      email: email,
      password: password,
    });

    if (status === 200) {
      navigate("/account");
    }
  };

  const loginClickHanlder = async (e) => {
    e.preventDefault();
    const status = await user.login({
      email: email,
      password: password,
    });
    if (status === 200) {
      navigate("/account");
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  if (showRegister) {
    return (
      <div className="Login">
        <div className="content-left">
          <div className="logo" onClick={handleNavigate}>
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className="login-image">
            <img src="/img/signup.svg" alt="login-img" />
          </div>
        </div>
        <div className="content-right">
          <div className="logo-responsive" onClick={handleNavigate}>
            <img src="/img/logo.png" alt="logo" />
          </div>

          <form className="box" onSubmit={signupClickHandler}>
            <div className="box-login">
              <h1>Join Us</h1>
              <div
                className="toggle-register"
                onClick={() => setShowRegister(false)}
              >
                Already have an Account
              </div>
              <div className="line">
                <span></span>Or<span></span>
              </div>
            </div>

            <div className="box-input">
              <div className="input-signup">
                <div className="input-group">
                  <div className="label">fullname:</div>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <div className="label">username:</div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="label">email:</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <div className="label">password:</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="Login">
      <div className="content-left">
        <div className="logo" onClick={handleNavigate}>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="login-image">
          <img src="/img/login.svg" alt="login-img" />
        </div>
      </div>
      <div className="content-right">
        <div className="logo-responsive" onClick={handleNavigate}>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <form className="box" onSubmit={loginClickHanlder}>
          <div className="box-login">
            <h1>Login</h1>
            <div
              className="toggle-register"
              onClick={() => setShowRegister(true)}
            >
              I don't have an Account !
            </div>
            <div className="line">
              <span></span>Or<span></span>
            </div>
          </div>

          <div className="box-input">
            <div className="input-group">
              <div className="label">email:</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="label">password:</div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
