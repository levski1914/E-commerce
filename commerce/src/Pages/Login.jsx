import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthForm from './AuthForm'



const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('');

  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
    setError("");
    try{
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("Login successfuly");
      navigate('/')
    }catch(error){
      setError(error.message);
      toast.error("Login failed: wrong email/password")
      console.error(error);
    }
  }

  const fields=[
    {
      name:"email",
      type:"email",
      value:email,
      onChange:(e)=>setEmail(e.target.value),
      placeholder:"Email",
      label:"Enter your email",
    },{
      name:"password",
      type:"password",
      value:password,
      onChange:(e)=>setPassword(e.target.value),
      placeholder:"Password",
      label: "Type your password",
    }
  ]
  return (
<AuthForm 
  title="Login"
  fields={fields}
  handleSubmit={handleLogin}
  buttonLabel="Login"
  formClass="users"
  activeClass="active"
/>
  )
}

export default Login