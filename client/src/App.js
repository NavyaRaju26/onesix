import React, { useState } from "react";
import axios from "axios";

function App() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");

const addStudent = () => {

axios.post("https://student-registration-api-8xbm.onrender.com/add",{
name:name,
email:email
}).then(()=>{
alert("Student Added Successfully");
});

};

return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Student Registration</h2>

<input
placeholder="Enter Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={addStudent}>Submit</button>

</div>

);

}

export default App;
