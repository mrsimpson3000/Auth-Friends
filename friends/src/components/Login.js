import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosAuth";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event) => {
    event.preventdefault();

    axiosWithAuth()
      .post("/api/login", credentials)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
}
