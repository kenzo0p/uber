import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [captainData, setCaptainData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
    });
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
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
            Login
          </button>
        </form>
        <p className="text-center">
          Aleady have an account?{" "}
          <Link to="/captain-login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
         The site is protected by reCAPTCHA and the Google <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
