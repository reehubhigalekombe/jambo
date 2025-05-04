import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
 import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Chats from "./pages/Chats";
import Account from "./pages/Account";
import ProfilePic from "./components/ProfilePic";


function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}  />
    <Route path="/vidoe" element={<Videos/>}  /> 
    <Route path="/account" element={<Account/>}  /> 
    <Route path="/chats" element={<Chats/>}  /> 
    <Route path="/profile" element={<ProfilePic/>}  />
  </Routes>
</Router>
    </div>
  );
}

export default App;
