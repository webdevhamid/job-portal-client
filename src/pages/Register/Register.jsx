import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser, setLoading, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    const validatePassword = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return regex.test(password);
    };

    // password validation
    if (!validatePassword(password)) {
      setError(
        "Password must contain one uppercase letter, one number and length must be at least 6 characters long!"
      );
      return;
    }
    // Initialize error message
    setError(null);

    // create new user
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;

        console.log(errorCode);
      });
  };
  return (
    <div className="my-20">
      <h1 className="text-5xl text-center font-bold">Register</h1>
      <div className="flex justify-center items-center">
        <form className="w-[500px] border-2 border-blue-500 p-5" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="w-[400px]">
          <Lottie animationData={registerAnimation} loop={true}></Lottie>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
