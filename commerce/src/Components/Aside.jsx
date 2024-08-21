import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { doc } from 'firebase/firestore'

import { useAuth } from '../../AuthContext'

const Aside = () => {

    const [tabOpen,setTabOpen]=useState(false);
    const {currentUser}=useAuth();
    const ref = useRef();
    useEffect(() => {
      const handler = (e) => {
        if (
          tabOpen &&
          ref.current &&
          !ref.current.contains(e.target)
        ) {
          setTabOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
      };
    }, [tabOpen]);

  return (
    <div >
        <div className="container Aside" ref={ref}>
            <div className="logo">
         <FontAwesomeIcon icon="fa-solid fa-gamepad" />
                <h1>Game</h1>
                <h1>Store</h1>
            </div>
            <nav className="navigation" >
                <ul>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-house-chimney" />
                            Home
                        </Link>
                    </li>
                    <li>
                       
                        {
                            currentUser?(
                                <>
                                    <Link to="/profile">
                                  <FontAwesomeIcon icon="fa-solid fa-user" />


                                    Profile
                                    </Link>
                                </>
                            ):(
                                <>
 <Link to="/authForm">
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                            Account
                        </Link>
                                </>
                            )
                        }
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                            Favourite
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-wallet" />
                            Balance
                        </Link>
                    </li>
                </ul>
            </nav>
            <hr style={{color:"#fff"}} />
            <h2 onClick={()=>setTabOpen((prev)=>!prev)} style={{color:"#fff",marginTop:"1em"}}>Category </h2>
            <div className="Category navigation" >
                <ul  className={`categories${tabOpen?' show-menu':''}`}>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-desktop" />
                            <span>Computer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-headset" />
                            <span>Game Headphones</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-vr-cardboard" />
                            <span>VR Glasses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-regular fa-keyboard" />
                            <span>Keyboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <FontAwesomeIcon icon="fa-solid fa-computer-mouse" />
                            <span>Mouse Gaming</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>


    </div>
  )
}

export default Aside