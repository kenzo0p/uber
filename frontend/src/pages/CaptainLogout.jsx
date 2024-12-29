import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainLogout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/api/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
  return (
    <div>
        captainlogout
    </div>
  )
}

export default CaptainLogout