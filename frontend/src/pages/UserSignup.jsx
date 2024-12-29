import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";


function UserSignup() {

  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()
  
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullname:{
        firstname: firstname,
        lastname: lastname  
      }
    };
    const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, newUser)
    if(response.status ===201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token' ,data.token)
      navigate("/home")
    }
    SetEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2 ">what's your name</h3>
          <div className="flex items-center gap-4 mb-6">
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base "
              type="text"
              required
              placeholder="Firstname"
            />
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base "
              type="text"
              required
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-lg font-medium mb-2 ">what's your email</h3>
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className="bg-[#eeeeee]  mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            required
            placeholder="john@doh.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-[#fff] mb-3 rounded px-4 py-2  w-full font-semibold text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Aleady have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding ,you consent to get calls , whatsapp or SMS message
          ,including by automated means , from Uber and its affiliates to the
          number provided
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
