import React, { useState } from 'react'

export default function ChildtoParent() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleOnName=(e)=>{
        setName(e.target.value);
    }
    const handleOnEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleOnPass=(e)=>{
        setPassword(e.target.value);
    }
    const userInfo={
        name:"name",
        email:"email",
        pass:"password"
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(userInfo);
    }
  return (
    <div>
        <form action="" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="">Name</label><br/>
                <input type="text" name="name" onChange={handleOnName} />
            </div>
            <div>
                <label htmlFor="">Email</label><br/>
                <input type="text" name="email" onChange={handleOnEmail} />
            </div>
            <div>
                <label htmlFor="">Password</label><br/>
                <input type="password" name="password" onChange={handleOnPass} />
            </div>
            <button >Submit</button>
        </form>
    </div>
  )
}
