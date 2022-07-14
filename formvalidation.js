import "./styles.css";
import React,{useState} from "react";
export default function App() {
  const [data,setData] =useState({
    username:'',
    email: '',
    password:'',
    cpassword:'',
  });
  const {username,email,password,cpassword} =data;
  const handler = e =>{
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const submitfunction= e=>{
    e.preventDefault();
    if(password !== cpassword){
      alert("pasword and confirm password doesnot match");
    }
    else{
      console.log(data);}
  }
  return (
    <div className="App">
      <center>
        <form onSubmit={submitfunction}>
          <input type="text" name="username" value={username} placeholder="enter name" onChange={handler} /> <br /><br/>
          <input type="email" name="email" value={email} onChange={handler} placeholder="enter email"/>  <br /><br/>
          <input type="password" name="password" value={password} placeholder="enter password" onChange={handler} />  <br /><br/>
          <input type="confirmpassword" name="cpassword" placeholder="enter confirm password" value={cpassword}  onChange={handler} />  <br /><br/>
          <input type="submit" />
          
        </form>
      </center>
    </div>
  );
}
