import React from 'react';

import React, { useState } from 'react';

import './Main.css';



function ProfilePictureForm(props) {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(props.profilePictureUrl || null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the file, like send it to a server or store it locally
        console.log(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            {previewUrl ? (
                <img src={previewUrl} alt="Profile picture" width="100" height="100" />
            ) : (
                <div>No profile picture selected</div>
            )}
            <label>
                Upload a new profile picture:
                <input type="file" onChange={handleFileChange} />
            </label>
            <br />
            <button type="submit">Save</button>
        </form>
    );
}

export default ProfilePictureForm;