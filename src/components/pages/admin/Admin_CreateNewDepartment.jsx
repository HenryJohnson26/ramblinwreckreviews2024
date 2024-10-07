import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import MenuBar from '../../MenuBar';

//list all depts that do not have an admin
//get dept and email from user from form
//update department with email as admin


export default function Admin_CreateNewDepartment() {
    const [errorPopup, setErrorPopup] = useState();
    const [successPopup, setSucessPopup] = useState();
    const [formState, setFormState] = useState({department: '', email: ''}); 

    //update department upon selection
    const updateDepartment = async () => {

    }

    return (
        <>
        <div className='admin-create-new-department-content-container'>
            {<MenuBar />}


        </div>
        </>
    );
}