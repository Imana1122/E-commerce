import React, {useState} from 'react'
import loginsignupimage from "../asset/loginAnimate.gif";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [data, setData]=useState({
        firstName: "",
        lastName: "",
        email:"",
        password: "",
        confirmPassword:"",
    })
    console.log(data)
    const handleOnChange= (e)=>{
        const {name,value}=e.target

        setData((preve)=>{
            return {
                ...preve,
                [name]:value
            }
        })
    }
    
    const handleUploadProfileImage=(e)=>{
    console.log(e.target.files[0])
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const {firstName,email,password,confirmPassword}=data
        if(firstName && email && password && confirmPassword){
            if (password === confirmPassword){
                alert("Successfully signed up")
            }
            else{
                alert("Password and confirm password are not same.")
            }
        }
        else{
            alert("Please enter required fields!")
        }
    }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                <img src={loginsignupimage} className='w-full'/>
                <label htmlFor="profileImage">
                <div className='absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer'>
                    <p className='text-sm p-1 text-white'>Upload</p>
                </div>
                <input type={"file"} id="profileImage" name="profileImage" className='hidden' accept="image/" onChange={handleUploadProfileImage}/>
            </label>
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type={"text"} id="firstName" name="firstName" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.firstName} onChange={handleOnChange}/>

                <label htmlFor='lastName'>Last Name</label>
                <input type={"text"} id="lastName" name="lastName" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.lastName} onChange={handleOnChange}/>

                <label htmlFor='email'>Email</label>
                <input type={"email"} id="email" name="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.email} onChange={handleOnChange}/>
            
                <label htmlFor='pasword'>Password</label>               
                <input type={"password"} id="password" name="password" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.password} onChange={handleOnChange}/>
                
                <label htmlFor='confirmPassword'>Confirm Password</label>               
                <input type={"password"} id="confirmPassword" name="confirmPassword" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.confirmPassword} onChange={handleOnChange}/>
                
                <button type="submit" className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
            </form>
            <p className='text-left text-sm mt-2'>Already have an account? <Link to={'/login'} className='text-red-500 underline'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup