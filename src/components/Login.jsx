import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRequest, loginSuccess } from "../Redux/auth/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, token, jobs, type } = useSelector(
    (state) => state,
    shallowEqual
  );
  //   console.log("state:", isAuth);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // const action = loginRequest();

    if (email === "admin" && password === "admin") {
      dispatch(loginSuccess({ token: "123", type: "admin" }));
      console.log(email, password);
    } else if (email === "user" && password === "user") {
      dispatch(loginSuccess({ token: "456", type: "user" }));
      console.log(email, password);
    }
  };

  if (isAuth) {
    if (type === "admin") {
      return <Navigate to={"/admin"}></Navigate>;
    } else if (type === "user") {
      return <Navigate to={"/user"}></Navigate>;
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter userName"
        />
        <br />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
