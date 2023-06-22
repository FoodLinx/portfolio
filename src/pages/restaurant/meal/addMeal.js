/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/restaurant/meal/addMeal.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import app from "@/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

/**
 * PAGE SHOULD BE PROTECTED
 * @returns Returns a newly created meal.
 * MEAL WILL HAVE THE FOLLOWING PROPERTIES:
 * - Price
 * - Image
 * - Desc
 * - Title
 * - Category
 */

const AddMeal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("pizza");
  const [price, setPrice] = useState(50);
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // used to capture the form data

    // imports from firebase
    const storage = getStorage(app); // sets the storage path for firebase
    const filename = crypto.randomUUID() + photo.name; // self explanatory
    const storageRef = ref(storage, filename); // creates a reference point for wer the file is stored
    const uploadFile = uploadBytesResumable(storageRef, photo); // method of uploading the file

    // this is code executed once the upload is in progress.
    uploadFile.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused now");
            break;

          case "running":
            console.log("upload is running now");
            break;

          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const fileUrl = getDownloadURL(uploadFile.snapshot.ref);
        console.log(fileUrl);
        postMeal(fileUrl);
      }
    );
  };

  const postMeal = async (imageUrl) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/meal", {
        title,
        desc,
        category,
        price,
        image: imageUrl,
      });
      router.push(`/meal/${data._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <h2>Add Meal</h2>
            <input
              type="text"
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Desc..."
              onChange={(e) => setDesc(e.target.value)}
            />
            <select onChange={(e) => setCategory(e.target.value)}>
              <option disabled>Select Category</option>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="seafood">SeaFood</option>
              <option value="chicken">Chicken</option>
              <option value="steak">Steak</option>
              <option value="vegan">Vegan</option>
            </select>
            <input
              type="number"
              placeholder="Price..."
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className={styles.imageField}>
              <label htmlFor="image">Upload image</label>
              <input
                id="image"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <button>Upload Meal</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMeal;
