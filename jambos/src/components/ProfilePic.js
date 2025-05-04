import React, {useState, useRef} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
function ProfilePic({userId, currentPic, refreshProfile}) {

    const fileInputRef = useRef();
    const[uploading, setUploading] = useState(false);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if(!file) return;

        const formData = new FormData();
        formData.append("image", file);
        formData.append("userId", userId);
        setUploading(true);
        try {
            await axios.post("http://localhost:5002/api/images/uploads", formData);
            refreshProfile();
        }catch(err) {
            console.error(err)
        } finally{
            setUploading(false)
        }

    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5002/api/images/${userId}/delete-image`);
           refreshProfile();

        }catch(err) {
            console.error(err)
        }
    }

  return (
    <div className='profile-pic'>
        <input 
        type='file' accept='image/*'
        style={{display: "none"}}
        ref={fileInputRef}
        onChange={handleUpload}
        />


        <Avatar
        src={currentPic ? `http:localhost:5002/${currentPic}` : ""}
        sx={{
            width: 50, height: 50, bgcolor: "red", cursor: "pointer"
        }}

        onClick={() => fileInputRef.current.click()}
        >
            {!currentPic && "U"}
        </Avatar>
        <IconButton 
        onClick={handleDelete}
        size ="small"
        style={{
            position: "absolute",
            bottom: -8, 
            right: -8,
            backgroundColor: 'white'
        }}
        >
            <DeleteIcon fontSize="small" />

        </IconButton>
<IconButton
onClick={() =>fileInputRef.current.click()}
size ="small"
        style={{
            position: "absolute",
            bottom: -8, 
            right: -8,
            backgroundColor: 'white'
        }}

>
    <AddAPhotoIcon fontSize="small"/>

</IconButton>
    </div>
  )
}

export default ProfilePic
