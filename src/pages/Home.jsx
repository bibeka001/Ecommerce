import React from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Sidebar from "../Components/Sidebar";
const Home = () => {
  return (
    <div className="container ">
      <Announcement />
      <Navbar />
      <Sidebar/>
    </div>
  );
};

export default Home;
