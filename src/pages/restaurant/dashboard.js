import React from "react";
import styles from "@/styles/restaurant/dashboard.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Catalog from "@/components/Catalog/Catalog";
import axios from "axios";

/**
 * THIS IS THE RESTAURANT DASHBOARD
 * IT WILL ONLY DISPLAY THE CURRENT MEALS THAT THE RESTAURANT HAS UPLOADED.
 * MEALS WILL HAVE:
 * a) Price
 * b) Picture
 * c) Name / Title
 * d) Category
 * e) Description
 * THIS PAGE MUST BE PROTECTED.
 * THE NAVBAR WILL SHOW ALL TYPES OF ORDERS,
 * - orders in progress,
 * - orders ready for pickup
 * - new orders
 * - order history
 */

const Dashboard = ({ meals }) => {
  return (
    <>
      <Navbar />
      <Catalog meals={meals} />
    </>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/meal");

  return {
    props: {
      meals: data,
    },
  };
}
