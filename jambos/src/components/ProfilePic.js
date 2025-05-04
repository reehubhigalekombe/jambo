import React, {useState, useRef} from 'react';
import axios from 'axios';
import { IconButton,Menu, MenuItem, Avatar } from '@mui/material';

function ProfilePic({userId, currentPic, refreshProfile}) {
    const fileInputRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const[preview, setPreview] = useState(currentPic);
    const handleFileChange = async (e) => {
        const file = e.target.file[0];
        if(!file) return;
        const formData = new formData();
        formData.append("image", file)
        formData.append("userId", userId)
        try {
            const res = await axios.post("http://localhost:5002/api/users/uploads", formData)
            setPreview(res.data.imagePath);
            refreshProfile()
            handleClose()
        }catch(err) {
            console.error(err)
        }
    }

const handDelete = async () => {
    try {
        await axios.delete(`http://localhost:5002/api/users/${userId}/delete-image`);
        setPreview(null);
        refreshProfile();
        handleClose();

    }catch(err) {
        console.error(err)
    }
};
const handleClick = (e) => setAnchorEl(e.currentTarget)
const handleClose = () => setAnchorEl(null)

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar
        src={preview ? `http://localhost:5002/${preview}` : "default-profile.png"}
        sx={{
            width: 40,
            height: 40
        }}
        />
      </IconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => fileInputRef.current.click()}>
        Upload new
        </MenuItem>
        <MenuItem onClick={handDelete}>
        Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>Cancel</MenuItem>
      </Menu>

      <input 
      type='text'
      ref={fileInputRef}
      accept='image/*'
      onChange={handleFileChange}
      />
    </div>
  )
}

export default ProfilePic
