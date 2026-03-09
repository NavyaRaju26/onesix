import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [students,setStudents] = useState([]);

const API = "https://onethree-mkiz.onrender.com";

const addStudent = () => {

axios.post(API + "/add",{
name:name,
email:email
})
.then(()=>{
alert("Student Added Successfully");
setName("");
setEmail("");
fetchStudents();
});

};

const fetchStudents = () => {

axios.get(API + "/students")
.then((res)=>{
setStudents(res.data);
});

};

useEffect(()=>{
fetchStudents();
},[]);

return(

<div style={styles.container}>

<h1 style={styles.heading}>Student Registration</h1>

<div style={styles.card}>

<input
style={styles.input}
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
style={styles.input}
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button style={styles.button} onClick={addStudent}>
Submit
</button>

</div>

<h2>Registered Students</h2>

<table style={styles.table}>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>
</thead>

<tbody>

{students.map((s)=>(
<tr key={s.id}>
<td>{s.id}</td>
<td>{s.name}</td>
<td>{s.email}</td>
</tr>
))}

</tbody>
</table>

</div>

);

}

const styles = {

container:{
textAlign:"center",
fontFamily:"Arial",
background:"#f4f6f9",
minHeight:"100vh",
padding:"30px"
},

heading:{
color:"#333"
},

card:{
background:"white",
padding:"20px",
margin:"20px auto",
width:"300px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
},

input:{
width:"90%",
padding:"10px",
margin:"10px",
border:"1px solid #ccc",
borderRadius:"5px"
},

button:{
padding:"10px 20px",
background:"#4CAF50",
color:"white",
border:"none",
borderRadius:"5px",
cursor:"pointer"
},

table:{
margin:"20px auto",
borderCollapse:"collapse",
width:"60%",
background:"white"
}

};

export default App;
