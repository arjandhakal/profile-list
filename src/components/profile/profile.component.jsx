import React,{useState} from 'react';
import './profile.styles.css';
//importing the icons to be used
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//Helper function from util file to prevent out of bounds while shuffling profile array.
// and to sort the photos based on priority
import {checkIndexChange,sortbyPriority} from '../../utils/utils';
//Profile photo component
import ProfilePhoto from "../profile-photo/profile-photo.component";

//Priority rank of the photos to be displayed
const priorityArray =  ["google","linkedin","facebook","twitter","office365"]

const Profile = ({ profiles }) => {
    //Current index of the profile being displayed
    const [index,setIndex] = useState(0);

    const {firstName, lastName, photos} = profiles[index];
    //sorting the photos array based on priority
    const sortedPhotos = sortbyPriority(photos,priorityArray,"source");

    //Saving the length of the profile array. 
    const profilesLength = profiles.length;

    const nextProfile = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndexChange(newIndex,profilesLength)
        })
    }
    
    const prevProfile = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndexChange(newIndex,profilesLength)
        })
    }

    return (
        <div className="profile">
            <div className="profile__photo">
                <ProfilePhoto photos={sortedPhotos} />
            </div>
            <div className="profile__info">
                    {`${firstName || ''} ${lastName || ''}`}
            </div>
            <div className='button-container'>
                <button className="prev-btn" onClick={prevProfile}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextProfile}>
                    <FaChevronRight/>
                </button>
            </div>
        </div>
    )
}

export default Profile;