import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";
import axios from 'axios';
import { Link } from "react-router-dom";

const Dashboard = ({ User }) => {
  const [data, setData] = useState({ items: [], user: null });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/login/success`, { withCredentials: true });
      setData({ items: response.data.items, user: response.data.user });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function renderItems() {
    return data.items.map((el, index) => (
      <div key={index} className="flex flex-row m-3 rounded-lg mb-[1rem] z-0 justify-end h-[9rem] items-center">
        <Link to={`/Item/${el._id}`}>
          <div className="m-2 rounded-lg bg-[#003985] hover:bg-sky-700 active:bg-[#0d1832] overflow-hidden w-[15rem] h-[5rem]">
            <div className="flex items-center font-bold text-white ml-[5rem] h-full p-3">
              {el.title}
            </div>
          </div>
        </Link>
        <div className="p-2 m-3 rounded-full bg-yellow-400 overflow-hidden absolute left-[1rem]">
          <img src={el.img} alt={el.title} className="rounded-full object-contain w-[7rem]" />
        </div>
      </div>
    ));
  }

  return (
    <div className="bg-[#0d1832]">
      <div className="w-full flex">
        <div className="flex justify-start items-end space-x-3 w-[12rem]">
          <div className="ml-[1.3rem]">
            <NavBar />
          </div>
        </div>
        <div className="flex justify-start items-end space-x-3 w-[50rem] ml-2">
          <div className="text-white text-lg">Hello, {User && User[0] && User[0].user.name}</div>
        </div>
        <div className="flex justify-end space-x-2 w-[12rem]">
          <Profile User={User} />
        </div>
      </div>
      <SearchBar />
      <div className="flex flex-col h-screen p-[1rem]">
        {renderItems()}
      </div>
    </div>
  );
}

export default Dashboard;
