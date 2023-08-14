import React ,{ useEffect, useState }from "react";
import {  useNavigate } from "react-router-dom";

function Loginform(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [accessToken, setAccessToken] = useState('');
    
    const navigate = useNavigate();
  
    
    async function handleLogin() {
        try {
          const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              userType,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const { accessToken } = response.json();
          setAccessToken(accessToken);
          setIsLoggedIn(true);
         
          if (accessToken) {
            const responseData = await response.json();
            const {role} = responseData;
            setUserRole(role);
          } else {
            console.error("Authentication failed");
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      }
    
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [userRole, setUserRole] = useState("");
      useEffect(() => {
        if (isLoggedIn) {
          switch (userRole.toLocaleLowerCase()) {
            case "admin":
              navigate("/admin");
              break;
            case "student":
              navigate("/student");
              break;
            case "faculty":
              navigate("/faculty");
              break;
            case "mentor":
              navigate("/mentor");
              break;
            default:
          }
        }
      }, [isLoggedIn, userRole, navigate]);
    
    

        return(<div>
            <h1>Login</h1>
        
            <form onSubmit={handleLogin}>
            <input type="radio" name="UserType" value="Admin" onChange={(e)=>setUserType(e.target.value)} />Admin
            <input type="radio" name="UserType" value="Student" onChange={(e)=>setUserType(e.target.value)} />Student
            <input type="radio" name="UserType" value="Faculty" onChange={(e)=>setUserType(e.target.value)} />Faculty
            <input type="radio" name="UserType" value="Mentor" onChange={(e)=>setUserType(e.target.value)} />Mentor
      
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label >password</label>
                    <input type="password"  onChange={(e)=>setPassword(e.target.value)} />
                </div>
               
                <button onClick={(e) => { e.preventDefault(); handleLogin(); }}>Login</button>
            </form>
            <div>
              {/*  {users.map((user)=>{return(<li>{user.email} , {user.password}</li>)})}*/}
            </div>
        </div>);
            }
export default Loginform;



