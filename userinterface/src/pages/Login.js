import React, {useState} from 'react'
import loginsignupimage from "../asset/loginAnimate.gif";
import { Link } from 'react-router-dom';


const Login = () => {

    const [data, setData]=useState({
        
        email:"",
        password: "",
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



    const handleSubmit=(e)=>{
        e.preventDefault()
        const {email,password}=data
        if(email && password){
            
                alert("Successfully logged in")
            
        }
        else{
            alert("Please enter required fields!")
        }}
  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={loginsignupimage} className='w-full'/>
            
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            
            <label htmlFor='email'>Email</label>
            <input type={"email"} id="email" name="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.email} onChange={handleOnChange}/>
        
            <label htmlFor='pasword'>Password</label>               
            <input type={"password"} id="password" name="password" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-green-400' value={data.password} onChange={handleOnChange}/>
            
                      
            <button type="submit" className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Log in</button>
        </form>
        <p className='text-left text-sm mt-2'>Don't have an account? <Link to={'/signup'} className='text-red-500 underline'>Signup</Link></p>
    </div>
</div>
  )
}

export default Login