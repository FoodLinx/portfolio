import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export default function Navbar() {
  const { user } = useUser();
  const [role, setRole] = useState("");

  useEffect(() => {
    async function run() {
      let options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      };
      const response = await axios.get(
        "http://localhost:3000/api/profiles/getRole",
        options
      );
      if (response.status === 200) {
        setRole(response.data.role);
      } else if (response.status === 203) {
        console.log(response.data.message);
      } else {
        console.log("fatal error");
      }
    }
    run();
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/">FoodLinx</Link>
            </div>
          </div>
          <div className={styles.right}>
            {/*common links are visible only to signed out users */}
            {!user && (
              <>
                <div className={styles.link}>
                  <Link href="/menus">Menus</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/about">About</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/contact">Contact</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/api/auth/login">Login/SignUp</Link>
                </div>
              </>
            )}

            {/* if the logged in user is a user then show following links */}
            {user && role === "user" && (
              <>
                <div className={styles.link}>
                  <Link href="#">Basket</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Orders</Link>
                </div>
              </>
            )}

            {/* if the logged in user is a resturant owner then show following links */}
            {user && role === "resturant" && (
              <>
                <div className={styles.link}>
                  <Link href="#">Incoming Orders</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Orders In Progress</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Orders Ready For Pickup</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Order History</Link>
                </div>
                <div className={styles.addMeal}>
                  <Link href="/restaurant/meal/addMeal">Add Meal</Link>
                </div>
              </>
            )}

            {/* Delivery links */}

            {user && role === "driver" && (
              <>
                <div className={styles.link}>
                  <Link href="#">Orders Ready For Pickup</Link>
                </div>
                <div className={styles.link}>
                  <Link href="#">Pickup History</Link>
                </div>
              </>
            )}

            {/* System administrator */}

            {user && role === "admin" && (
              <>
                <div className={styles.link}>
                  <Link href="/admin/dashboard">My Admin</Link>
                </div>
              </>
            )}

            {user && (
              <>
                <div className={styles.logout}>
                  <Link href="/api/auth/logout">Logout</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

