import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div className="login">
      <h2 className="heading"> Login here 👇</h2>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <button className="btn"> Login </button>
    </div>
  );
};

export default Login;
