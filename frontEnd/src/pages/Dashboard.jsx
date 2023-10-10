import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";
import axios from 'axios';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login/success`, { withCredentials: true });
      setData({'items':response.data.items, 'user': response.data.user});
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)


return null
}

export default Dashboard;
