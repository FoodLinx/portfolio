import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import axios from "axios";
import styles from "@/styles/restaurant/meal/meal.module.css";

/**
 * @returns The details of meal based on the meal id
 */

const MealDetails = ({ meal }) => {
  const handleClick = async (meal_id) => {
    await axios.post("http://localhost:3000/api/basket/addToBasket", {
      meal_id: meal_id,
    });
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Image src={meal.image} alt="" width={400} height={400} />
          </div>
          <div className={styles.right}>
            <h3>{meal.title}</h3>
            <span className={styles.category}>
              Category: <span>{meal.category}</span>
            </span>
            <p className={styles.desc}>
              Meal Description:{" "}
              <span>
                {" "}
                {meal.desc.length > 70
                  ? `${meal.desc.slice(0, 70)}...`
                  : meal.desc}
              </span>
            </p>
            <span className={styles.price}>
              Price: $<span>{meal.price}</span>
            </span>
            <button
              className={styles.orderButton}
              onClick={() => handleClick(meal._id)}
            >
              Order
            </button>
            <span className={styles.readyIn}>
              Meals are prepared in 5 to 15 mins
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealDetails;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;

  const { data } = await axios.get(`http://localhost:3000/api/meal/${id}`);

  return {
    props: {
      meal: data,
    },
  };
}
