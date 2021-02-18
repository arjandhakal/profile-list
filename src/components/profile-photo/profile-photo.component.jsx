import React,{useEffect, useState} from 'react';
import './profile-photo.styles.css';
//importing icons
import {SiGoogle,SiLinkedin,SiFacebook,SiMicrosoftoffice,SiTwitter} from "react-icons/si";
//importing default avatar
import Avatar from "../../assets/avatar.png";
//Helper functions from util file
import {checkIndexChange} from '../../utils/utils';
//Loading Spinner
import Spinner from "../spinner/spinner.component";

//icons corresponding to the source of the photo
const sourceIcons = {
    google : <SiGoogle/>,
    linkedin : <SiLinkedin/>,
    facebook : <SiFacebook/>,
    office365 : <SiMicrosoftoffice/>,
    twitter : <SiTwitter/>}

const ProfilePhoto = ({photos}) => {
    //current index of photo being displayed
    const [index,setIndex] = useState(0);
    //resetting the index to 0 whenever the photos are rerendered
    useEffect(() => {
        setIndex(0)
    },[photos])
    console.log('change outside useeffect, index: ', index)
    //Failsafe in case index exceeds photos array while re rendering
    if(!photos[index]) return <Spinner/>
    //getting the values from the photos array
    const {url} = photos[index]
    const {source} = photos[index] || 'Unknown'
    //Saving the length of the photos array. 
    const photosLength = photos.length;
    //fallback function that sets a default image on image load error
    const setDefault = (e) => {
        e.target.src = Avatar;
    }    
    const nextPhoto = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndexChange(newIndex,photosLength)
        })
    }

    return (
        <div className='photo-container'>
           <div className="photo">
                <img src={url} alt="profile image " className="photo__img" onError={setDefault}/>
            </div>
            <span className="photo-source"><em>Source: </em> {sourceIcons[source] || '😵'}</span>
           <button className="next-photo-btn" onClick={nextPhoto}>Next Photo</button>
        </div>
    )
}

//use of memo to prevent rerender when photos props hasn't changed.
export default ProfilePhoto;