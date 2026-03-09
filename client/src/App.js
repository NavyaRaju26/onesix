import React, { useState } from "react";
import axios from "axios";

function App() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");

const addStudent = () => {

axios.post("http://localhost:5000/add",{
name:name,
email:email
}).then(()=>{
alert("Student Added Successfully");
});

};

return(

<div style={styles.container}>

<div style={styles.card}>

<h2 style={styles.title}>Student Registration</h2>

<input
style={styles.input}
type="text"
placeholder="Enter Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
style={styles.input}
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<button style={styles.button} onClick={addStudent}>
Submit
</button>

</div>

</div>

);

}

const styles = {

container:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#74ebd5,#ACB6E5)",
fontFamily:"Arial"
},

card:{
background:"white",
padding:"40px",
borderRadius:"10px",
boxShadow:"0 8px 20px rgba(0,0,0,0.2)",
textAlign:"center",
width:"300px"
},

title:{
marginBottom:"20px"
},

input:{
width:"100%",
padding:"10px",
margin:"10px 0",
borderRadius:"5px",
border:"1px solid #ccc",
fontSize:"14px"
},

button:{
width:"100%",
padding:"10px",
background:"#4CAF50",
color:"white",
border:"none",
borderRadius:"5px",
fontSize:"16px",
cursor:"pointer"
}

};

export default App;
