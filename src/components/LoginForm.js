import React, { useRef, useState } from "react";
import classes from "./LoginForm.module.css";
const LoginForm = () => {
  const enterEmail = useRef();
  const enterPassword = useRef();
  const [errors, setErrors] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const emailRegex =
      /[a-zA-Z0-9._%+-]@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (!emailRegex.test(enterEmail.current.value)) {
      setErrors("email is not valid");
    } else if (!pwdRegex.test(enterPassword.current.value)) {
      setErrors(
        "password should have at least one char mjs,min,digit special "
      );
    } else if (enterEmail.current.value && enterPassword.current.value) {
      localStorage.setItem("email", enterEmail.current.value);
      localStorage.setItem("password", enterPassword.current.value);
    }
  };
  return (
    <form onSubmit={onHandleSubmit} className={classes.form}>
      <h1>Login</h1>
      <div class={classes["input-containe"]}>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          placeholder="enter your email"
          ref={enterEmail}
          required
        />
        {errors ? <p>{errors}</p> : ""}
      </div>
      <div class={classes["input-containe"]}>
        <label htmlFor="password">Passowrd</label>
        <input
          id="password"
          type="password"
          placeholder="enter your password"
          ref={enterPassword}
          required
        />
        {errors ? <p> {errors} </p> : ""}
      </div>
      <button className={classes.button}>Login</button>
    </form>
  );
};

export default LoginForm;
