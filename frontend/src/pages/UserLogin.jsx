import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
function userLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const naviate  = useNavigate()
  const {user , setUser} = useContext(UserDataContext)
  const submitHandler = async(e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`, userData);
    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token' ,data.token)
      naviate("/home")
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            required
            placeholder="john@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-[#fff] mb-3 rounded px-4 py-2  w-full font-semibold text-lg">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center mb-5 text-[#fff]  rounded px-4 py-2  w-full font-semibold text-lg"
        >
          Signin as Captain
        </Link>
      </div>
    </div>
  );
}

export default userLogin;
