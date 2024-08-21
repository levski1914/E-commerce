// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import products from "./products.json"; // Път към вашия JSON файл
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfDRLhTpf6yNSo2yt21-cF87icVZZ2LY",
  authDomain: "gaming-4c9c9.firebaseapp.com",
  projectId: "gaming-4c9c9",
  storageBucket: "gaming-4c9c9.appspot.com",
  messagingSenderId: "235365754422",
  appId: "1:235365754422:web:0ef733eebd906b8b4f5a97",
  measurementId: "G-1DTB3HXLLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// const uploadProducts = async () => {
//   try {
//     const productsCollection = collection(db, "products");
//     for (const product of products.ProductCollection) {
//       await addDoc(productsCollection, product);
//       console.log(`Качен продукт: ${product.Title}`);
//     }
//     console.log("Всички продукти са успешно качени!");
//   } catch (error) {
//     console.error("Грешка при качването на продуктите:", error);
//   }
// };

// // Изпълнение на функцията
// uploadProducts();
