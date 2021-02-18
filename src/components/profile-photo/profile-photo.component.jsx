import React,{useEffect, useState} from 'react';
import './profile-photo.styles.css';
//importing icons
import {SiGoogle,SiLinkedin,SiFacebook,SiMicrosoftoffice,SiTwitter} from "react-icons/si";
//importing default avatar
import Avatar from "../../assets/avatar.png";
//Helper functions from util file
import {checkIndexChange} from '../../utils/utils';
import Spinner from '../spinner/spinner.component';


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
    //counter to track if all the photos fail
    const [failCounter,setFailCounter] = useState(0);
    //state to track if fallback image is loading
    const [loading,setLoading] = useState(false)

    //resetting the index and fail counter to 0 whenever photos of a 
    //new profile are rendered
    useEffect(() => {
        setIndex(0)
        setFailCounter(0)
    },[photos])

    //Failsafe in case index exceeds photos array while re rendering
    if(!photos[index]) return <Spinner/>

    //setting the url as image reference
    const {url} = photos[index]
    const {source} = photos[index] || 'Unknown'
    //Saving the length of the photos array. 
    const photosLength = photos.length;

    //Load the next photo
    const nextPhoto = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndexChange(newIndex,photosLength)            
        })
    }

    //fallback function that sets a default image on image load error
    const handleImageErrored = (e) => {
        setLoading(true);
        setFailCounter(failCounter + 1);
        //failCounter equal to all the photos show default Avatar
        if(failCounter === photosLength){
            e.target.src = Avatar;
            setLoading(false);
            return
        }
        //if not increase the index and get the other priority photo
        nextPhoto();        
    }    

    //function when image succesfully loaded
    const handleImageLoaded = (e) => {
        setLoading(false);
        setFailCounter(0);
    }



    return (
        <div className='photo-container'>
                <div className="photo">
                    <img src={url} alt="profile user " className="photo__img" onError={handleImageErrored} onLoad={handleImageLoaded}/>
                    </div>
                    <span className="photo-source"><em>Source: </em> {loading ? '😵' : sourceIcons[source] || '😵'}</span>
                <button className="next-photo-btn" onClick={nextPhoto}>Next Photo</button>
        </div>
    )
}

//use of memo to prevent rerender when photos props hasn't changed.
export default ProfilePhoto;