import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function UserProtectedWrapper({children}) {
  const { user, setUser } = useContext(UserDataContext);
  const token  = localStorage.getItem('token')
  const navigate = useNavigate();
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  },[token])

  return (<>{children}</>);
}

export default UserProtectedWrapper;
