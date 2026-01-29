import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.accessToken);

      navigate("/home");
    } catch (err) {
      alert(`Login failed: Please try again. ${username} ${password}`);
        console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>

      <br />
      <br />
      <h3>Username: emilys</h3>
      <h3>Password: emilyspass</h3>
    </>
  );
};

export default Login;
