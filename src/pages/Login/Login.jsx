import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import googleIcon from "../../assets/google.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { signInUser, setLoading, setUser, user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  console.log(user);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Sign in user
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        const userEmail = result.user.email;
        console.log({ userEmail });
        setUser(user);
        setLoading(false);
        console.log(user);

        axios
          .post(`http://localhost:3000/jwt`, { email: userEmail }, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="my-20">
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <div className="flex justify-self-center border-2 border-blue-500 p-5 mt-5">
        <form className="w-[500px]" onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control mt-5">
            <Link className="w-10 mx-auto" onClick={handleGoogleSignIn}>
              <img src={googleIcon} alt="googleLogin" className="w-full" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
