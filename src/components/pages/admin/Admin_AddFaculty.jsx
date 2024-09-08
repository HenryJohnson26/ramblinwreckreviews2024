/* This is previous team code and our team did not touch this file logic*/
import "../../../css/Admin_ManageFaculty.css";
import { useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Popup } from "reactjs-popup";
import MenuBar from '../../MenuBar';
import AWS_Authenticator from '../../AWS_Authenticator';
import AuthStatusEnum from "../../../types/AuthStatusEnum";


import axios from "axios";

export default function Admin_AddFaculty() {
  //stores users under a selected department
  //const [users, setUsers] = useState([]);
  //re-renders page without state change
  //const [forceRender, setRender] = useState(0);

  const [departments, setData] = useState([]);
  useEffect(() => {
    axios
    .get(
     // "https://tsqijk5fz2.execute-api.us-east-2.amazonaws.com/default/getAdmin",
      "https://3l2g4sxaue.execute-api.us-east-2.amazonaws.com/prod/department",
        {
          params: {
            ftn: "getDept",
            params: "3"
          },
        }
      )
      .then(response => {
        setData(JSON.parse(response.data.body));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  //   .then((res) => {} setData(res));//console.log(JSON.parse(res.data.body)))
  //   .catch((err) => console.log(err));
  // }, []);
  

  //holds user input for the invitation form
  const [inviteFormState, setInviteFormState] = useState({
    first: "",
    last: "",
    email: "",
    department: "",
    accessTag: "",
  });

   //Updates form state when radio button is selected for access tags for the new faculty form
   const handleRadioButtons = (event) => {
    event.preventDefault();
    setInviteFormState({ ...inviteFormState, accessTag: event.target.id });
  };

  const updateDepartment = async (event) => {
    event.preventDefault();

    //if the person choose '--Choose--', set to empty string for error handling
    if (event.target.value === "--Choose--") {
      setInviteFormState({ ...inviteFormState, department: "" });
      return;
    }

    //otherwise set the department value to what the user chose
    setInviteFormState({
      ...inviteFormState,
      department: event.target.value,
    });
  };


  const handleInvite = (event) => {
    setInviteFormState({
      ...inviteFormState,
      [event.target.name]: event.target.value,
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    let body = {
      first: inviteFormState.first,
      last: inviteFormState.last,
      email: inviteFormState.email,
      department: inviteFormState.department,
      accessTag: inviteFormState.accessTag,
    };

    //Updates form state when radio button is selected for access tags for the new faculty form
  const handleRadioButtons = (event) => {
    event.preventDefault();
    setInviteFormState({ ...inviteFormState, accessTag: event.target.id });
  };

  //var departments = getDepartment(null);

  // const [Data, setData] = useState([]);
  // useEffect(() => {
    // axios
    //   .get(
    //     "https://ca5skkscwb.execute-api.us-east-2.amazonaws.com/lambdaStage/getQuestion")
    //   .then((res) => console.log(JSON.parse(res.data.body)))
    //   .catch((err) => console.log(err));
  // }, []);

    axios
      .post(
        "https://5c8yjiqti9.execute-api.us-east-2.amazonaws.com/dev/postAdmin",
        {
          first: inviteFormState.first,
          last: inviteFormState.last,
          email: inviteFormState.email,
          department: inviteFormState.department,
          accessTag: inviteFormState.accessTag,
    //inviteFormState
        }
      )
      .then((Response) => console.log(Response))
      .catch((Error) => console.log(Error));
  }
  return (
    <div className="admin-manage-faculty-content-container">
       {/* {<MenuBar />}  */}
      {/* Draws the section that displays the 'Preview Questions by Category' Box */}
      <div className="admin-manage-faculty-background-admin">
        <div className="admin-manage-faculty-card-content">
        <h3 className="admin-manage-faculty-form-title">
              Invite Faculty Membe
            </h3>
            {/* Draws the section that allows the admin to enter the question content and add the question to a category */}
            <div>

        <div className="admin-manage-faculty-add-faculty-form">
          <form onSubmit={handleSubmit}>
                  {/* First and Last Names for Form */}
                  <div className="admin-manage-faculty-div-name">

                    <span className="admin-manage-faculty-span-name">
                      <h3 className="admin-manage-faculty-form-subheaders">
                        First:
                      </h3>
                      <input
                        className="admin-manage-faculty-input-name"
                        type="text" onChange={handleInvite} name="first"></input>
                    </span>
                  </div>
                  <div className="admin-manage-faculty-div-name">

                    <span className="admin-manage-faculty-span-name">
                      <h3 className="admin-manage-faculty-form-subheaders">
                        Last:
                      </h3>
                      <input
                        className="admin-manage-faculty-input-name"
                         type="text" onChange={handleInvite} name="last"></input>
                        </span>
                  </div>
                  <div className="admin-manage-faculty-div-name">

                    <span className="admin-manage-faculty-span-name">
                      <h3 className="admin-manage-faculty-form-subheaders">
                        Email:
                      </h3>
                      <input
                        className="admin-manage-faculty-input-name"
                         type="text" onChange={handleInvite} name="email"></input>
                         </span>
                  </div>
                  <div className="admin-manage-faculty-div-name">

                    {/* Dropdown menu for all the departments */}
                  <span className="admin-manage-faculty-faculty-span">
                    <h3 className="admin-manage-faculty-form-subheaders">
                      Department:
                    </h3>
                    <select
                      className="admin-manage-faculty-department-dropdown"
                      onChange={updateDepartment}
                    >
                      <option key={0}>--Choose--</option>
                      {departments.map(item  => (
                        <option key={item.id}>{item.dept_name}</option>
                      ))}
                    </select>
                  </span>
                   </div>
                   <div className="admin-manage-faculty-div-name">

                   <span className="admin-manage-faculty-faculty-span">
                    <h3 className="admin-manage-faculty-form-subheaders">
                      Access:
                    </h3>
                    <div className="admin-manage-faculty-access-selection">
                      <input
                        onChange={handleRadioButtons}
                        name="access"
                        id="professor"
                        type="radio"
                      ></input>
                      <label htmlFor="professor">Professor</label>
                      <input
                        onChange={handleRadioButtons}
                        name="access"
                        id="admin"
                        type="radio"
                      ></input>
                      <label htmlFor="admin">Admin</label>
                    </div>
                  </span>
                         </div>
                        <div >
                          <div></div>
                        <button className="admin-manage-faculty-invite-button">Click me</button>
                        </div>
                    
                    </form>
                </div>
            </div>       
        </div>
      </div>
    </div>
  );
}
