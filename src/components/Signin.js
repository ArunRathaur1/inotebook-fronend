import React from 'react'
import { useState ,useContext} from 'react';
import NotesContext from "../context/Notes/NotesContext";
import {useNavigate} from 'react-router-dom'
export default function Signin(props) {
  const Notes = useContext(NotesContext);
    const { changeeapi } = Notes;
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[name,setname]=useState("");
    const[confirm,setconfirm]=useState("");
    const[message,setmessage]=useState(false);
    const[validemail,setemaill]=useState(false);
    const settingemail=(event)=>{
        setemail(event.target.value);
    }
    const settingname=(event)=>{
        setname(event.target.value);
    }
    const settingpassword=(event)=>{
        setpassword(event.target.value);
    }
    const settingconfrim=(event)=>{
        setconfirm(event.target.value);
    }
async function submitdetail(){
    console.log({name,email,password,confirm})
    if(password===confirm){
        const response = await fetch(`http://localhost:5000/auth/`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },body: JSON.stringify({
            name:name,
            password:password,
            email:email
          }),
        });
        setmessage(false);
        const json=await response.json();
        if(!json.success){
            setemaill(true);
        }
        else{
            setemaill(false);
            changeeapi(json.authToken);
            props.change("Successfully Created Account","success")
            navigate('/');
        }
        }
      else{
    setmessage(true);
      }  
}
  return (
    <>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail11" aria-describedby="emailHelp"value={name} onChange={settingname}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={settingemail}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword11" value={password} onChange={settingpassword}/>
    </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={confirm} onChange={settingconfrim}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={submitdetail}>Submit</button>
    {message && <h4>Password and confrim Password Must Be Same</h4>}
    {validemail && <h4>This email is alredy exist</h4>}
    </>
  )
}
