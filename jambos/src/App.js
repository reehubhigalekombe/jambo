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


function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}  />
    <Route path="/vidoe" element={<Videos/>}  /> 
    <Route path="/vidoe" element={<Account/>}  /> 
    <Route path="/vidoe" element={<Chats/>}  /> 
  </Routes>
</Router>
    </div>
  );
}

export default App;
