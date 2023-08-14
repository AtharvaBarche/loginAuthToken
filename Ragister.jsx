import React, {  useState } from "react";


function Registrationform(){

   const [email , setEmail] = useState();
   const [password , setPassword] = useState();
   const [userType , setUserType] = useState("")
   const [secretKey , setSecretKey] = useState("")


/*async function handleChange(e){
    setSecretKey({...secretKey , [e.target.name]: e.target.value})
    setUserType(e.target.value)
   setEmail
}*/

  async function handleSubmit(e){
    if(userType === "Admin" && secretKey!="sk"){
        e.preventDefault();
        alert("Invalid User");
    }else{
        e.preventDefault(); 
          
        const response =  await fetch('http://localhost:8000/register',{
           method:'POST',
           body: JSON.stringify({
            email,
            password,
            userType
           }),
           crossDomain:true,
           headers:{
               "Content-Type": "application/json",
               "Access-Control-Allow-Origin": "*",
           }
          }).then((res)=> res.json())
          .then((data , token)=>{
           console.log(token)
           if(data){
               alert("Ragistration successful");
           }else{
               alert("Something went wrong");
           }
          })
                
   }

    } 
          
   /* async function getUsers(){
          
        const response =  await fetch('http://localhost:8000/register',{
            method:'GET',
           })
           const data = await response.json();
           setUsers(data);             
    }

    useEffect(()=>{
    getUsers();
    },[])*/

return(<div>
    <h1>Registration form</h1>

    <form onSubmit={handleSubmit}>
            <input type="radio" name="UserType" value="Admin" onChange={(e)=>setUserType(e.target.value)} />Admin
            <input type="radio" name="UserType" value="Student" onChange={(e)=>setUserType(e.target.value)} />Student
            <input type="radio" name="UserType" value="Faculty" onChange={(e)=>setUserType(e.target.value)} />Faculty
            <input type="radio" name="UserType" value="Mentor" onChange={(e)=>setUserType(e.target.value)} />Mentor
            {userType ==="Student"? null:<div><label >Key</label>
                    <input type="text" name="password" id="password"  onChange={(e)=>setSecretKey(e.target.value)} />
                </div>}
                
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">password</label>
            <input type="password" name="password" id="password"  onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button >Ragister</button>
    </form>
    <div>
      {/*  {users.map((user)=>{return(<li>{user.email} , {user.password}</li>)})}*/}
    </div>
</div>);
}
export default Registrationform;