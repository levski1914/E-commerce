import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const AuthForm = ({title, fields, handleSubmit,activeClass, formClass, buttonLabel}) => {
 
  
  return (
    <>
           <div className="ProfileForm">
        <div  >
            <div className="formProfile">
                <div className="logToReg">
                    <div className="profileHeader">
                        <ul>
                        <li >

                          <Link  to="/register" className={title==="Create your account"?`profBtn ${activeClass}`:"profBtn"}  >
                          Sign up
                          </Link>
                          </li>
                            <li  >
                             <Link  to="/login"  className={title==="Login"?`profBtn ${activeClass}`:"profBtn"}  > Log in</Link>
                              </li>
                            
                        </ul>
                    </div>
                    <div className={formClass}>
                        <h2 style={{textAlign:"center"}}>{title}</h2>
                        <form className='inputs'  onSubmit={handleSubmit}>
                        {fields && Array.isArray(fields) && fields.map((field, index) => (
                              <div key={index}>
                                <label htmlFor={field.name}>{field.label}</label>
                                <input
                                  type={field.type}
                                  value={field.value}
                                  onChange={field.onChange}
                                  placeholder={field.placeholder}
                                  required
                                />
                              </div>
                            ))}

                              <div className="submit">
                                <button type='Submit'>{buttonLabel} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default AuthForm