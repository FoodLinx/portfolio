import React, { useEffect, useState } from 'react'
import styles from './catalog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Catalog = ({ meals = [] }) => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredMeals, setFilteredMeals] = useState([])

  useEffect(() => {
    const filterMeals = () => {
      setFilteredMeals(() => {
        if (activeCategory) {
          if (activeCategory === "all") {
            return meals;
          }
          return [...meals].filter((meal) => meal.category === activeCategory);
        }
      });
    };
    activeCategory && filterMeals();
  }, [activeCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Food Categories</h3>
        </div>
        <div className={styles.categories}>
          <span
            onClick={() => setActiveCategory("all")}
            className={`${styles.category} ${activeCategory === "all" ? styles.active : ""
            }`}
          >
            All
          </span>
          <span
          onClick={() => setActiveCategory("pizza")}
            className={`${styles.category} ${activeCategory === "pizza" ? styles.active : ""
            }`}
          >
            Pizza
          </span>
          <span
          onClick={() => setActiveCategory("burger")}
            className={`${styles.category} ${activeCategory === "burger" ? styles.active : ""
            }`}
          >
            Burger
          </span>
          <span
            onClick={() => setActiveCategory("seafood")}
            className={`${styles.category} ${activeCategory === "seafood" ? styles.active : ""
            }`}
          >
            SeaFood
          </span>
          <span
            onClick={() => setActiveCategory("chicken")}
            className={`${styles.category} ${activeCategory === "chicken" ? styles.active : ""
            }`}
          >
            Chicken
          </span>
          <span
            onClick={() => setActiveCategory("steak")}
            className={`${styles.category} ${activeCategory === "steak" ? styles.active : ""
            }`}
          >
            Steak
          </span>
          <span
            onClick={() => setActiveCategory("vegan")}
            className={`${styles.category} ${activeCategory === "vegan" ? styles.active : ""
            }`}
          >
            Vegan
          </span>
        </div>
        {filteredMeals?.length > 0 ? (
          <div className={styles.meals}>
            {filteredMeals?.map((meal) => (
              <Link
              href={`/restaurant/meal/${meal?._id}`}
              key={meal?._id}
              className={styles.meal}
              >
                <div className={ styles.imgContainer}>
                  <Image src={meal?.image} alt="" width={250} height={250} />
                </div>
                <div className={ styles.mealData}>
                  <h5>{meal.title}</h5>
                  <span>${meal?.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
            <h2 className = {styles.noMeal}>
        There are no {activeCategory} meals at the moment.
            </h2>
        )}
      </div>
    </div>
  )
}

export default Catalog