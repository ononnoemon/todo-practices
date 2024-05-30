import React, { useState } from 'react'
import './style.css'

export default function FormHandle() {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleOnName=(e)=>{
        setName(e.target.value);
    }
    const handleOnEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleOnPassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleOnSubmit=(e)=>{
        console.log("Form is submited");
        e.preventDefault();
        console.log(name,email,password)
    }

  return (
    <div >
       <form action="" onSubmit={handleOnSubmit}>
       <div className='container'>
         <div className='field'>
            <div className='component'>
             <label  htmlFor="">Name</label><br/>
             <input type="text" name='name' id='name' onChange={handleOnName} value={name}/>
        </div>
        <div>
             <label  htmlFor="">Email</label><br/>
             <input type="email" name='email' id='email' onChange={handleOnEmail} value={email} />
        </div>
        <div>
            <label htmlFor="">Password</label> <br />
            <input type="password" name='password' id='password' onChange={handleOnPassword} value={password} />
        </div>
        <div>
            <button>Login</button>
        </div>
            </div>
        
        </div>

       </form>
        
    </div>
  )
}
