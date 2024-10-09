import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import MenuBar from '../../MenuBar';
import { API } from 'aws-amplify';
 
//list all depts that do not have an admin
//get dept and email from user from form
//update department with email as admin


export default function Admin_CreateNewDepartment() {
    const [errorPopup, setErrorPopup] = useState();
    const [successPopup, setSucessPopup] = useState();
    const [formState, setFormState] = useState({ department: '', email: '' }); 
    const [departments, setDepartments] = useState([]);

    //update department upon selection
    const updateDepartment = async () => {

    }

    //get departments to display
    const fetchInactiveDepartments = async () => {
        try {
            const response = await API.get('getInactiveDepartments-API', '/getInactiveDepartments')
            const data = await response.json()
            console.log(data)

        } catch (error) {
            console.error('Error fetching departments:', error);
            setErrorPopup(true);
        }
    };

    //initialization
    useEffect(() => {
        fetchInactiveDepartments(); 
    }, [])

    

    return (
        <>
        <div className='admin-create-new-department-content-container'>
                {<MenuBar />}
                
                


        </div>
        </>
    );
}