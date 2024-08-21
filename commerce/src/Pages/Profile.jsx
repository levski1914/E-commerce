import React, { useEffect, useState } from 'react'
import './AuthForm.css'
import { useAuth } from '../../AuthContext'
import { db } from '../../firebase'
import {doc,deleteDoc,getDoc} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Profile.css'


const Profile = () => {
    const {currentUser}=useAuth();
    const [user,setUser]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchUser=async()=>{
            if(currentUser){
                try{
                    console.log("fetching data for user with uid:", currentUser.uid);
                    const userDoc=doc(db,"users",currentUser.uid);
                    const userSnapshow=await getDoc(userDoc);
                    if(userSnapshow.exists()){
                        console.log("user data:",userSnapshow.data());
                        setUser(userSnapshow.data());
                    }else{
                        console.log("no such doccument")
                        setError("no such doccument")
                    }
                }catch(error){
                    console.error(error);
                    setError("Failed to fetch user data. Please check your internet connection")
                }
            }else{
                navigate("/login")
            }
            setLoading(false);
        }
        fetchUser();
    },[currentUser,navigate])

  return (
 <>
    <div className="profilePage">
        {
            user?(

                <h1>Welcome back, {user.name} </h1>
            ):(
                <>
                
                </>
            )
        }

        <div className="profileMenu">
            <ul>
                <li>
                    <Link to="/">
                    <FontAwesomeIcon icon="fa-solid fa-book" />
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                            Wishlist
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    Billing address
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    Shipping Address
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                    Change password
                    </Link>
                </li>
            </ul>
        </div>
    </div>
 </>
  )
}

export default Profile