import React ,{useState}from "react";
import Registrationform from "./Ragister";
import Loginform from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Faculty from "./Faculty";
import Student from "./Student";
import Mentor from "./Mentor";



function App(){
      const [token, setToken] = useState('');
  
      return(<div>
      <Router>
      <Routes>
      <Route  exact path="/" element={<Loginform setToken={setToken} />}></Route>
      <Route  path="/mentor"  element={<Mentor token={token} />}></Route>
      <Route  path="/admin" element={<Admin token={token} />}>  </Route>
      <Route  path="/student"  element={<Student token={token} />} ></Route>
      <Route  path="/faculty"  element={<Faculty token={token} />}></Route>
     <Route   path="/ragistration"  element={<Registrationform  />} ></Route>
      </Routes>
      </Router>

      </div>)
}
export default App;