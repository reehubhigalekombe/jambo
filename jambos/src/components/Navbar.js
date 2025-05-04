
import React, {useState, useEffect}from 'react';
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar"
import HomeIcon from "@mui/icons-material/Home";
import ChatBubleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GroupIcon from "@mui/icons-material/Group"
import ProfilePic from './ProfilePic';
import axios from 'axios';

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchUserInfo  = async () => {
    try {
      const res = await axios.post("http://localhost:5002/uploads");
      setCurrentUser(res.data)
    }catch(err) {
      console.error(err)
    }
  };
  
  useEffect(() => {
    fetchUserInfo()
  }, []);
  if(!currentUser) return null
  return (
    <div className='navbar'>
        <div className='nav-top'>
        
        </div>
        <div className='nav-bot'>
        <div className='nav-left'>
       <div> 
        <Avatar className='ava'
 sx={{
        bgcolor: "hwb(240 23% 3%)", width: 35, height:35, fontWeight: "bold",
        marginLeft: "20pxs"
    }}>
    j
 </Avatar></div>
 <div>
<TextField 
placeholder='Hey Search with jambo........'
fullWidth
sx={{
  "& .MuiOutlinedInput-root": {
    borderRadius: "98px",
    padding: "0", 
    height: 35, 
    fontSize: "14px", 
    "& input": {
      padding: "8px 14px", 
    },
    "& fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
      boxShadow: "none",

    }
  }
}}
InputProps={{
  endAdornment: (
    <InputAdornment position='end'>
      <IconButton>
      <SearchIcon/>
      </IconButton>

    </InputAdornment>
  ),
}}

  
 className='search-bar'/>
 </div>
        </div>
        <div className='nav-middle'>
          <div className='icon-layout'><Link to="/home"><HomeIcon className='middle-icons'/></Link></div>
          <div className='icon-layout'>
        <Link to="/chats"><ChatBubleOutlineIcon className='middle-icons'/></Link>  </div>
          <div className='icon-layout'>
          <Link to="/vidoe"><VideoLibraryIcon className='middle-icons'/></Link></div>
          <div className='icon-layout'><Link to="/account"><AccountCircleIcon className='middle-icons'/></Link></div>
            </div>
        <div className='nav-right'>
      <div  className='icon-layout' ><MenuOpenIcon className='middle-icons'/></div>
      <div  className='icon-layout'><GroupIcon className='middle-icons'/></div>
      <div  className='icon-layout'><CircleNotificationsIcon className='middle-icons'/></div>
      <div>
       <ProfilePic
       userId={currentUser._id}
       currentPic={currentUser.profilePic}
       refreshProfile={fetchUserInfo}
       
       />

    </div>
        </div>

        </div>
        
      
  </div>
)
}

export default Navbar